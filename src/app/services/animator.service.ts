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

}
