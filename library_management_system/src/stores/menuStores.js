// import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
export const useMenusStore = defineStore('menuStores', {
  // const isCollapse = ref(false);
  state: () => ({
    isCollapse: false,
  }),
  actions: {
    handleChangeFold() {
      this.isCollapse = !this.isCollapse;
    },
  },
});
