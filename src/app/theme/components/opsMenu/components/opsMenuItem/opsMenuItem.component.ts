import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ops-menu-item',
    encapsulation: ViewEncapsulation.None,
    styles: [ require('./opsMenuItem.scss') ],
    template: require('./opsMenuItem.html'),
    providers: []
})
export class OpsMenuItem {

    @Input() menuItem: any;
    @Input() child: boolean = false;

    @Output() itemHover = new EventEmitter<any>();
    @Output() toggleSubMenu = new EventEmitter<any>();

    public onHoverItem ($event): void {
        this.itemHover.emit($event);
    }

    public onToggleSubMenu ($event, item): boolean {
        $event.item = item;
        this.toggleSubMenu.emit($event);
        return false;
    }
}
