import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { GlowOrbComponent } from '../../../../shared/ui/glow-orb/glow-orb.component';

@Component({
  selector: 'app-about-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GlowOrbComponent],
  template: `
    <section id="about" class="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <app-glow-orb
        [size]="400"
        positionClass="top-0 right-1/4"
        gradient="radial-gradient(circle, rgba(152,87,211,0.2) 0%, rgba(152,87,211,0) 70%)"
      />

      <div class="relative mx-auto max-w-6xl">
        <div class="mb-12 text-center">
          <p class="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
            I'm currently looking to join a
            <span class="font-semibold text-brand-600 dark:text-brand-400">cross-functional</span>
            team that values improving people's lives through accessible design
          </p>
        </div>

        <div class="mb-16 flex flex-wrap justify-center gap-3">
          @for (skill of allSkills(); track skill) {
            <span
              class="rounded-full border border-brand-500/20 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur-sm transition hover:border-brand-500/40 hover:bg-brand-500/5 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-brand-400/30"
            >
              {{ skill }}
            </span>
          }
        </div>

        <div class="relative mx-auto min-h-80 w-full max-w-lg">
          <div
            class="absolute top-1/2 left-1/2 flex size-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand-500/20 bg-gradient-to-br from-brand-500/20 to-brand-700/10 shadow-2xl shadow-brand-500/20 sm:size-40"
          >
            <div
              class="absolute inset-0 rounded-full border border-white/10"
              style="transform: scale(1.3)"
              aria-hidden="true"
            ></div>
            <div
              class="absolute inset-0 rounded-full border border-white/5"
              style="transform: scale(1.6)"
              aria-hidden="true"
            ></div>
            <div
              class="absolute inset-0 rounded-full border border-white/5"
              style="transform: scale(2)"
              aria-hidden="true"
            ></div>
            <span class="text-3xl font-bold text-brand-600 dark:text-brand-400">AE</span>
          </div>

          @for (skill of orbitalSkills(); track skill.name; let i = $index) {
            <span
              class="absolute rounded-full border border-brand-500/30 bg-white/80 px-3 py-1.5 text-xs font-semibold text-brand-700 shadow-lg backdrop-blur-sm dark:border-brand-400/30 dark:bg-surface-dark/90 dark:text-brand-300"
              [style.top.%]="skill.top"
              [style.left.%]="skill.left"
            >
              {{ skill.name }}
            </span>
          }
        </div>

        <div class="mt-20 grid gap-8 lg:grid-cols-3">
          <div class="rounded-2xl border border-slate-200/80 bg-white/60 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <h3 class="mb-4 text-lg font-bold text-slate-900 dark:text-white">Education</h3>
            <p class="font-medium text-brand-600 dark:text-brand-400">{{ education().degree }}</p>
            <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">{{ education().institution }}</p>
            <p class="mt-1 text-xs text-slate-500">{{ education().period }}</p>
          </div>

          <div class="rounded-2xl border border-slate-200/80 bg-white/60 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <h3 class="mb-4 text-lg font-bold text-slate-900 dark:text-white">Strengths</h3>
            <div class="flex flex-wrap gap-2">
              @for (strength of strengths(); track strength) {
                <span
                  class="rounded-lg border border-brand-500/15 bg-brand-500/5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300"
                >
                  {{ strength }}
                </span>
              }
            </div>
          </div>

          <div class="rounded-2xl border border-slate-200/80 bg-white/60 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <h3 class="mb-4 text-lg font-bold text-slate-900 dark:text-white">Languages</h3>
            <div class="space-y-4">
              @for (language of languages(); track language.name) {
                <div>
                  <div class="mb-1 flex justify-between text-sm">
                    <span class="font-medium text-slate-700 dark:text-slate-300">{{ language.name }}</span>
                    <span class="text-slate-500">{{ language.level }}/{{ language.maxLevel }}</span>
                  </div>
                  <div class="flex gap-1">
                    @for (dot of languageDots(language.level, language.maxLevel); track $index) {
                      <span
                        class="size-2.5 rounded-full"
                        [class]="dot ? 'bg-brand-500' : 'bg-slate-200 dark:bg-white/10'"
                      ></span>
                    }
                  </div>
                </div>
              }
            </div>
          </div>
        </div>

        <div class="mt-8 grid gap-4 sm:grid-cols-3">
          @for (achievement of achievements(); track achievement.id) {
            <div
              class="rounded-2xl border border-brand-500/10 bg-gradient-to-br from-brand-500/5 to-transparent p-5 dark:from-brand-500/10"
            >
              <h4 class="mb-2 font-semibold text-slate-900 dark:text-white">{{ achievement.title }}</h4>
              <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {{ achievement.description }}
              </p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class AboutSectionComponent {
  private readonly portfolioService = inject(PortfolioService);

  readonly allSkills = this.portfolioService.allSkills;
  readonly education = this.portfolioService.education;
  readonly strengths = this.portfolioService.strengths;
  readonly languages = this.portfolioService.languages;
  readonly achievements = this.portfolioService.achievements;

  readonly orbitalSkills = computed(() => {
    const skills = this.allSkills().slice(0, 8);
    const positions = [
      { top: 5, left: 35 },
      { top: 15, left: 75 },
      { top: 45, left: 90 },
      { top: 75, left: 70 },
      { top: 85, left: 30 },
      { top: 60, left: 0 },
      { top: 25, left: 5 },
      { top: 50, left: 50 },
    ];

    return skills.map((name, index) => ({
      name,
      top: positions[index]?.top ?? 50,
      left: positions[index]?.left ?? 50,
    }));
  });

  languageDots(level: number, maxLevel: number): boolean[] {
    return Array.from({ length: maxLevel }, (_, index) => index < level);
  }
}
