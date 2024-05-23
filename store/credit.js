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
    res.data.results.forEach((item) => {
      const infoTagStart = item.description.indexOf('&lt;info&gt')
      let splitContent = []
      if (infoTagStart !== -1) {
        const beforeInfo = item.description.slice(0, infoTagStart).trim();
        const afterInfo = item.description.slice(infoTagStart + '&lt;info&gt'.length).trim();
        const cleanedAfterInfo = afterInfo.startsWith(';') ? afterInfo.slice(1).trim() : afterInfo;
        splitContent = [beforeInfo, cleanedAfterInfo];
        item.description = splitContent[0]
        item.description2 = splitContent[1]
      } else {
        console.error('Тег <info> не найден в содержимом.');
      }
    })
    commit('SET_CREDITS', res.data.results)
  },
  async get_credit({commit}, id) {
    commit('SET_CREDIT', {})
    let res = await this.$axios.get(`Credit/${id}/`)
    const infoTagStart = res.data.description.indexOf('&lt;info&gt')
    let splitContent = []
    if (infoTagStart !== -1) {
      const beforeInfo = res.data.description.slice(0, infoTagStart).trim();
      const afterInfo = res.data.description.slice(infoTagStart + '&lt;info&gt'.length).trim();
      const cleanedAfterInfo = afterInfo.startsWith(';') ? afterInfo.slice(1).trim() : afterInfo;
      splitContent = [beforeInfo, cleanedAfterInfo];
      res.data.description = splitContent[0]
      res.data.description2 = splitContent[1]
    } else {
      console.error('Тег <info> не найден в содержимом.');
    }
    commit('SET_CREDIT', res.data)
  }
}
