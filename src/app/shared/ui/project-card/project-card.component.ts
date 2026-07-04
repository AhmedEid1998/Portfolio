import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Project } from '../../../core/models/portfolio.model';

@Component({
  selector: 'app-project-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article
      class="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
      [class.lg:[direction:rtl]]="project().reverse"
    >
      <div class="space-y-4" [class.lg:[direction:ltr]]="project().reverse">
        <p class="text-sm font-medium text-brand-600 dark:text-brand-400">
          {{ project().label }}
        </p>
        <h3 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          {{ project().title }}
        </h3>
        <div
          class="rounded-2xl border border-slate-200/80 bg-white/70 p-5 backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
        >
          <p class="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
            {{ project().description }}
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            @for (tag of project().tags; track tag) {
              <span
                class="rounded-full border border-brand-500/20 bg-brand-500/5 px-3 py-1 text-xs font-medium text-brand-700 dark:border-brand-400/20 dark:bg-brand-500/10 dark:text-brand-300"
              >
                {{ tag }}
              </span>
            }
          </div>
        </div>
      </div>

      <div
        class="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200/80 shadow-xl dark:border-white/10"
        [class.lg:order-first]="project().reverse"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-brand-100 via-white to-brand-50 dark:from-brand-950 dark:via-surface-dark dark:to-brand-900/40"
        ></div>
        <div class="absolute inset-4 rounded-xl border border-brand-500/10 bg-white/80 p-4 dark:bg-white/5">
          <div class="mb-3 flex gap-2">
            <span class="size-2.5 rounded-full bg-red-400"></span>
            <span class="size-2.5 rounded-full bg-yellow-400"></span>
            <span class="size-2.5 rounded-full bg-green-400"></span>
          </div>
          <div class="space-y-2">
            <div class="h-3 w-2/3 rounded bg-brand-500/20"></div>
            <div class="h-3 w-full rounded bg-slate-200 dark:bg-white/10"></div>
            <div class="h-3 w-5/6 rounded bg-slate-200 dark:bg-white/10"></div>
            <div class="mt-4 grid grid-cols-3 gap-2">
              <div class="aspect-square rounded-lg bg-brand-500/15"></div>
              <div class="aspect-square rounded-lg bg-brand-500/25"></div>
              <div class="aspect-square rounded-lg bg-brand-500/15"></div>
            </div>
          </div>
        </div>
        <div
          class="absolute -right-8 -bottom-8 size-32 rounded-full bg-brand-500/20 blur-2xl"
          aria-hidden="true"
        ></div>
      </div>
    </article>
  `,
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
