import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-main-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <div class="relative min-h-screen bg-surface-light text-slate-900 dark:bg-surface-dark dark:text-slate-100">
      <app-header />
      <router-outlet />
    </div>
  `,
})
export class MainLayoutComponent {}
