import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

/* Material Modules */
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

/* Custom Modules */
import { AppRoutingModule } from './app-routing.module';

/* Custom Components */
import { AppComponent } from './app.component';
import { DialogOverviewComponent } from './shared/components/dialog-overview/dialog-overview.component';


@NgModule( {
    declarations: [
        AppComponent,
        DialogOverviewComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatToolbarModule,
        AppRoutingModule  // Keep last
    ],
    providers: [],
    bootstrap: [ AppComponent ]
} )
export class AppModule {
}
