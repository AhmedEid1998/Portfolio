import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { GlowOrbComponent } from '../../../../shared/ui/glow-orb/glow-orb.component';
import { TypingTextComponent } from '../../../../shared/ui/typing-text/typing-text.component';

@Component({
  selector: 'app-hero-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GlowOrbComponent, TypingTextComponent],
  template: `
    <section id="home" class="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <app-glow-orb [size]="500" positionClass="top-20 right-0 translate-x-1/4" />
      <app-glow-orb
        [size]="350"
        positionClass="top-40 left-0 -translate-x-1/4"
        gradient="radial-gradient(circle, color-mix(in srgb, var(--color-brand-400) 25%, transparent) 0%, transparent 70%)"
      />

      <div class="relative mx-auto max-w-6xl">
        <div class="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
          <div class="relative shrink-0">
            <div
              class="absolute inset-0 rounded-3xl bg-brand-500/30 blur-2xl"
              aria-hidden="true"
            ></div>
            <div class="relative aspect-[3/4] w-44 sm:w-52 lg:w-60">
              <img
                [src]="profile().avatarUrl"
                [alt]="profile().fullName"
                class="size-full object-contain object-bottom drop-shadow-2xl"
                width="240"
                height="320"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          <div class="flex-1 text-center lg:text-left">
            <p class="mb-2 text-sm text-slate-600 sm:text-base dark:text-slate-400">
              Hello! I Am
              <span class="font-semibold text-brand-600 dark:text-brand-400">
                {{ profile().firstName }} {{ profile().lastName.split(' ')[0] }}
              </span>
            </p>

            <h1 class="mb-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              {{ profile().tagline }}
              <span class="relative inline-block text-brand-600 dark:text-brand-400">
                {{ profile().taglineHighlight }}
                <svg
                  class="absolute -bottom-1 left-0 w-full text-brand-500/60"
                  viewBox="0 0 300 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8C50 2 100 10 150 6C200 2 250 10 298 4"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p class="mb-8 text-xs text-slate-500 sm:text-sm dark:text-slate-400">
              {{ profile().taglineSub }}
            </p>

            <p
              class="mb-3 font-mono text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl dark:text-white"
            >
              I'm a
              <span class="text-brand-600 dark:text-brand-400">
                <app-typing-text [phrases]="profile().typingRoles" />
              </span>
            </p>

            <p class="mb-6 text-sm text-slate-600 sm:text-base dark:text-slate-400">
              Currently, I'm a
              <span class="font-semibold text-slate-800 dark:text-slate-200">{{ profile().role }}</span>
              at
              <span class="font-semibold text-brand-600 dark:text-brand-400">
                {{ profile().currentCompany }}
              </span>
            </p>

            <p
              class="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base lg:mx-0 dark:text-slate-300"
            >
              {{ profile().bio }}
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroSectionComponent {
  private readonly portfolioService = inject(PortfolioService);
  readonly profile = this.portfolioService.profile;
}
