import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 's3cfqcyr',
    dataset: 'production',
  },
  deployment: {
    appId: 'khg8ux843fwo8skk78uevcgm',
    autoUpdates: true,
  },
})
