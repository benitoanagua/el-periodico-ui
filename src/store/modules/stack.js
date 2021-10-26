import { STACK } from "../mutation-types";
const state = {
  items: [],
};

const getters = {
  getStackLenght: (state) => state.items.length,
  getStackItem: (state) => (id) =>
    state.items.find((item) => item.zIndex === id),
};

const actions = {
  cleanItems({ commit }) {
    commit(STACK.CLEAN_STACK);
  },
  addItem({ commit }, item) {
    commit(STACK.ADD_STACK_ITEM, item);
  },
  sendFront({ commit }, updatedItem) {
    const currentFront = state.items.find((item) => item.zIndex === 1);

    commit(STACK.UPDATE_STACK_ITEM, {
      id: updatedItem.id,
      zIndex: 1,
      title: updatedItem.title,
    });
    commit(STACK.UPDATE_STACK_ITEM, {
      id: currentFront.id,
      zIndex: updatedItem.zIndex,
      title: currentFront.title,
    });
    // console.log("currentFront " + currentFront);
    // console.log("newZIndex " + newZIndex);

    // console.log(state.items);
  },
};

const mutations = {
  [STACK.CLEAN_STACK](state) {
    state.items = [];
  },
  [STACK.ADD_STACK_ITEM](state, item) {
    state.items.push(item);
  },
  [STACK.UPDATE_STACK_ITEM](state, updatedItem) {
    const index = state.items.findIndex((item) => item.id === updatedItem.id);
    if (index !== -1) {
      state.items.splice(index, 1, updatedItem);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
