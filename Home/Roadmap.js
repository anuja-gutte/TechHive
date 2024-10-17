// Script to toggle the visibility of nested lists on click
document.querySelectorAll('#roadmap li > span.title').forEach(item => {
    item.addEventListener('click', () => {
      const nestedList = item.parentElement.querySelector('ul');
      if (nestedList) {
        nestedList.style.display = nestedList.style.display === 'none' ? 'block' : 'none';
      }
    });
  });