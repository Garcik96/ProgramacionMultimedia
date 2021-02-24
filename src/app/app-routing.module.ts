import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AudioComponent } from './nuestros-trabajos/audio/audio.component';
import { VideoComponent } from './nuestros-trabajos/video/video.component';
import { ContactoComponent } from './contacta-con-nosotros/contacta-con-nosotros.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nuestros-trabajos/audio', component: AudioComponent },
  { path: 'nuestros-trabajos/video', component: VideoComponent },
  { path: 'contacta-con-nosotros', component: ContactoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const AppRoutingModule = RouterModule.forRoot(ROUTES, {useHash:true});