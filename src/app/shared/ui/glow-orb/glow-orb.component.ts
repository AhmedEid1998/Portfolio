import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-glow-orb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="pointer-events-none absolute rounded-full blur-3xl"
      [class]="positionClass()"
      [style.width.px]="size()"
      [style.height.px]="size()"
      [style.background]="gradient()"
      aria-hidden="true"
    ></div>
  `,
})
export class GlowOrbComponent {
  readonly size = input(400);
  readonly positionClass = input('top-0 left-1/2 -translate-x-1/2');
  readonly gradient = input(
    'radial-gradient(circle, rgba(113,39,186,0.35) 0%, rgba(113,39,186,0) 70%)',
  );
}
