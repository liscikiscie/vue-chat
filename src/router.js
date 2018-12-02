import Vue from 'vue'
import Router from 'vue-router'
import WelcomeForm from '@/components/WelcomeForm.vue'
import Chat from '@/components/Chat.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'WelcomeForm',
            component: WelcomeForm
        },
        {
            path: '/chat',
            name: 'Chat',
            component: Chat,
            props: true,
            beforeEnter: ( to, from, next ) => {
                if ( to.params.name ) {
                    next();
                } else {
                    next({name: 'WelcomeForm'})
                }
            }
        }
    ]
})
