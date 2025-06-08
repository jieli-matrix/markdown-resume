<template>
  <ToolItem :text="t('toolbar.avatar.text')" icon="i-mdi:account-circle">
    <div class="space-y-3">
      <!-- Upload Button -->
      <label class="dropdown-li space-x-1.5 rounded cursor-pointer" role="button">
        <span i-mdi:upload text-base />
        <span>{{ t('toolbar.avatar.upload') }}</span>
        <input type="file" accept="image/*" class="hidden" @change="handleImageUpload" />
      </label>

      <!-- Clear Button -->
      <button
        v-if="currentAvatar"
        class="dropdown-li space-x-1.5 rounded text-rose-500 hover:text-rose-600 w-full"
        @click="clearAvatar"
      >
        <span i-mdi:delete text-base />
        <span>{{ t('toolbar.avatar.clear') }}</span>
      </button>

      <!-- Preview -->
      <div v-if="currentAvatar" class="px-2 pt-2">
        <img :src="currentAvatar" alt="Avatar Preview" class="w-full h-auto max-h-20 border border-c rounded" />
        <p class="mt-1 text-xs text-gray-500">{{ t('toolbar.avatar.preview') }}</p>
      </div>
      <div v-else class="px-2 pt-2 text-sm text-gray-400">
        {{ t('toolbar.avatar.no_avatar') }}
      </div>
    </div>
  </ToolItem>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { computed } from 'vue';
import { useCurrentResume } from '~/composables/resume';
import frontmatter from "@renovamen/front-matter";
import * as yaml from "js-yaml";

const { t } = useI18n();
const { currentResumeItem, updateCurrentResume } = useCurrentResume();
const { data } = useDataStore();

const currentAvatar = computed(() => currentResumeItem.value?.avatar);

const handleImageUpload = (event: Event) => {
  console.log('Avatar upload triggered');
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) {
    console.log('No file selected');
    return;
  }

  console.log('File selected:', file.name, file.type, file.size);

  const reader = new FileReader();
  reader.onload = (e) => {
    const result = e.target?.result as string;
    console.log('File read successfully, data URL length:', result.length);
    setAvatar(result);
  };
  reader.onerror = (e) => {
    console.error('Error reading file:', e);
  };
  reader.readAsDataURL(file);

  target.value = '';
};

const updateMarkdownFrontmatter = (avatarUrl: string | undefined) => {
  try {
    const { body, attributes } = frontmatter(data.mdContent);

    // Update the frontmatter with new avatar
    const updatedAttributes = { ...attributes };
    if (avatarUrl) {
      updatedAttributes.avatar = avatarUrl;
    } else {
      delete updatedAttributes.avatar;
    }

    // Use js-yaml to properly serialize the frontmatter
    let frontmatterYaml = '';
    if (Object.keys(updatedAttributes).length > 0) {
      const yamlString = yaml.dump(updatedAttributes, {
        indent: 2,
        lineWidth: -1, // Don't wrap lines
        noRefs: true,
        sortKeys: false
      });
      frontmatterYaml = `---\n${yamlString}---\n`;
    }

    const newMarkdown = frontmatterYaml + body;
    data.mdContent = newMarkdown;
    console.log('Updated markdown with avatar:', avatarUrl ? 'added' : 'removed');
    console.log('New frontmatter:', frontmatterYaml);
  } catch (error) {
    console.error('Error updating frontmatter:', error);
  }
};

const setAvatar = (avatarUrl: string | undefined) => {
  console.log('setAvatar called with:', avatarUrl ? 'data URL' : 'undefined');
  console.log('currentResumeItem exists:', !!currentResumeItem.value);

  if (!currentResumeItem.value) {
    console.error('No current resume item');
    return;
  }

  // Update both the storage item and the markdown content
  console.log('Updating current resume...');
  updateCurrentResume({ avatar: avatarUrl });
  console.log('Updating markdown frontmatter...');
  updateMarkdownFrontmatter(avatarUrl);
  console.log('Avatar update complete');
};

const clearAvatar = () => {
  setAvatar(undefined);
};

</script>