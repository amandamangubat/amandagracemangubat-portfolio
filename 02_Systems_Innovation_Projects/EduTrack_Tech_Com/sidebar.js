document.getElementById('bar').addEventListener('click', function () {
    document.getElementById("sidebar").style.marginLeft = '0px';
    this.style.transitionDelay = '0s';
    this.style.visibility = 'hidden';
    document.getElementById("closebtn").style.visibility = 'visible';
    document.getElementById("list").style.opacity = '1';
    document.getElementById('img').style.width = '100px'
    document.getElementById('img').style.height = '100px'
    document.getElementById('img').style.margin = '30px 70px 0 70px ';
})

document.getElementById('closebtn').addEventListener('click', function () {
    document.getElementById("sidebar").style.marginLeft = '-200px';
    document.getElementById("bar").style.transitionDelay = '0.5s';
    document.getElementById("bar").style.visibility = 'visible';
    this.style.visibility = 'hidden';
    document.getElementById("list").style.opacity = '0';
    document.getElementById('img').style.width = '40px'
    document.getElementById('img').style.height = '40px'
    document.getElementById('img').style.margin = '30px 0 0 205px';
})

// Close sidebar by default when page loads
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("sidebar").style.marginLeft = '-200px';
    document.getElementById("bar").style.visibility = 'visible';
    document.getElementById("closebtn").style.visibility = 'hidden';
    document.getElementById("list").style.opacity = '0';
    document.getElementById('img').style.width = '40px';
    document.getElementById('img').style.height = '40px';
    document.getElementById('img').style.margin = '30px 0 0 205px';
});

// Open sidebar
document.getElementById('bar').addEventListener('click', function () {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.add('active');
    this.style.visibility = 'hidden';
});

// Close sidebar
document.getElementById('closebtn').addEventListener('click', function () {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove('active');
    document.getElementById("bar").style.visibility = 'visible';
});

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove('active');
    document.getElementById("bar").style.visibility = 'visible';
});

document.addEventListener("DOMContentLoaded", function () {
    function addClickListener(selector, page) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.addEventListener("click", function (event) {
                event.stopPropagation(); // Prevents event bubbling issues
                console.log(selector + " clicked! Redirecting to " + page);
                window.location.href = page;
            });
        });
    }

   // addClickListener(".home-icon", "");
    //addClickListener(".settings-icon", "");
    addClickListener(".support-icon", "feedback.html");
    addClickListener(".logout-icon", "login.html");

    // Sidebar toggle to ensure visibility of icons
    const sidebar = document.getElementById("sidebar");
    const bar = document.getElementById("bar");
    const closeBtn = document.getElementById("closebtn");

    if (bar && closeBtn) {
        bar.addEventListener("click", function () {
            sidebar.classList.add("active");
        });

        closeBtn.addEventListener("click", function () {
            sidebar.classList.remove("active");
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const sidebarTitle = document.getElementById("sidebar-email");

    // Get full email from localStorage
    const userEmail = localStorage.getItem("userEmail") || "Guest User";

    // Extract the name before '@'
    const username = userEmail.includes("@") ? userEmail.split("@")[0] : userEmail;

    // Set the sidebar title to the extracted name
    sidebarTitle.textContent = username;
});

