import { NgModule } from "@angular/core";
import { PostCardComponent } from '../components/post-card/post-card.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
    declarations: [
        PostCardComponent
    ],
    imports: [
        MatSlideToggleModule
    ],
    exports: [
        PostCardComponent,
        MatSlideToggleModule
    ]
})

export class SharedModule { }
