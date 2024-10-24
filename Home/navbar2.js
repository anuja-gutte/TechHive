    function loadHTML() {
        fetch('../Home/navbar2.html')
            .then(response => response.text()) 
            .then(data => {
            
                document.getElementById('navbar').innerHTML = data;

            
                initializeDropdowns();
            })
            .catch(error => {
                console.error('Error fetching the HTML:', error);
            });
    }

    function toggleSidebar() {
        var sidebar = document.getElementById("mySidebar");
        if (sidebar.style.width === "300px") {
            sidebar.style.width = "0";
        } else {
            sidebar.style.width = "300px";
        }
    }

    
    function initializeDropdowns() {
        var dropdowns = document.getElementsByClassName("dropdown-btn");
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                } else {
                    dropdownContent.style.display = "block";
                }
            });
        }
    }

    window.onload = loadHTML;

