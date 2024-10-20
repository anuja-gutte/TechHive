const searchMapping = {
    'data structures': '/Data-Structures',
    'algorithms': '/Algorithms.html',
    'about us': '/about us.html',
    'dynamic programming': '/dynamic-programming.html',
    'recursion': '/Recursion2/sidemenu.html',
    'sorting algorithms': './Sorting/sorting-sidemenu.html',
    'linked lists': './LinkedList/LinkedList-sidemenu.html',
    'queues': './Queue/queue-sidemenu.html',
    'searching': './Searching/Searching-sidemenu.html',
    'trees': './trees/Trees-sidemenu.html',
  };

// Function to handle the redirect
function redirectToPage() {
    let query = document.getElementById('searchInput').value.trim();
    
    if (query) {
      // Redirect to a new page with the search query as a parameter in the URL
      window.location.href = "/search-results.html?query=" + encodeURIComponent(query);
    } else {
      alert("Please enter a search term");
    }
  }
  
  // Event listener for the Enter key
  document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the form from submitting if inside a form tag
      redirectToPage(); // Call the redirect function when Enter is pressed
    }
  });
  