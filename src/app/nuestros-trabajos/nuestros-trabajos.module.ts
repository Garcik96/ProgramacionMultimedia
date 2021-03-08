import { NgModule } from '@angular/core';
import { NuestrosAudiosComponent } from './nuestros-audios/nuestros-audios.component';
import { NuestrosVideosComponent } from './nuestros-videos/nuestros-videos.component';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { MultimediaVideosComponent } from './nuestros-videos/video/video.component';
import { MultimediaAudiosComponent } from './nuestros-audios/audio/audio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        NuestrosAudiosComponent,
        NuestrosVideosComponent,
        MultimediaVideosComponent,
        MultimediaAudiosComponent
    ],
    imports: [
        MaterialModule,
        CommonModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        NuestrosAudiosComponent,
        NuestrosVideosComponent,
        MultimediaVideosComponent
    ]
})
export class NuestrosTrabajosModule {}