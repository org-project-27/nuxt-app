
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "edb49069-897a-4774-ba5e-995b95ce2d81"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/Users/vugarsafarzada/Desktop/Files/Develop/My Projects/e-commercial-app/nuxt-app/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, inlineConfig)
