import {createApp} from 'vue'
import '@/shadcn.css'
import '@/style.scss'
import App from '@/App.vue'
import { createHostPageIntegration } from '@/integrations/hostPage.js'

createApp(App, {
    integration: createHostPageIntegration(),
}).mount('#app')
