import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import * as $ from 'jquery'; window["$"] = $; window["jQuery"] = $;

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
