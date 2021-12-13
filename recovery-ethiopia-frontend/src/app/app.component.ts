import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


/* Custom components */
import { DialogOverviewComponent } from './shared/components/dialog-overview/dialog-overview.component';

/* Custom Model */
import {
    ApplicationInformation,
    ApplicationInformationService
} from './shared/services/application-information.service';


/**
 *
 */
@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
} )
export class AppComponent implements OnInit {

    /**
     *
     */
    public applicationInformation: ApplicationInformation;
    /**
     *
     */
    public termsConditionsLink: string;
    /**
     *
     */
    public title: string;
    /**
     *
     */
    public year: number;

    /**
     *
     * @param applicationInformationService
     * @param dialog
     * @param router
     * @param titleService
     */
    constructor(
        private applicationInformationService: ApplicationInformationService,
        private dialog: MatDialog,
        private router: Router,
        private titleService: Title
    ) {
        this.applicationInformation = { lang: 'en' };
        this.applicationInformationService.currentApplicationInformation.subscribe( ( data ) => {
            this.applicationInformation = data;
        } );
        this.termsConditionsLink = $localize`:@@000001:Terms & Conditions`;
        this.title = $localize`:@@000000:Recovery Ethiopia`;
        this.titleService.setTitle( this.title );
        this.year = new Date().getFullYear();
    }

    /**
     *
     */
    ngOnInit(): void {
        this.setApplicationInformation();
    }

    /**
     *
     */
    public changeLanguage() {
        this.openDialog( 'language' );
    }

    /**
     *
     * @param type
     */
    public openDialog( type: string ): void {
        let dialogRef = this.dialog.open( DialogOverviewComponent, {
            width: '50%',
            data: { type }
        } );
        /*dialogRef.afterClosed().subscribe( ( result ) => {
            console.log( result );
        } );*/
    }

    /**
     *
     * @private
     */
    private setApplicationInformation(): void {
        const languages = [ 'ar', 'de', 'en', 'fr', 'it' ];
        languages.map( ( lang ) => {
            if ( window.location.href.includes( lang ) ) {
                this.applicationInformation.lang = lang;
            }
        } );
        if ( !this.applicationInformation.lang ) {
            this.applicationInformation.lang = 'en';
        }
        this.applicationInformationService.changeApplicationInformation( this.applicationInformation );
    }
}
