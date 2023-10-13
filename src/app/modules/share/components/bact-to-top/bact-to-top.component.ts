import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bact-to-top',
  templateUrl: './bact-to-top.component.html',
  styleUrls: ['./bact-to-top.component.scss']
})
export class BactToTopComponent implements OnInit {
  @ViewChild('progress', { static: true }) progressElement!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.showOrHideButton();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showOrHideButton();

  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  showOrHideButton(): void {
    const scrollProgress = this.progressElement.nativeElement;
    if (!scrollProgress) return;

    const pos = document.documentElement.scrollTop;
    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 2500) {
      this.renderer.setStyle(scrollProgress, 'display', 'grid');
    } else {
      this.renderer.setStyle(scrollProgress, 'display', 'none');
    }
  }

}
