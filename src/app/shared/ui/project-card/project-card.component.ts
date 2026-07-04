import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Project } from '../../../core/models/portfolio.model';

@Component({
  selector: 'app-project-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article
      class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-500/10 bg-white/60 p-6 backdrop-blur-sm transition duration-300 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-400/30 dark:hover:shadow-brand-500/20"
    >
      <div
        class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 transition group-hover:opacity-100"
        aria-hidden="true"
      ></div>

      <h3 class="text-lg font-semibold text-slate-900 dark:text-white">
        {{ project().title }}
      </h3>
      <p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
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
    </article>
  `,
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
