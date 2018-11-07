//fetch data from cms on load

let checkInterval;

export default function ({ store }) {

    if (store.state.items.length === 0) {
        if(store.state.useDirectus) {
            return new Promise(function(resolve) {
                store.dispatch('setData');
                checkInterval = setInterval(()=>{
                    if(store.state.dataLoaded){
                        clearInterval(checkInterval);
                        resolve();
                    }
                }, 100)
            });
        }
        else{
            return store.dispatch('setData');
        }
    }
    else{
        return true;
    }
}