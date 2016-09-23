import { Component } from '@angular/core';

import { OpsNavNotificationsService } from './opsNavNotifications.service';

@Component({
               selector:  'li.notification-component',
               providers: [ OpsNavNotificationsService ],
               styles:    [ require('./opsNavNotifications.scss') ],
               template:  require('./opsNavNotifications.html')
           })
export class OpsNavNotifications {

    public notifications: Array<Object>;
    public messages: Array<Object>;

    unreadCount: number = 5;

    constructor (private _opsMsgCenterService: OpsNavNotificationsService) {
        this.notifications = this._opsMsgCenterService.getNotifications();
        this.messages = this._opsMsgCenterService.getMessages();
    }

    public open(): void {
        this.unreadCount = 0;
    }

}
