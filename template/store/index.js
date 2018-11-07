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
                let useDirectus = this.state.useDirectus;

                if (!useDirectus) {
                    const data = await this.$axios.get(`data/data.json`);

                    commit('setItems', data.data.{{ directus_table }});
                    commit('setMeta', data.data.meta);
                    commit('setLoaded', true);
                }
                else {
                    console.log('loading live data from Directus');

                    await require(['~/utils/directus'], (directus) => {

                        let client = directus.client;
                        let items = process.env.items;
                        let params = {
                            depth: 10
                        };

                        items.forEach(item => {
                            if (item.id && item.api) {
                                console.log(`getItem /${item.api}/${item.id} as ${item.name}`);

                                client.getItem(item.api, item.id, params)
                                    .then(res => {
                                        commit('setMeta', res.data);
                                    })
                                    .catch(err => console.log(err));
                            }
                            else {
                                console.log(`getItems /${item}`);

                                client.getItems(item, params)
                                    .then(res => {
                                        commit('setItems', res.data);
                                        commit('setLoaded', true);
                                    })
                                    .catch(err => console.log(err));
                            }
                        });
                    });
                }
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