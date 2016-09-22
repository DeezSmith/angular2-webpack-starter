import { Component } from '@angular/core';

@Component({
               selector: 'no-content',
               template: `
    <div>
      <h1>{{title}}</h1>
    </div>
  `
           })
export class NoContent {
    title = '404: page missing';
}
