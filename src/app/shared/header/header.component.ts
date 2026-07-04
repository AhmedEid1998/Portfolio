import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ThemeToggleComponent],
  template: `
    <header
      class="fixed inset-x-0 top-0 z-50 border-b border-slate-200/50 bg-white/70 backdrop-blur-xl dark:border-white/5 dark:bg-surface-dark/70"
    >
      <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          (click)="closeMenu()"
          class="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900 transition hover:text-brand-600 dark:text-white dark:hover:text-brand-400"
        >
          <span
            class="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-sm text-white shadow-lg shadow-brand-500/30"
          >
            AE
          </span>
          <span class="hidden sm:inline">Ahmed Eid</span>
        </a>

        <div class="flex items-center gap-2 sm:gap-3">
          <nav class="hidden items-center gap-1 md:flex lg:gap-2" aria-label="Main navigation">
            @for (link of navLinks(); track link.fragment) {
              <a
                [href]="'#' + link.fragment"
                class="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-brand-500/10 hover:text-brand-700 dark:text-slate-300 dark:hover:bg-brand-500/10 dark:hover:text-brand-300"
              >
                {{ link.label }}
              </a>
            }
          </nav>

          <app-theme-toggle />

          <button
            type="button"
            class="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200/80 text-slate-700 transition hover:bg-slate-100 md:hidden dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/5"
            (click)="toggleMenu()"
            [attr.aria-expanded]="menuOpen()"
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
          >
            @if (menuOpen()) {
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="size-5" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            } @else {
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="size-5" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            }
          </button>
        </div>
      </div>

      @if (menuOpen()) {
        <nav
          id="mobile-nav"
          class="border-t border-slate-200/50 px-4 py-3 md:hidden dark:border-white/5"
          aria-label="Mobile navigation"
        >
          <div class="flex flex-col gap-1">
            @for (link of navLinks(); track link.fragment) {
              <a
                [href]="'#' + link.fragment"
                (click)="closeMenu()"
                class="rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-brand-500/10 hover:text-brand-700 dark:text-slate-300 dark:hover:bg-brand-500/10 dark:hover:text-brand-300"
              >
                {{ link.label }}
              </a>
            }
          </div>
        </nav>
      }
    </header>
  `,
})
export class HeaderComponent {
  private readonly portfolioService = inject(PortfolioService);

  readonly navLinks = this.portfolioService.navLinks;
  readonly menuOpen = signal(false);

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
