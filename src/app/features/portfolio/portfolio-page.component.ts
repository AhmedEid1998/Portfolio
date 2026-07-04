import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';
import { ExperienceSectionComponent } from './sections/experience-section/experience-section.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { ProjectsSectionComponent } from './sections/projects-section/projects-section.component';

@Component({
  selector: 'app-portfolio-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroSectionComponent,
    ExperienceSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent,
  ],
  template: `
    <div class="relative min-h-screen overflow-x-hidden">
      <app-hero-section />
      <app-experience-section />
      <app-about-section />
      <app-projects-section />
      <app-contact-section />
    </div>
  `,
})
export class PortfolioPageComponent {}
