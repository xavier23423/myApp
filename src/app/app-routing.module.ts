import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent
  },

  {
    path : 'about',
    component : AboutComponent
  },

  {
    path : 'contact',
    component : ContactComponent

  },


{
  path: 'post',
  loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule)
}
    


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
