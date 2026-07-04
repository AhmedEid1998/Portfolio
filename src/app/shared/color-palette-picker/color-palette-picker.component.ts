import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AccentPaletteId } from '../../core/constants/color-palettes';
import { ColorPaletteService } from '../../core/services/color-palette.service';

@Component({
  selector: 'app-color-palette-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative">
      <button
        type="button"
        class="inline-flex size-10 cursor-pointer items-center justify-center rounded-lg border border-slate-200/80 bg-white/70 transition hover:border-brand-500/30 hover:bg-brand-500/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-400/30 dark:hover:bg-brand-500/10"
        (click)="togglePanel()"
        [attr.aria-expanded]="panelOpen()"
        aria-controls="color-palette-panel"
        aria-label="Choose accent color"
      >
        <span
          class="size-5 rounded-full ring-2 ring-white/80 dark:ring-white/20"
          [style.backgroundColor]="colorPaletteService.getPalette(colorPaletteService.palette()).preview"
        ></span>
      </button>

      @if (panelOpen()) {
        <div
          id="color-palette-panel"
          class="absolute top-full right-0 z-50 mt-2 w-52 rounded-xl border border-slate-200/80 bg-white/95 p-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-surface-dark/95"
        >
          <p class="mb-2 px-1 text-xs font-medium text-slate-500 dark:text-slate-400">
            Accent color
          </p>
          <div class="grid grid-cols-3 gap-2">
            @for (palette of colorPaletteService.palettes; track palette.id) {
              <button
                type="button"
                (click)="selectPalette(palette.id)"
                class="flex flex-col items-center gap-1 rounded-lg p-2 transition hover:bg-brand-500/10"
                [attr.aria-label]="'Use ' + palette.label + ' theme'"
                [attr.aria-current]="colorPaletteService.palette() === palette.id ? 'true' : null"
              >
                <span
                  class="size-7 rounded-full transition"
                  [class.ring-2]="colorPaletteService.palette() === palette.id"
                  [class.ring-brand-500]="colorPaletteService.palette() === palette.id"
                  [class.ring-offset-2]="colorPaletteService.palette() === palette.id"
                  [class.ring-offset-white]="colorPaletteService.palette() === palette.id"
                  [class.dark:ring-offset-surface-dark]="colorPaletteService.palette() === palette.id"
                  [style.backgroundColor]="palette.preview"
                ></span>
                <span class="text-[10px] font-medium text-slate-600 dark:text-slate-300">
                  {{ palette.label }}
                </span>
              </button>
            }
          </div>
        </div>
      }
    </div>
  `,
})
export class ColorPalettePickerComponent {
  readonly colorPaletteService = inject(ColorPaletteService);
  readonly panelOpen = signal(false);

  togglePanel(): void {
    this.panelOpen.update((open) => !open);
  }

  selectPalette(paletteId: AccentPaletteId): void {
    this.colorPaletteService.setPalette(paletteId);
    this.panelOpen.set(false);
  }
}
