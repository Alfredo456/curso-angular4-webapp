import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: '../views/home.html'
})

export class HomeComponent {
    public titulo: string;

    constructor() {
        this.titulo = 'Webapp de productos Angular 4';
    }
}
