import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatChipsModule } from "@angular/material/chips";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { HomeComponent } from "./components/views/home/home.component";
import { MatTableModule } from "@angular/material/table";

import { DragDropModule } from "@angular/cdk/drag-drop";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CdkTableModule } from "@angular/cdk/table";
import { CdkTreeModule } from "@angular/cdk/tree";

import { PlatformReadComponent } from "./components/views/platform/platform-read/platform-read.component";
import { PlatformCreateComponent } from "./components/views/platform/platform-create/platform-create.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GameCreateComponent } from "./components/views/game/game-create/game-create.component";
import { PlatformDeleteComponent } from "./components/views/platform/platform-delete/platform-delete.component";
import { GameDeleteComponent } from "./components/views/game/game-delete/game-delete.component";
import { PlatformUpdateComponent } from "./components/views/platform/platform-update/platform-update.component";
import { GameReadAllComponent } from "./components/views/game/game-read-all/game-read-all.component";
import { GameUpdateComponent } from "./components/views/game/game-update/game-update.component";
import { GameAddComponent } from "./components/views/game/game-add/game-add.component";
import { MatSelectModule } from "@angular/material/select";
import { GameAllComponent } from "./components/views/game/game-all/game-all.component";
import { GameReadComponent } from "./components/views/game/game-read/game-read.component";
import { GameRemoveComponent } from "./components/views/game/game-remove/game-remove.component";
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PlatformReadComponent,
    PlatformCreateComponent,
    GameCreateComponent,
    PlatformDeleteComponent,
    GameDeleteComponent,
    PlatformUpdateComponent,
    GameReadAllComponent,

    GameUpdateComponent,

    GameAddComponent,
    GameAllComponent,
    GameReadComponent,
    GameRemoveComponent,

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
    MatSnackBarModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    DragDropModule,
    ScrollingModule,
    CdkTableModule,
    CdkTreeModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
