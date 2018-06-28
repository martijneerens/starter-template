import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            items: [],
            meta: {}
        },

        mutations: {
            setItems(state, items) {
                state.items = items;
            },

            setMeta(state, meta) {
                state.meta = meta;
            }
        },

        actions: {
            setItems(vuexContext, items) {
                vuexContext.commit('setItems', items);
            },

            setMeta(vuexContext, meta) {
                vuexContext.commit('setMeta', meta);
            },

            async setData({commit}) {
                const data = await this.$axios.get(`data/data.json`);
                commit('setItems', data.data.{{ directus_table }});
                commit('setMeta', data.data.meta);
            }
        },

        getters: {
            loadedItems(state) {
                return state.items;
            },

            loadedMeta(state) {
                return state.meta;
            }
        }
    })
}

export default createStore;