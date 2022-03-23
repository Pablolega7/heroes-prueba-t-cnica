//ANGUKAR//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
//ANGULAR MATERIAL//
import { MatSliderModule } from '@angular/material/slider';
// import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
// import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
// import { MatMenuModule } from '@angular/material/menu';
// import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [],
  exports:[
    // HttpClientModule,
    MatSliderModule,
    // MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    // MatSnackBarModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    // MatTooltipModule,
    MatPaginatorModule,
    // MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    // MatMenuModule,
    // LayoutModule,
    MatSidenavModule,
    MatListModule
  ],
  imports: [
    CommonModule,
    // CommonModule,
    // HttpClientModule,
    ReactiveFormsModule,
    MatSliderModule,
    // MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    // MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    // MatTooltipModule,
    MatPaginatorModule,
    // MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    // MatMenuModule,
    // LayoutModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class MaterialModule { }