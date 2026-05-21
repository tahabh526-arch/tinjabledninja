// THE REVIEW — Main JS

// Archive filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    // You can extend this to filter .archive-item elements by label
  });
});

// Smooth reading progress indicator (article pages only)
if (document.querySelector('.article-content')) {
  const bar = document.createElement('div');
  bar.style.cssText = `
    position: fixed; top: 0; left: 0; height: 2px;
    background: #9b1c1c; width: 0%; z-index: 9999;
    transition: width 0.1s linear;
  `;
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const el = document.querySelector('.article-content');
    const rect = el.getBoundingClientRect();
    const total = el.offsetHeight;
    const scrolled = Math.max(0, -rect.top);
    const pct = Math.min(100, (scrolled / total) * 100);
    bar.style.width = pct + '%';
  });
}

// Minimal scroll-reveal for story cards
const revealEls = document.querySelectorAll('.story-card, .small-card, .archive-item, .list-story');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(12px)';
  observer.observe(el);
});

// Copy link share button
document.querySelectorAll('.share-btn').forEach(btn => {
  if (btn.textContent.trim() === 'Copy Link') {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(window.location.href).then(() => {
        const original = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = original; }, 1500);
      });
    });
  }
});
