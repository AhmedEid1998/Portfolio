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
    'radial-gradient(circle, color-mix(in srgb, var(--color-brand-500) 35%, transparent) 0%, transparent 70%)',
  );
}
