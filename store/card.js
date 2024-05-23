export const state = () => ({
  cards: [],
  card: {},
})
export const mutations = {
  SET_CARDS(state, payload) {
    state.cards = payload
  },
  SET_CARD(state, payload) {
    state.card = payload
  },
}
export const actions = {
  async get_cards({commit}, search) {
    commit('SET_CARDS', [])
    let res = await this.$axios.get(`Card/?${this.$convertedSearch(search)}`)
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
    commit('SET_CARDS', res.data.results)
  },
  async get_card({commit}, id) {
    commit('SET_CARD', {})
    let res = await this.$axios.get(`Card/${id}/`)
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
    commit('SET_CARD', res.data)
  }
}
