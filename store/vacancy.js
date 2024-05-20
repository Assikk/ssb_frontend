export const state = () => ({
  vacancies: []
})
export const mutations = {
  SET_VACANCIES(state, payload) {
    state.vacancies = payload
  }
}
export const actions = {
  async get_vacancies({commit}) {
    commit('SET_VACANCIES', [])
    let res = await this.$axios.get('Vacancy/')
    commit('SET_VACANCIES', res.data.results)
  }
}
