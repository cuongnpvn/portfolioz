<template>
  <router-view :key="$route.fullPath" />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  --neutral-color-9: #1a1a1a;
  --neutral-color-8: #303030;
  --neutral-color-7: #555454;
  --neutral-color-6: #848484;
  --neutral-color-5: #bababa;
  --neutral-color-4: #ececec;
  --neutral-color-3: #f9f9f9;
  --neutral-color-2: #fefefe;
  --neutral-color-1: #ffffff;
  --fontsize-heading1: 42px;
  --fontsize-heading2: 32px;
  --fontsize-heading3: 22px;
  --fontsize-heading4: 20px;
  --fontsize-heading5: 18px;
}

.contact {
  width: fit-content;
  text-align: right;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  text-decoration: none;
}

.contact span {
  font-size: var(--fontsize-heading5);
  font-weight: 500;
  color: var(--neutral-color-9);
}

.contact .contact-icon {
  width: 12px;
  height: 12px;
  transition: 300ms ease all;
}

.contact:hover span {
  color: var(--neutral-color-6);
}

.contact:hover .contact-icon {
  transform: translate(3px, -3px);
  filter: invert(61%) sepia(6%) saturate(0%) hue-rotate(357deg) brightness(84%)
    contrast(82%);
}

.border-gray {
  border: 1px solid var(--neutral-color-4);
  border-width: 0 0 1px 0;
}

section {
  width: 60%;
  margin: 0 auto;
  padding: 15vh 0;
}

.paragraph {
  line-height: 30px;
  color: var(--neutral-color-6);
}
</style>
