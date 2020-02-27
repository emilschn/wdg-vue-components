import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/intro',
            component: require('./components/TheScreenIntro.vue').default, // https://github.com/vuejs/vue-loader/releases/tag/v13.0.0
            name: 'intro'
        },
        {
            path: '/project-infos',
            component: require('./components/TheScreenProjectInfos.vue').default, // https://stackoverflow.com/questions/45964665/vuejs-failed-to-mount-component
            name: 'project-infos'
        },
        {
            path: '*',
            redirect: '/intro'
        }
    ]
})

export default router
