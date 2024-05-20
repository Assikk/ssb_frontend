export const state = () => ({
  isSuccess: false,
})

export const mutations = {
  changeSuccess(state, payload) {
    state.isSuccess = payload
  },
}
