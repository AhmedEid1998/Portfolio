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
        gradient="radial-gradient(circle, rgba(113,39,186,0.2) 0%, rgba(113,39,186,0) 70%)"
      />

      <div class="relative mx-auto max-w-6xl space-y-20">
        @for (project of projects(); track project.id) {
          <app-project-card [project]="project" />
        }
      </div>
    </section>
  `,
})
export class ProjectsSectionComponent {
  private readonly portfolioService = inject(PortfolioService);
  readonly projects = this.portfolioService.projects;
}
