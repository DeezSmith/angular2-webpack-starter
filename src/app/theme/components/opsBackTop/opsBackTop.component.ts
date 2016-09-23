import { Component, ViewChild, HostListener, Input, ElementRef } from '@angular/core';

@Component({
               selector: 'ops-back-top',
               styles:   [ require('./opsBackTop.scss') ],
               template: `
    <i #baBackTop class="fa fa-angle-up back-top ba-back-top" title="Back to Top"></i>
  `
           })
export class OpsBackTop {

    @Input() position: number = 400;
    @Input() showSpeed: number = 500;
    @Input() moveSpeed: number = 1000;

    @ViewChild('opsBackTop') private _selector: ElementRef;

    ngAfterViewInit () {
        this._onWindowScroll();
    }

    @HostListener('click')
    _onClick (): boolean {
        window[ 'jQuery' ]('html, body').animate({scrollTop: 0}, {duration: this.moveSpeed});
        return false;
    }

    @HostListener('window:scroll')
    _onWindowScroll (): void {
        let el = this._selector.nativeElement;
        window.scrollY > this.position ? window[ 'jQuery' ](el).fadeIn(this.showSpeed) : window[ 'jQuery' ](el).fadeOut(this.showSpeed);
    }
}