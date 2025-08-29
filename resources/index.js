const links = document.querySelectorAll('.linkIcon');
const body = document.body;

const originalColor = window.getComputedStyle(body).backgroundColor;

links.forEach(link => {
  link.addEventListener('mouseover', function() {
    const hoverColor = this.dataset.color; 
    body.style.backgroundColor = hoverColor;
  });

  link.addEventListener('mouseout', function() {
    body.style.backgroundColor = originalColor;
  });
});