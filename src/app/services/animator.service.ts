import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimatorService {

  public observer: IntersectionObserver;

  public constructor() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
      });
    });
  }

  public getAnimationDelay(index: number, multiplier = 150, additional = 0): string {
    return `${index * multiplier + additional}ms`;
  }

}
