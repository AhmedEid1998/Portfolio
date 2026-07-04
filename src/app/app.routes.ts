import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { PortfolioPageComponent } from './features/portfolio/portfolio-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: PortfolioPageComponent, title: 'Ahmed Eid Fathy | Frontend Developer' },
      { path: '**', redirectTo: '' },
    ],
  },
];
