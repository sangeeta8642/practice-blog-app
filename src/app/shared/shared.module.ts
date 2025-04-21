import { NgModule } from "@angular/core";
import { PostCardComponent } from '../components/post-card/post-card.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTabsModule } from '@angular/material/tabs'

@NgModule({
    declarations: [
        PostCardComponent
    ],
    imports: [
        MatSlideToggleModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatTabsModule,
        FormsModule
    ],
    exports: [
        PostCardComponent,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatTabsModule,
        FormsModule
    ]
})

export class SharedModule { }
