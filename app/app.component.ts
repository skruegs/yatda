import { Component } from '@angular/core';

@Component({
    selector: 'yatd-app',
    template: `
    <h1 id="title">{{title}}</h1>
    `
})
export class AppComponent {
    title = 'Yet Another To Do App';
}
