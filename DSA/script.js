// Accordion functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionContent = header.nextElementSibling;
    const isActive = header.classList.contains('active');

    // Close all accordion items
    document.querySelectorAll('.accordion-content').forEach(content => {
      content.style.display = 'none';
    });
    document.querySelectorAll('.accordion-header').forEach(h => {
      h.classList.remove('active');
    });

    // Toggle current accordion item
    if (!isActive) {
      accordionContent.style.display = 'block';
      header.classList.add('active');
    }
  });
});
