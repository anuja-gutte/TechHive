const searchMapping = {
  'data structures': './Data-Structres.html',
  'algorithms': './Algorithms.html',
  'about us': './about us.html',
  'recursion': '../Recursion2/sidemenu.html',
  'sorting': '../Sorting/sorting-sidemenu.html',
  'linked lists': '../LinkedList/LinkedList-sidemenu.html',
  'queues': '../Queue/queue-sidemenu.html',
  'searching': '../Searching/Searching-sidemenu.html',
  'trees': '../Trees/Trees-sidemenu.html',
};

function redirectToPage() {
  let query = document.getElementById('searchInput').value.trim().toLowerCase();
  
  if (query) {
    if (searchMapping[query]) {
      window.location.href = searchMapping[query];
    } else {
      window.location.href = "/search-results.html?query=" + encodeURIComponent(query);
    }
  } else {
    alert("Please enter a search term");
  }
}

document.getElementById('searchInput').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); 
    redirectToPage(); 
  }
});
