import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NuestrosAudiosComponent } from './nuestros-trabajos/nuestros-audios/nuestros-audios.component';
import { NuestrosVideosComponent } from './nuestros-trabajos/nuestros-videos/nuestros-videos.component';
import { ContactoComponent } from './contacta-con-nosotros/contacta-con-nosotros.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nuestros-trabajos/audio', component: NuestrosAudiosComponent },
  { path: 'nuestros-trabajos/video', component: NuestrosVideosComponent },
  { path: 'contacta-con-nosotros', component: ContactoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const AppRoutingModule = RouterModule.forRoot(ROUTES, {useHash:true});