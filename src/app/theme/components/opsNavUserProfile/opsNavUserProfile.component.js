"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var baMsgCenter_service_1 = require('./opsNavUserProfile.service.ts');
var pipes_1 = require('../../pipes');
var BaMsgCenter = (function () {
    function BaMsgCenter(_baMsgCenterService) {
        this._baMsgCenterService = _baMsgCenterService;
        this.notifications = this._baMsgCenterService.getNotifications();
        this.messages = this._baMsgCenterService.getMessages();
    }
    BaMsgCenter = __decorate([
        core_1.Component({
            selector: 'ba-msg-center',
            providers: [baMsgCenter_service_1.BaMsgCenterService],
            styles: [require('./opsNavUserProfile.scss')],
            template: require('./opsNavUserProfile.html'),
            pipes: [pipes_1.BaProfilePicturePipe]
        })
    ], BaMsgCenter);
    return BaMsgCenter;
}());
exports.BaMsgCenter = BaMsgCenter;
//# sourceMappingURL=baMsgCenter.component.js.map