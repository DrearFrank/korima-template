import {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {LayoutService} from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) {
    }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']}
                ]            }, {
                label: 'Korima',
                items: [
                    {label: 'Users', icon: 'pi pi-fw pi-users', routerLink: ['/korima/users']},

                ]            },            {
                label: 'Prime Blocks',
                items: [
                    {label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW'},
                    {label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons']},
                ]            },

            {
                label: 'Get Started',
                items: [
                    {
                        label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/documentation']
                    },

                ]
            }
        ];
    }
}
