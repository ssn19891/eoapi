import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import microApp from '@micro-zoe/micro-app';

import { AppModule } from './app/app.module';
import { APP_CONFIG } from './environments/environment';

if (APP_CONFIG.production) {
  enableProdMode();
}

microApp.start({
  fetch(url, options, appName) {
    if (url.startsWith('https://unpkg.com/') && !url.startsWith(`https://unpkg.com/${appName}`)) {
      // 删除 http://localhost:3001/error.js 的内容
      return window
        .fetch(new URL(url.replace('https://unpkg.com/', ''), `https://unpkg.com/${appName}/page/`).href, options)
        .then((res) => res.text());
    }

    return window.fetch(url, options).then((res) => res.text());
  },
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
