import { NgModule }                             from '@angular/core';
import { RouterModule, Routes }                 from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
    { path: 'blog', loadChildren: './blog-module/blog.module#BlogModule' }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutesModule {}
