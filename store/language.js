export const state = () => ({
  language_id: 1,
})

export const mutations = {
  CHANGE_LANGUAGE(state, payload) {
    if (payload) {
      state.language_id = payload;
    } else {
      if (localStorage.getItem("lang")) {
        switch (localStorage.getItem("lang")) {
          case "tj":
            state.language_id = 1;
            break;
          case "ru":
            state.language_id = 2;
            break;
          case "en":
            state.language_id = 3;
            break;
          default:
            state.language_id = 1;
            break;
        }
      }
    }
  },
}
