import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Experience } from '../../../core/models/portfolio.model';

@Component({
  selector: 'app-experience-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article
      class="group relative overflow-hidden rounded-2xl border border-brand-500/10 bg-white/60 p-6 backdrop-blur-sm transition duration-300 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-400/30 dark:hover:shadow-brand-500/20"
    >
      <div
        class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 transition group-hover:opacity-100"
        aria-hidden="true"
      ></div>

      <div class="mb-4 flex items-start gap-4">
        <a
          [href]="experience().companyUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="relative block size-14 shrink-0 overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm transition hover:border-brand-500/40 hover:shadow-md dark:border-white/10 dark:bg-white/10 dark:hover:border-brand-400/40"
          [attr.aria-label]="'Visit ' + experience().company + ' on LinkedIn'"
        >
          @if (experience().logoUrl) {
            <img
              [src]="experience().logoUrl"
              [alt]="experience().company + ' logo'"
              class="size-full object-contain"
              width="56"
              height="56"
              loading="lazy"
              decoding="async"
            />
          } @else {
            <span
              class="flex size-full items-center justify-center text-lg font-bold text-brand-600 dark:text-brand-400"
            >
              {{ experience().company.charAt(0) }}
            </span>
          }
        </a>
        <div class="min-w-0 flex-1">
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white">
            {{ experience().title }}
          </h3>
          <a
            [href]="experience().companyUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-medium text-brand-600 transition hover:text-brand-700 hover:underline dark:text-brand-400 dark:hover:text-brand-300"
          >
            {{ experience().company }}
          </a>
        </div>
      </div>

      <p class="mb-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {{ experience().summary }}
      </p>

      <ul class="mb-5 space-y-2">
        @for (highlight of experience().highlights.slice(0, 2); track highlight) {
          <li class="flex gap-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            <span class="mt-1.5 size-1 shrink-0 rounded-full bg-brand-500" aria-hidden="true"></span>
            <span>{{ highlight }}</span>
          </li>
        }
      </ul>

      <div class="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        <span>{{ experience().period }}</span>
        <span aria-hidden="true">·</span>
        <span>{{ experience().location }}</span>
        <span aria-hidden="true">·</span>
        <span>{{ experience().mode }}</span>
      </div>
    </article>
  `,
})
export class ExperienceCardComponent {
  readonly experience = input.required<Experience>();
}
