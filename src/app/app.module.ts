import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';
import {MatTableModule} from '@angular/material/table';
import { GameReadComponent } from './components/views/game/game-read/game-read.component';
import { PlatformReadComponent } from './components/views/platform/platform-read/platform-read.component';
import { PlatformCreateComponent } from './components/views/platform/platform-create/platform-create.component';
import { FormsModule } from '@angular/forms';
import { GameCreateComponent } from './components/views/game/game-create/game-create.component';
import { PlatformDeleteComponent } from './components/views/platform/platform-delete/platform-delete.component';
import { GameDeleteComponent } from './components/views/game/game-delete/game-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    GameReadComponent,
    PlatformReadComponent,
    PlatformCreateComponent,
    GameCreateComponent,
    PlatformDeleteComponent,
    GameDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule, 
    MatListModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule, 
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
