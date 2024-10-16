    function loadHTML() {
        fetch('../Home/navbar2.html')
            .then(response => response.text()) 
            .then(data => {
                // Insert the navbar content into the DOM
                document.getElementById('navbar').innerHTML = data;

                // After the navbar is loaded, call the dropdown logic
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

    /* Initialize dropdown functionality after the navbar is loaded */
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

