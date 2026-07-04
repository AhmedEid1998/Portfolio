import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { ExperienceCardComponent } from '../../../../shared/ui/experience-card/experience-card.component';
import { GlowOrbComponent } from '../../../../shared/ui/glow-orb/glow-orb.component';

@Component({
  selector: 'app-experience-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ExperienceCardComponent, GlowOrbComponent],
  template: `
    <section id="experience" class="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <app-glow-orb [size]="450" positionClass="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div class="relative mx-auto max-w-6xl">
        <h2 class="mb-10 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
          Work Experience
        </h2>

        <div class="grid gap-6 sm:grid-cols-2">
          @for (experience of experiences(); track experience.id) {
            <app-experience-card [experience]="experience" />
          }
        </div>
      </div>
    </section>
  `,
})
export class ExperienceSectionComponent {
  private readonly portfolioService = inject(PortfolioService);
  readonly experiences = this.portfolioService.experiences;
}
