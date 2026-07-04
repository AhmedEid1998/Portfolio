export type AccentPaletteId = 'purple' | 'blue' | 'emerald' | 'rose' | 'amber' | 'cyan';

export interface AccentPalette {
  id: AccentPaletteId;
  label: string;
  preview: string;
}

export const DEFAULT_ACCENT_PALETTE: AccentPaletteId = 'purple';

export const ACCENT_PALETTES: AccentPalette[] = [
  { id: 'purple', label: 'Purple', preview: '#9857d3' },
  { id: 'blue', label: 'Blue', preview: '#3b82f6' },
  { id: 'emerald', label: 'Emerald', preview: '#10b981' },
  { id: 'rose', label: 'Rose', preview: '#f43f5e' },
  { id: 'amber', label: 'Amber', preview: '#f59e0b' },
  { id: 'cyan', label: 'Cyan', preview: '#06b6d4' },
];

export const ACCENT_PALETTE_IDS = ACCENT_PALETTES.map((palette) => palette.id);

export function isAccentPaletteId(value: string | null): value is AccentPaletteId {
  return value !== null && ACCENT_PALETTE_IDS.includes(value as AccentPaletteId);
}
