import { Component } from '@angular/core';

import { OpsNavUserProfileService } from './opsNavUserProfile.service';

@Component({
               selector:  'li.user-profile-component',
               providers: [ OpsNavUserProfileService ],
               styles:    [ require('./opsNavUserProfile.scss') ],
               template:  require('./opsNavUserProfile.html')
           })
export class OpsNavUserProfile {

    public notifications: Array<Object>;
    public messages: Array<Object>;

    unreadCount: number = 5;

    profile = {
        name: 'Derek Smith',
        agentNo: '123408',
        icon: 'Batman'
    };


    constructor (private _opsMsgCenterService: OpsNavUserProfileService) {
        this.notifications = this._opsMsgCenterService.getNotifications();
        this.messages = this._opsMsgCenterService.getMessages();
    }

    public open(): void {
        this.unreadCount = 0;
    }

}
