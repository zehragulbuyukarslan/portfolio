
  
document.getElementById("about-button").addEventListener("click", function(e) {
    e.preventDefault(); 
    document.querySelector(".about").scrollIntoView({ 
      behavior: "smooth" 
    });
});

document.getElementById("services-button").addEventListener("click", function(e) {
    e.preventDefault(); 
    document.querySelector(".services").scrollIntoView({ 
      behavior: "smooth" 
    });
});

document.getElementById("projects-button").addEventListener("click", function(e) {
    e.preventDefault(); 
    document.querySelector(".projects").scrollIntoView({ 
      behavior: "smooth" 
    });
});

document.getElementById("contact-button").addEventListener("click", function(e) {
    e.preventDefault(); 
    document.querySelector(".footer").scrollIntoView({ 
      behavior: "smooth" 
    });
});

class Slideshow {
  constructor(root, {interval = 4000} = {}) {
    this.root = typeof root === 'string' ? document.querySelector(root) : root;
    this.slides = Array.from(this.root.querySelectorAll('.slide'));
    this.index = this.slides.findIndex(s => s.classList.contains('active')) || 0;
    this.interval = interval;
    this.timer = null;
    this.nextBtn = this.root.querySelector('.next');
    this.prevBtn = this.root.querySelector('.prev');
    this.dotsContainer = this.root.querySelector('.dots');
    this._buildDots();
    this._bindEvents();
    this.show(this.index);
    this.start();
  }

  _buildDots() {
    this.dotsContainer.innerHTML = '';
    this.dots = this.slides.map((_, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.addEventListener('click', () => this.show(i));
      this.dotsContainer.appendChild(btn);
      return btn;
    });
  }

  _bindEvents() {
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());
    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
    this.root.addEventListener('mouseenter', () => this.stop());
    this.root.addEventListener('mouseleave', () => this.start());
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'ArrowLeft') this.prev();
    });
  }

  show(i) {
    this.slides.forEach((s, idx) => {
      s.classList.toggle('active', idx === i);
      if (this.dots && this.dots[idx]) this.dots[idx].classList.toggle('active', idx === i);
    });
    this.index = (i + this.slides.length) % this.slides.length;
  }

  next() { this.show((this.index + 1) % this.slides.length); }
  prev() { this.show((this.index - 1 + this.slides.length) % this.slides.length); }

  start() {
    this.stop();
    this.timer = setInterval(() => this.next(), this.interval);
  }

  stop() {
    if (this.timer) { clearInterval(this.timer); this.timer = null; }
  }
}

// Başlatma (sayfa sonuna veya DOMContentLoaded içinde çalıştırın)
document.addEventListener('DOMContentLoaded', () => {
  new Slideshow('#slideshow', { interval: 3500 });
});