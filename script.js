function goToDetail(project) {
  const detailPages = {
    jarvis: 'https://www.linkedin.com/in/mohid-zaman-394867355',
    construction: 'https://www.linkedin.com/in/mohid-zaman-394867355',
    timeapp: 'https://www.linkedin.com/in/mohid-zaman-394867355',
    neura: 'https://www.linkedin.com/in/mohid-zaman-394867355'
  };
  window.open(detailPages[project], '_blank');
}

// Scroll animations
const animatedSections = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

animatedSections.forEach(section => {
  observer.observe(section);
});