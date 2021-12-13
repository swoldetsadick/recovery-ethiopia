import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

/* Custom Model */
import {
    ApplicationInformation,
    ApplicationInformationService
} from 'src/app/shared/services/application-information.service';


/**
 *
 */
@Component( {
    selector: 'app-dialog-overview',
    templateUrl: './dialog-overview.component.html',
    styleUrls: [ './dialog-overview.component.css' ]
} )
export class DialogOverviewComponent {

    /**
     *
     */
    public applicationInformation: ApplicationInformation | undefined;
    /**
     *
     */
    public content: string;
    /**
     *
     */
    public title: string;
    /**
     *
     */
    public type: string;

    /**
     *
     * @param applicationInformationService
     * @param dialogRef
     * @param data
     */
    constructor(
        private applicationInformationService: ApplicationInformationService,
        public dialogRef: MatDialogRef<DialogOverviewComponent>,
        @Inject( MAT_DIALOG_DATA ) private data: { type: string }
    ) {
        this.applicationInformationService.currentApplicationInformation.subscribe( ( data ) => {
            this.applicationInformation = data;
        } );
        this.type = this.data[ `type` ];
        if ( this.type === 'language' ) {
            this.title = $localize`:@@000002:Please choose your language`;
            this.content = '';
        } else if ( this.type === 'terms' ) {
            this.title = $localize`:@@000003:Terms & Conditions`;
            this.content = $localize`:@@000005:`;
        } else if ( this.type === 'copyright' ) {
            this.title = $localize`:@@000004:Copyright`;
            this.content = $localize`:@@000006:© Copyright Recovery Ethiopia, Munich, Germany. All rights reserved. The
            text, images, graphics, sound files, animation files, video files, and their arrangement on this website are
            all subject to copyright and other intellectual property protection. These objects may not be copied for
            commercial use or distribution, nor may these objects be modified or reposted to other sites. This website
            may contain images whose copyrights are attributable to third parties.`;
        } else {
            this.title = '';
            this.content = '';
        }
    }

    /**
     *
     */
    public changeLanguage( lang: 'ar' | 'de' | 'en' | 'fr' | 'it' ) {
        let location = window.location.href;
        if ( location.includes( `/${ this.applicationInformation?.lang }/` ) ) {
            window.location.href = location.replace( `/${ this.applicationInformation?.lang }/`, `/${ lang }/` );
        }
        this.applicationInformationService.changeApplicationInformation( { lang } );
        this.dialogRef.close();
    }

    /**
     *
     */
    onClose(): void {
        this.dialogRef.close();
    }

}
