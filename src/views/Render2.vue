<template>
  <anchored-heading2 :level="2">Hello world!</anchored-heading2>
</template>

<script>
import Vue from 'vue';


// eslint-disable-next-line func-names
const getChildrenTextContent = function (children) {
  return children.map(node => (node.children
    ? getChildrenTextContent(node.children)
    : node.text)).join('');
};

Vue.component('anchored-heading2', {
  render(createElement) {
    // 创建 kebab-case 风格的 ID
    const headingId = getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, '-')
      .replace(/(^-|-$)/g, '');

    return createElement(
      `h${this.level}`,
      [
        createElement('a', {
          attrs: {
            name: headingId,
            href: `#${headingId}`,
          },
        }, this.$slots.default),
      ],
    );
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
});

export default {
  name: 'r2',

};
</script>
<style scoped>
</style>
