import Vue from 'vue';

//plugin that adds analytics mixin to all Vue instances
let LogEventPlugin = {};


LogEventPlugin.install = function (Vue, options) {

    Vue.prototype.$logEvent = function (event, label) {
        // console.log('$logEvent', event);

        this.$ga.event({
            eventCategory: `vk-kv`,
            eventAction: event,
            eventLabel: label
        })
    };

    Vue.prototype.$logEventOnce = function (event, label) {
        // console.log('$logEventOnce', event, longreadId);

        if (this.$store.state.analytics && !this.$store.state.analytics.find(e => e === event)) {
            this.$ga.event({
                eventCategory: `vk-kv`,
                eventAction: event,
                eventLabel: label
            });
            this.$store.state.analytics.push(event)
        }
    }

}

Vue.use(LogEventPlugin);
