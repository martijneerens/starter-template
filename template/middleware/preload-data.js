//fetch data from cms on load

export default function ({ store }) {
    if (store.state.items.length === 0) {
        return store.dispatch('setData');
    }
    return true;
}