import type { ResumeStyles } from "~/types";

export const DEFAULT_NAME = "My Resume";

export const DEFAULT_STYLES = {
  marginV: 55,
  marginH: 45,
  lineHeight: 1.3,
  paragraphSpace: 5,
  themeColor: "#000000",
  fontCJK: {
    name: "华康宋体",
    fontFamily: "HKST"
  },
  fontEN: {
    name: "Verdana"
  },
  fontSize: 12,
  paper: "A4"
} as ResumeStyles;

export const DEFAULT_MD_CONTENT = `---
name: Bruce Wayne
header:
  - text: |
      <span style="font-size: 1.2em; font-weight: bold;">Applying for: Senior Cook </span>
  - text: <span class="iconify" data-icon="tabler:phone"></span> (+1) 123-456-7890
    newLine: true
  - text: <span class="iconify" data-icon="tabler:mail"></span> email@example.com
    link: mailto:mail@example.com
  - text: <span class="iconify" data-icon="tabler:brand-github"></span> github.com/example
    link: https://github.com/example
  
---

## Experience

**Machine Learning Engineer Intern**
  : **Slow Feet Technology**
  : **Jul 2021 - Present**

- Devised a new food-agnostic formulation for fine-grained cross-ingredient meal cooking and subsumed the recent popular works into the proposed scheme
- Proposed a cream of mushroom soup recipe which is competitive when compared with the SOTA recipes with complex steps by only altering the way of cutting mushroom, published in NeurIPS 2099 (see [~P1])
- Developed a pan for meal cooking which is benefiting the group members' research work


**Reseach Intern**
  : **Paddling University**
  : **Aug 2020 - Present**

- Designed an efficient method for mapo tofu quality estimation via thermometer
- Proposed a fast stir frying algorithm for tofu cooking problems, which specifies the amount of the hot sauce instead of using terms like "as much as you can", published in CVPR 2077 (see [~P2])
- Outperformed SOTA methods while cooking much more efficient in experiments on popular tofu


**Research Assistant**
  : **Huangdu Institute of Technology**
  : **Mar 2020 - Jun 2020**

- Proposed a novel framework consisting of a spoon and a pair of chopsticks for eating mapo toufu
- Designed a tofu filtering strategy inspired by beans grinding method for building a dataset for this new task
- Designed two new evaluation criteria to assess the novelty and diversity of the eating plans
- Outperformed baselines and existed methods substantially in terms of diversity, novelty and coherence


**Reseach Intern**
  : **Paddling University**
  : **Jul 2018 - Aug 2018**

- Designed two sandwiches consisting of breads and meat of two traditional bacon cheese burgers to make use of unused ingredients
- Utilized the structure duality to boost the cooking speed of two dual tasks based on shared ingredients
- Outperformed strong baselines on QWE'15 and ASDF'14 dataset

## Education

**M.S. in Computer Science**
  : **Sep 2021 - Jan 2023**

University of Charles River
  : Boston, MA

**B.Eng. in Software Engineering**
  : **Sep 2016 - Jul 2020**

Huangdu Institute of Technology
  : Shanghai, China

## Skills

**Programming Languages:** <span class="iconify" data-icon="vscode-icons:file-type-python"></span> Python, <span class="iconify" data-icon="vscode-icons:file-type-js-official"></span> JavaScript / <span class="iconify" data-icon="vscode-icons:file-type-typescript-official"></span> TypeScript, <span class="iconify" data-icon="vscode-icons:file-type-html"></span> HTML / <span class="iconify" data-icon="vscode-icons:file-type-css"></span> CSS, <span class="iconify" data-icon="logos:java" data-inline="false"></span> Java

**Tools and Frameworks:** Git, PyTorch, Keras, scikit-learn, Linux, Vue, React, Django, $\\LaTeX$

**Languages:** English (proficient), Indonesia (native)

## Awards and Honors

**Gold**, International Collegiate Catching Fish Contest (ICCFC)
  : 2018

**First Prize**, China National Scholarship for Outstanding Dragons
  : 2017, 2018

## Publications

[~P1]: **Eating is All You Need**

    <u>Haha Ha</u>, San Zhang

    *Conference on Neural Information Processing Systems (NeurIPS), 2099*

[~P2]: **You Only Cook Once: Unified, Real-Time Mapo Tofu Recipe**

    <u>Haha Ha</u>, San Zhang, Si Li, Wu Wang

    *Computer Vision and Pattern Recognition Conference (CVPR), 2077 **(Best Paper Honorable Mention)***

`;

export const PREVIEW_SELECTOR = "#vue-smart-pages-preview";

export const DEFAULT_CSS_CONTENT = `/* Backbone CSS for Resume Template 1 */

/* Basic */

${PREVIEW_SELECTOR} {
  background-color: white;
  color: black;
  text-align: left;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}

${PREVIEW_SELECTOR} p,
${PREVIEW_SELECTOR} li,
${PREVIEW_SELECTOR} dl {
  margin: 0;
}

/* Headings */

${PREVIEW_SELECTOR} h1,
${PREVIEW_SELECTOR} h2,
${PREVIEW_SELECTOR} h3 {
  font-weight: bold;
}

${PREVIEW_SELECTOR} h1 {
  font-size: 2.5em;
  letter-spacing: 0.1em;
  text-align: center;
  margin-bottom: 0.25em;
}

${PREVIEW_SELECTOR} h2,
${PREVIEW_SELECTOR} h3 {
  margin-bottom: 0.25em;
  margin-top: 1.0em;
  font-size: 1.2em;
}

${PREVIEW_SELECTOR} h2 {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: darkgrey;
}

/* Lists */

${PREVIEW_SELECTOR} ul,
${PREVIEW_SELECTOR} ol {
  padding-left: 1.5em;
  margin: 0.2em 0 1.0em 0;
}

${PREVIEW_SELECTOR} ul {
  list-style-type: disc;
}

${PREVIEW_SELECTOR} ol {
  list-style-type: decimal;
}

/* Definition Lists */

${PREVIEW_SELECTOR} dl {
  display: flex;
}

${PREVIEW_SELECTOR} dl dt,
${PREVIEW_SELECTOR} dl dd:not(:last-child) {
  flex: 1;
}

/* Tex */

${PREVIEW_SELECTOR} :not(span.katex-display) > span.katex {
  font-size: 1em !important;
}

/* SVG & Images */

${PREVIEW_SELECTOR} svg.iconify {
  vertical-align: -0.2em;
}

${PREVIEW_SELECTOR} img {
  max-width: 100%;
}

/* Header */

${PREVIEW_SELECTOR} .resume-header {
  text-align: center;
  position: relative;
}

${PREVIEW_SELECTOR} .resume-header h1 {
  text-align: center;
  line-height: 1;
  margin-bottom: 8px;
}

${PREVIEW_SELECTOR} .resume-header-item:not(.no-separator)::after {
  content: " | ";
}

/* Avatar */

${PREVIEW_SELECTOR} .resume-avatar {
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 80px;
  z-index: 10;
}

${PREVIEW_SELECTOR} .resume-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid #ddd;
  display: block;
}

/* Citations */

${PREVIEW_SELECTOR} ul.crossref-list {
  padding-left: 1.2em;
}

${PREVIEW_SELECTOR} li.crossref-item p {
  margin-left: 0.5em;
}

${PREVIEW_SELECTOR} li.crossref-item::marker {
  content: attr(data-caption);
}

${PREVIEW_SELECTOR} sup.crossref-ref {
  font-size: 100%;
  top: 0;
}

/* Dark & print mode */

.dark ${PREVIEW_SELECTOR} {
  background-color: #334155;
  color: #e5e7eb;
}

@media print {
  ${PREVIEW_SELECTOR} {
    background-color: white !important;
    color: black !important;
  }

  .dark ${PREVIEW_SELECTOR} a {
    color: black !important;
  }
}
`;
