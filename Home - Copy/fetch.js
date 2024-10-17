// Function to fetch HTML content from another file and inject it into the DOM
function loadHTML(file, elementId) {
    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => {
        console.error('Error fetching the HTML:', error);
      });
  }
  
  // Load the navbar into the container
  loadHTML('navbar2.html', 'sidebar-nav');
  loadHTML('navbar2.html','navbar');
  