import { Injectable, signal } from '@angular/core';
import {
  AccentPalette,
  AccentPaletteId,
  ACCENT_PALETTES,
  DEFAULT_ACCENT_PALETTE,
  isAccentPaletteId,
} from '../constants/color-palettes';

const STORAGE_KEY = 'portfolio-accent';

@Injectable({ providedIn: 'root' })
export class ColorPaletteService {
  readonly palettes: AccentPalette[] = ACCENT_PALETTES;
  readonly palette = signal<AccentPaletteId>(this.readStoredPalette());

  constructor() {
    this.applyPalette(this.palette());
  }

  setPalette(paletteId: AccentPaletteId): void {
    this.palette.set(paletteId);
    this.applyPalette(paletteId);
  }

  getPalette(paletteId: AccentPaletteId): AccentPalette {
    return this.palettes.find((palette) => palette.id === paletteId) ?? this.palettes[0];
  }

  private readStoredPalette(): AccentPaletteId {
    if (typeof window === 'undefined') {
      return DEFAULT_ACCENT_PALETTE;
    }

    const stored = localStorage.getItem(STORAGE_KEY);
    return isAccentPaletteId(stored) ? stored : DEFAULT_ACCENT_PALETTE;
  }

  private applyPalette(paletteId: AccentPaletteId): void {
    if (paletteId === DEFAULT_ACCENT_PALETTE) {
      document.documentElement.removeAttribute('data-accent');
    } else {
      document.documentElement.setAttribute('data-accent', paletteId);
    }

    localStorage.setItem(STORAGE_KEY, paletteId);
  }
}
