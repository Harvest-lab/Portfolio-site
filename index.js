document.addEventListener("DOMContentLoaded", () => {

    // for the navbar
    fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data

        // for the toggle button
        const navbarToggle = document.querySelector('.navbar-toggle')
        const navbarMenu = document.querySelector('.navbar-menu')

        navbarToggle.addEventListener("click", () =>{
            navbarToggle.classList.toggle('active')
            navbarMenu.classList.toggle('active')
        })

        // to highlight the active page
        const currentPage = window.location.pathname.split("/").pop()
        const links = document.querySelectorAll(".navbar a")

        links.forEach(link => {
            if(link.getAttribute("href") === currentPage || 
            (currentPage === "" && link.getAttribute("href") === "index.html")){
                link.classList.add("active")
            }
        })

    })
    .catch(error => console.error("Error loading navbar:", error))

    // for the footer
    fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data
    })
    .catch(error => console.error("Error loading footer:", error))

})
