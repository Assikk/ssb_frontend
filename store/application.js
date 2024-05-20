export const state = () => ({
  isApplication: false,
  isApplicationCredit: false,
  isApplicationCard: false,
  isApplicationDeposit: false,
  isApplicationVacancy: false,
  activeVacancy: null,
  active: {},
  list: [],
  serviceDetails: {},
})

export const mutations = {
  change_state(state, payload) {
    state[payload.key] = payload.body
  },
  changeApplication(state, payload) {
    state.active = {}
    state.isApplication = payload
  },
  changeApplicationVacancy(state, payload) {
    state.isApplicationVacancy = payload.status
    state.activeVacancy = payload.title
  },
  changeProduct(state, payload) {
    state.active = payload;
  },
  openList(state, payload) {
    state.list = payload
  },
  update_service_details(state, payload){
    state.serviceDetails = payload
  }
}
