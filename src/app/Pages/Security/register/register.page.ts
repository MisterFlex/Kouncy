import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, AfterViewInit {

    @ViewChild('slider') ionSlides: IonSlides;

    constructor() {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
         this.ionSlides.lockSwipeToNext(true);
    }
}
