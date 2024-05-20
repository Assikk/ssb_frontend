export const state = () => ({
  credits: [],
  isShowSheduleCredit: false,
  credit: {},
  shedule_duration: 0,
  shedule_amount: 0
})
export const mutations = {
  SET_CREDITS(state, payload) {
    state.credits = payload
  },
  SET_CREDIT(state, payload) {
    state.credit = payload
  },
  SHOW_SHEDULECREDIT(state, payload) {
    state.isShowSheduleCredit = payload
  },
  SET_DURATION(state, payload) {
    state.shedule_duration = payload
  },
  SET_AMOUNT(state, payload) {
    state.shedule_amount = payload
  }
}
export const actions = {
  async get_credits({commit}, search) {
    commit('SET_CREDITS', [])
    let res = await this.$axios.get(`Credit/?${this.$convertedSearch(search)}`)
    commit('SET_CREDITS', res.data.results)
  }
}
