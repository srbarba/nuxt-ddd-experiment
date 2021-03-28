export const state = () => ({
  loading: false,
  veryImportantValue: undefined,
})

export const mutations = {
  SET_LOADING_STATE(state, { isLoading }) {
    state.loading = isLoading
  },
  SET_VALUE(state, { veryImportantValue }) {
    state.veryImportantValue = veryImportantValue
  },
}

export const actions = {
  startLoading({ commit }) {
    commit({ type: 'SET_LOADING_STATE', isLoading: true })
  },
  stopLoading({ commit }) {
    commit({ type: 'SET_LOADING_STATE', isLoading: false })
  },
  async setVeryImportantValue({ commit }, { veryImportantValue }) {
    commit({ type: 'SET_LOADING_STATE', isLoading: true })

    await new Promise((resolve) => setTimeout(resolve, 4000))

    commit({ type: 'SET_VALUE', veryImportantValue })

    commit({ type: 'SET_LOADING_STATE', isLoading: false })

    return { gatete: 'meaow' }
  },
}

export const plugins = [
  function (context, b) {
    console.log('vuex plugin')
    console.log(this, context, b)
  },
]
