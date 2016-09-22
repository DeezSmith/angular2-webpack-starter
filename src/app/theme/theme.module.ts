import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
    SvgPicturePipe
} from './pipes';

import {
    OpsControlSidebar,
    OpsNavbar,
    OpsMenu,
    OpsContentTop,
    OpsMenuService,
    OpsMenuItem,
    OpsSidebar
} from './components';

import {
    BaScrollPosition,
    BaSlimScroll
} from './directives';

import { GlobalState } from '../infastructure/global-state-service/global.state';
import { BaThemePreloader, BaThemeSpinner } from './services/';


const NGA_COMPONENTS = [
    OpsNavbar,
    OpsMenu,
    OpsContentTop,
    OpsMenuItem,
    OpsSidebar,
    OpsControlSidebar
];

const NGA_DIRECTIVES = [
    BaScrollPosition,
    BaSlimScroll
];

const NGA_PIPES = [
    SvgPicturePipe
];

const NGA_SERVICES = [
    OpsMenuService,
    BaThemePreloader,
    BaThemeSpinner,
];

const NGA_VALIDATORS = [];

@NgModule({
              declarations: [
                  ...NGA_PIPES,
                  ...NGA_DIRECTIVES,
                  ...NGA_COMPONENTS
              ],
              imports:      [
                  CommonModule,
                  RouterModule,
                  FormsModule,
                  ReactiveFormsModule
              ],
              providers:    [
                  GlobalState,
                  ...NGA_SERVICES
              ],
              exports:      [
                  ...NGA_PIPES,
                  ...NGA_DIRECTIVES,
                  ...NGA_COMPONENTS
              ]
          })
export class ThemeModule {
}
