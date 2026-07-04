import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { ProjectCardComponent } from '../../../../shared/ui/project-card/project-card.component';
import { GlowOrbComponent } from '../../../../shared/ui/glow-orb/glow-orb.component';

@Component({
  selector: 'app-projects-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectCardComponent, GlowOrbComponent],
  template: `
    <section id="projects" class="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <app-glow-orb
        [size]="500"
        positionClass="bottom-0 left-1/4"
        gradient="radial-gradient(circle, color-mix(in srgb, var(--color-brand-500) 20%, transparent) 0%, transparent 70%)"
      />

      <div class="relative mx-auto max-w-6xl">
        <h2 class="mb-10 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
          Featured Projects
        </h2>

        <div class="grid gap-6 sm:grid-cols-2">
          @for (project of projects(); track project.id) {
            <app-project-card [project]="project" />
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsSectionComponent {
  private readonly portfolioService = inject(PortfolioService);
  readonly projects = this.portfolioService.projects;
}
