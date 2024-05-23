export const state = () => ({
  deposits: [],
  isShowSheduleDeposit: false,
  deposit: {},
  amount: 0,
  period: 0
})
export const mutations = {
  SHOW_SHEDULEDEPOSIT(state, payload) {
    state.isShowSheduleDeposit = payload
  },
  SET_DEPOSITS(state, payload) {
    state.deposits = payload
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
  async get_deposits({commit}, language_id) {
    commit('SET_DEPOSITS', [])
    let res = await this.$axios.get(`Deposit/?language_id=${language_id}`)
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
    commit('SET_DEPOSITS', res.data.results)
  },
  async get_deposit({commit}, id) {
    commit('SET_DEPOSIT', {})
    let res = await this.$axios.get(`Deposit/${id}/`)
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
    commit('SET_DEPOSIT', res.data)
  }
}
