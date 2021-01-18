import { createApp } from 'vue'
import App from '@/App.vue'
import { setupAuth } from '@/auth'
import router from '@/router'
import authConfig from '../auth_config.json'

const app = createApp(App).use(router)

function callbackRedirect (appState: any) {
  router.push(
    appState && appState.targetUrl ? appState.targetUrl : '/'
  )
}

setupAuth(authConfig, callbackRedirect).then((auth) => {
  app.use(auth)
})

app.mount('#app')
