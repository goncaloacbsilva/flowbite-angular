import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  AccordionComponent,
  AccordionContentComponent,
  AccordionPanelComponent,
  AccordionTitleComponent,
  AlertComponent,
  BadgeComponent,
  BreadcrumbComponent,
  BreadcrumbItemComponent,
  DarkThemeToggleComponent,
  NavbarComponent,
  SidebarComponent,
  SidebarItemComponent,
  SidebarItemGroupComponent,
} from './components';
import { SidebarService, ThemeService } from './services';
import { SanitizeHtmlPipe } from './pipes';

const COMPONENTS = [
  AccordionComponent,
  AccordionContentComponent,
  AccordionPanelComponent,
  AccordionTitleComponent,
  AlertComponent,
  BadgeComponent,
  BreadcrumbComponent,
  BreadcrumbItemComponent,
  DarkThemeToggleComponent,
  NavbarComponent,
  SidebarComponent,
  SidebarItemComponent,
  SidebarItemGroupComponent,
];

const SERVICES = [SidebarService, ThemeService];

const PIPES = [SanitizeHtmlPipe];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [COMPONENTS, SanitizeHtmlPipe],
  exports: [COMPONENTS, SanitizeHtmlPipe],
  providers: [SERVICES, PIPES],
})
export class FlowbiteModule {}
