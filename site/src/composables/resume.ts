import { ref, watch, computed } from 'vue';
import type { ResumeStorageItem } from '~/types';
import { getStorage, saveResume } from '~/utils/database';
import { useDataStore } from './stores/data';

const currentResumeItem = ref<ResumeStorageItem | null>(null);

export function useCurrentResume() {
  const { data: systemData } = useDataStore();
  const currentId = computed(() => systemData.curResumeId);

  const loadResume = async (id: string | null) => {
    if (!id) {
      currentResumeItem.value = null;
      return;
    }
    const storage = await getStorage();
    currentResumeItem.value = storage && storage[id] ? { ...storage[id] } : null;
  };

  const updateCurrentResume = async (newData: Partial<ResumeStorageItem>) => {
    if (!currentId.value || !currentResumeItem.value) return;

    const updatedItem = { 
      ...currentResumeItem.value, 
      ...newData, 
      update: new Date().getTime().toString() // Always update timestamp
    };
    
    // Update reactive ref immediately for UI responsiveness
    currentResumeItem.value = updatedItem;
    
    // Persist changes
    await saveResume(currentId.value, updatedItem);
    
    // Update name in systemData if it changed
    if (newData.name && systemData.curResumeName !== newData.name) {
      systemData.curResumeName = newData.name;
    }
  };

  // Watch for ID changes and reload
  watch(currentId, async (newId) => {
    await loadResume(newId);
  }, { immediate: true }); // Load initially

  return {
    currentResumeItem,
    updateCurrentResume,
  };
} 