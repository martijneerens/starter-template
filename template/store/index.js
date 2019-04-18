export const strict = false;

let setLoadingTimout = null;
let useDirectus = false;

if (typeof window === 'undefined') {
    //not in browser, don't check for query params
} else {
    useDirectus = (window.location.href.indexOf('live') > -1);
}

export const state = () => ({
    isLoading: false,
    items: [],
    meta: {},
    dataLoaded: false,
    useDirectus: useDirectus
});

export const mutations = {
    setLoading(state, isLoading) {
        clearTimeout(setLoadingTimout);
        setLoadingTimout = setTimeout(() => {
            state.isLoading = isLoading;
        }, 100)
    },

    setLoaded(state, loaded) {
        state.dataLoaded = loaded;
    },

    setItems(state, items) {
        state.items = items;
    },

    setMeta(state, meta) {
        state.meta = meta;
    }
};

export const actions = {
    setItems(vuexContext, items) {
        vuexContext.commit('setItems', items);
    },

    setMeta(vuexContext, meta) {
        vuexContext.commit('setMeta', meta);
    },

    setLoaded(vueContext, loaded) {
        vuexContext.commit('setLoaded', loaded);
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
};