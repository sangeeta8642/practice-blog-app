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
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table'
import { MatBadgeModule } from '@angular/material/badge'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatMenuModule } from '@angular/material/menu'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from "@angular/common/http";
import { TextFieldModule } from '@angular/cdk/text-field';
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
        TextFieldModule,
        ReactiveFormsModule,
        MatTooltipModule,
        MatCardModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatIconModule,
        MatTabsModule,
        MatMenuModule,
        MatTableModule,
        MatBadgeModule,
        FormsModule
    ],
    exports: [
        PostCardComponent,
        CommonModule,
        ReactiveFormsModule,
        // PostCardComponent,
        MatSlideToggleModule,
        MatTooltipModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        MatCardModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatMenuModule,
        MatIconModule,
        MatTableModule,
        MatBadgeModule,
        // ViewPostComponent,
        MatTabsModule,
        FormsModule
    ]
})

export class SharedModule { }
