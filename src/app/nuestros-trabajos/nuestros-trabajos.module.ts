import { NgModule } from '@angular/core';
import { NuestrosAudiosComponent } from './nuestros-audios/nuestros-audios.component';
import { NuestrosVideosComponent } from './nuestros-videos/nuestros-videos.component';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { MultimediaVideosComponent } from './nuestros-videos/video/video.component';

@NgModule({
    declarations: [
        NuestrosAudiosComponent,
        NuestrosVideosComponent,
        MultimediaVideosComponent
    ],
    imports: [
        MaterialModule,
        CommonModule
    ],
    exports: [
        NuestrosAudiosComponent,
        NuestrosVideosComponent,
        MultimediaVideosComponent
    ]
})
export class NuestrosTrabajosModule {}