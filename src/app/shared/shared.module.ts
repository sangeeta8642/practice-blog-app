import { NgModule } from "@angular/core";
import { PostCardComponent } from '../components/post-card/post-card.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTabsModule } from '@angular/material/tabs'
import { MatCardModule } from '@angular/material/card'
import { MatBadgeModule } from '@angular/material/badge'
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ViewPostComponent } from "../pages/view-post/view-post.component";

@NgModule({
    declarations: [
        PostCardComponent,
        // ViewPostComponent
    ],
    imports: [
        MatSlideToggleModule,
        MatInputModule,
        CommonModule,
        // PostCardComponent,
        MatButtonModule,
        ReactiveFormsModule,
        MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatTabsModule,
        MatBadgeModule,
        FormsModule
    ],
    exports: [
        PostCardComponent,
        CommonModule,
        ReactiveFormsModule,
        // PostCardComponent,
        MatSlideToggleModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatBadgeModule,
        // ViewPostComponent,
        MatTabsModule,
        FormsModule
    ]
})

export class SharedModule { }
