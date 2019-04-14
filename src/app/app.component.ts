import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animation';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'picross';
  private animName = 'animation';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
  }

  prepareRouter(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData[this.animName];
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
