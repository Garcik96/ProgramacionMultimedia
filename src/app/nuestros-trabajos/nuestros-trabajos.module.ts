import { NgModule } from '@angular/core';
import { AudioComponent } from './audio/audio.component';
import { VideoComponent } from './video/video.component';

@NgModule({
    declarations: [
        AudioComponent,
        VideoComponent
    ],
    exports: [
        AudioComponent,
        VideoComponent
    ]
})
export class NuestrosTrabajosModule {}