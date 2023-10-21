import { defineStore } from "pinia";

export const useEnrollmentStore = defineStore({
  id: "cart",
  state: () => ({
    rawItems: []
  }),
  //getters are like computed values in components
  getters: {
    items: (state) =>
      //use Array.reduce to get structure for items in shopping cart (name and amount)
      state.rawItems.reduce((items, item) => {
        //first check whether item with name already exists
        const existingItem = items.find((it) => it.name === item);

        if (!existingItem) {
          items.push({ name: item, amount: 1 });
        } else {
          existingItem.amount++;
        }

        return items;
      }, [])
  },
  actions: {
    addItem(name) {
      this.rawItems.push(name);
    },

    removeItem(name) {
      const i = this.rawItems.lastIndexOf(name);
      if (i > -1) this.rawItems.splice(i, 1);
    },

    async purchaseItems() {
      console.log("Purchasing", this.items);
      const n = this.items.length;
      this.rawItems = [];
      return n;
    }
  }
});
