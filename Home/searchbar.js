const searchMapping = {
    'data structures': '/data-structures.html',
    'algorithms': '/algorithms.html',
    'graph theory': '/graph-theory.html',
    'dynamic programming': '/dynamic-programming.html',
    'recursion': './Recursion/RecursionIntroduction.html',
    'sorting algorithms': '/sorting-algorithms.html',
    'linked lists': '/linked-lists.html',
    'stacks': '/stacks.html',
    'queues': '/queues.html',
    'hash tables': '/hash-tables.html',
    'binary trees': '/binary-trees.html',
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
  