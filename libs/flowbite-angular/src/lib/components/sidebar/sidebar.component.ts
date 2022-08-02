import { Component, Input } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { SidebarService } from '../../services';

@Component({
  selector: 'flowbite-sidebar',
  template: `<aside
    class="h-full"
    [class.w-16]="sidebarService.$collapsed | async"
    [class.w-64]="(sidebarService.$collapsed | async) === false"
    [@.disabled]="!animated"
    [@collapsed]="(sidebarService.$collapsed | async)!.toString()"
  >
    <div
      class="flex h-full flex-col space-y-4 divide-y divide-gray-200 overflow-y-auto bg-white py-4 px-3 dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800"
      [class.rounded]="rounded"
      [ngClass]="extraClass"
    >
      <ng-content></ng-content>
    </div>
  </aside>`,
  animations: [
    trigger('collapsed', [
      state(
        'true',
        style({
          // Tailwind w-16 = width: 4rem
          width: '4rem',
        })
      ),
      state(
        'false',
        style({
          // Tailwind w-64 = width: 16rem
          width: '16rem',
        })
      ),
      transition('true => false', [animate('200ms ease-in')]),
      transition('false => true', [animate('200ms ease-out')]),
    ]),
  ],
})
export class SidebarComponent {
  @Input() extraClass = '';
  @Input() rounded = false;
  @Input() animated = false;

  constructor(readonly sidebarService: SidebarService) {}
}
