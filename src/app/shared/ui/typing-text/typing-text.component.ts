import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-typing-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="inline-flex items-center">
      <span>{{ displayed() }}</span>
      <span
        class="ml-1 inline-block h-[1em] w-0.5 animate-pulse bg-brand-500 dark:bg-brand-400"
        aria-hidden="true"
      ></span>
    </span>
  `,
})
export class TypingTextComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  readonly phrases = input<string[]>(['Frontend Developer.']);
  readonly typingSpeed = input(80);
  readonly deletingSpeed = input(45);
  readonly pauseDuration = input(1800);

  readonly displayed = signal('');

  private phraseIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timerId: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    this.tick();

    this.destroyRef.onDestroy(() => {
      if (this.timerId !== null) {
        clearTimeout(this.timerId);
      }
    });
  }

  private tick(): void {
    const items = this.phrases();
    if (!items.length) {
      return;
    }

    const current = items[this.phraseIndex];

    if (!this.deleting) {
      this.charIndex = Math.min(this.charIndex + 1, current.length);
      this.displayed.set(current.slice(0, this.charIndex));

      if (this.charIndex === current.length) {
        this.deleting = true;
        this.timerId = setTimeout(() => this.tick(), this.pauseDuration());
        return;
      }

      this.timerId = setTimeout(() => this.tick(), this.typingSpeed());
      return;
    }

    this.charIndex = Math.max(this.charIndex - 1, 0);
    this.displayed.set(current.slice(0, this.charIndex));

    if (this.charIndex === 0) {
      this.deleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % items.length;
      this.timerId = setTimeout(() => this.tick(), this.typingSpeed());
      return;
    }

    this.timerId = setTimeout(() => this.tick(), this.deletingSpeed());
  }
}
