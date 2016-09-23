import { Component } from '@angular/core';

import { OpsNavMessagesService } from './opsNavMessages.service';

@Component({
               selector:  'li.message-component',
               providers: [ OpsNavMessagesService ],
               styles:    [ require('./opsNavMessages.scss') ],
               template:  require('./opsNavMessages.html')
           })
export class OpsNavMessages {

    public notifications: Array<Object>;
    public messages: Array<Object>;

    unreadCount: number = 5;

    constructor (private _opsMsgCenterService: OpsNavMessagesService) {
        this.notifications = this._opsMsgCenterService.getNotifications();
        this.messages = this._opsMsgCenterService.getMessages();
    }

    public listMessages (): void {
        this.unreadCount = 0;
    }

}
