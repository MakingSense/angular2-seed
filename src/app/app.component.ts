import { Component } from '@angular/core';
import { UsersComponent } from './+users';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { AboutComponent } from './+about';

@Component({
  moduleId: module.id,
  selector: 'angular2-seed-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
,
  directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/users', component: UsersComponent},
  {path: '/about', component: AboutComponent}
])
export class AppComponent {
  title = 'angular2-seed works!';
}
