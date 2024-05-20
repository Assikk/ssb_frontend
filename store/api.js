export const state = () => ({
  sliders: [],
  photos: [],
  videos: [],
  answers: [],
  cards:[],
  page: null,
  singlePage: null,
  news: [],
  recommandeds: [],
  talks: [],
  applications: [],
  newsImages: [],
  new: {},
  //Calculator
  credits: [],

  //Address
  offices: [],
  atms: [],
  posterminals: [],
  popularProducts:[]


})
export const mutations = {
  changeProducts(state, payload){
    state.popularProducts = payload;
  },
  CLEARSTATE(state, payload) {
    state[payload.key] = []
  },
  CHANGESTATE(state, payload) {
    // For filter sliders based on status == 1
    switch (payload.key) {
      case 'sliders':
        state[payload.key] = payload.body.filter(item => item.status === 1)
        break;
    case 'cards':
      state[payload.key] = payload.body.map(item => ({...item,type:'cards'}))
      break;
      case 'news':
      state[payload.key] = payload.body.map(item => ({...item,type:'news'}))
      break;
      default:
        state[payload.key] = payload.body;
        break;
    }
  }
}
export const actions = {
  async get_page({commit}, payload) {
    try {
      commit('CLEARSTATE', payload)
      let res = await this.$axios.get(payload.request);
      if(res.data.results) {
      payload.body = res.data.results
      } else {
        payload.body =  res.data
      }
      commit('CHANGESTATE', payload)
    } catch(err) {
    }
  }
}
