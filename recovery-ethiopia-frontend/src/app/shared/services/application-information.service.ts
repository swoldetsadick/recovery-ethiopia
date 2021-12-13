import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


/**
 *
 */
@Injectable( {
    providedIn: 'root'
} )
export class ApplicationInformationService {

    /**
     * Observable used by components that subscribe to this service to get the upto date application state information.
     */
    public currentApplicationInformation: Observable<ApplicationInformation>;
    /**
     * BehaviorSubject holding the current value of application state information.
     */
    private applicationInformationSource: BehaviorSubject<ApplicationInformation>;


    /**
     * This class constructor defines the task executed when this component is called. The constructor initializes the
     * applicationStateSource property with a BehaviorSubject with default new ApplicationInformation value injected to it and
     * currentApplicationInformation is initialized to the BehaviorSubject as observable so users can subscribe to the latest
     * application state information.
     */
    constructor() {
        this.applicationInformationSource = new BehaviorSubject<ApplicationInformation>( { lang: 'en' } );
        this.currentApplicationInformation = this.applicationInformationSource.asObservable();
    }

    /**
     * This method calls next to the behavior subject to change its current value.
     * @param newStatus New state of the application.
     */
    public changeApplicationInformation( newStatus: ApplicationInformation ): void {
        this.applicationInformationSource.next( newStatus );
    }
}


/**
 *
 */
export interface ApplicationInformation {
    lang: string;
}
