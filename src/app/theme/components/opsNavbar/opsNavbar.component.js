"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var pipes_1 = require('../../pipes');
var baMsgCenter_1 = require('../../components/baMsgCenter');
var directives_1 = require('../../directives');
var BaPageTop = (function () {
    function BaPageTop(_state) {
        var _this = this;
        this._state = _state;
        this.isScrolled = false;
        this.isMenuCollapsed = false;
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
    }
    BaPageTop.prototype.toggleMenu = function () {
        this.isMenuCollapsed = !this.isMenuCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    };
    BaPageTop.prototype.scrolledChanged = function (isScrolled) {
        this.isScrolled = isScrolled;
    };
    BaPageTop = __decorate([
        core_1.Component({
            selector: 'ba-page-top',
            styles: [require('./opsNavbar.scss')],
            template: require('./opsNavbar.html'),
            directives: [baMsgCenter_1.BaMsgCenter, directives_1.BaScrollPosition],
            pipes: [pipes_1.BaProfilePicturePipe],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], BaPageTop);
    return BaPageTop;
}());
exports.BaPageTop = BaPageTop;
//# sourceMappingURL=baPageTop.component.js.map