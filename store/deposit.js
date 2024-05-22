export const state = () => ({
  isShowSheduleDeposit: false,
  deposit: {},
  amount: 0,
  period: 0
})
export const mutations = {
  SHOW_SHEDULEDEPOSIT(state, payload) {
    state.isShowSheduleDeposit = payload
  },
  SET_DEPOSIT(state, payload) {
    state.deposit = payload
  },
  SET_AMOUNT(state, payload) {
    state.amount = payload
  },
  SET_PERIOD(state, payload) {
    state.period = payload
  }
}
export const actions = {
}
