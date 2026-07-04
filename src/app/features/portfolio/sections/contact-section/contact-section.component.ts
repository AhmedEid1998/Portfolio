import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../../../core/services/portfolio.service';

@Component({
  selector: 'app-contact-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contact" class="px-4 py-20 pb-28 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <h2 class="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">Contact</h2>

        <p class="mb-2 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
          I'm currently looking to join a cross-functional team that values improving people's lives
          through accessible design — or have a project in mind? Let's connect.
        </p>

        <a
          [href]="'mailto:' + profile().email"
          class="mb-8 inline-block text-lg font-semibold text-brand-600 transition hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
        >
          {{ profile().email }}
        </a>

        <div class="flex flex-wrap items-center gap-4">
          @for (social of profile().socials; track social.url) {
            <a
              [href]="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex size-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white/70 text-slate-600 transition hover:border-brand-500/40 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-brand-400/40 dark:hover:text-brand-400"
              [attr.aria-label]="social.label"
            >
              @switch (social.icon) {
                @case ('github') {
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                }
                @case ('linkedin') {
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 4.126 0 2.063 2.063 0 0 1-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                }
                @case ('email') {
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="size-5" aria-hidden="true">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                }
              }
            </a>
          }
        </div>

        <p class="mt-16 text-center text-xs text-slate-500 dark:text-slate-500">
          © {{ currentYear }} {{ profile().fullName }}. All rights reserved.
        </p>
      </div>
    </section>
  `,
})
export class ContactSectionComponent {
  private readonly portfolioService = inject(PortfolioService);
  readonly profile = this.portfolioService.profile;
  readonly currentYear = new Date().getFullYear();
}
