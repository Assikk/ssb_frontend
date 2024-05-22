export const state = () => ({
  gold: []
})
export const mutations = {
  SET_GOLD(state, payload) {
    for(let key in payload) {
      state.gold.push({
        id: key,
        buy: payload[key].buy,
        sell: payload[key].sell
      })
    }
  }
}
export const actions = {
  async get_gold({commit}) {
    commit('SET_GOLD', [])
    let res = await this.$axios.get('https://webapi.ssb.tj/currency-gold')
    commit('SET_GOLD', res.data)
  }
}
