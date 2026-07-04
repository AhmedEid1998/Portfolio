import { computed, Injectable, signal } from '@angular/core';
import { PORTFOLIO_DATA } from '../data/portfolio.data';
import { Experience, Project } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly data = signal(PORTFOLIO_DATA);

  readonly profile = computed(() => this.data().profile);
  readonly navLinks = computed(() => this.data().navLinks);
  readonly experiences = computed(() => this.data().experiences);
  readonly featuredExperiences = computed(() => this.data().experiences.slice(0, 4));
  readonly projects = computed(() => this.data().projects);
  readonly achievements = computed(() => this.data().achievements);
  readonly education = computed(() => this.data().education);
  readonly skillGroups = computed(() => this.data().skillGroups);
  readonly allSkills = computed(() =>
    this.data()
      .skillGroups.flatMap((group) => group.skills)
      .filter((skill, index, skills) => skills.indexOf(skill) === index),
  );
  readonly strengths = computed(() => this.data().strengths);
  readonly languages = computed(() => this.data().languages);

  getExperienceById(id: string): Experience | undefined {
    return this.experiences().find((experience) => experience.id === id);
  }

  getProjectById(id: string): Project | undefined {
    return this.projects().find((project) => project.id === id);
  }
}
