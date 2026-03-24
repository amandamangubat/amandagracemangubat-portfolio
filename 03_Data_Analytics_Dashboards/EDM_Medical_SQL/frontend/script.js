document.addEventListener('DOMContentLoaded', function () {
    const arrow = document.querySelectorAll(".arrow, .link_name");
    arrow.forEach(element => {
        element.addEventListener("click", (e) => {
            if (e.target.classList.contains('link_name')) {
                e.preventDefault();
            }

            const listItem = e.target.closest('li');
            if (listItem) {
                listItem.classList.toggle("showMenu");
            }
        });
    });

    const sidebar = document.querySelector(".sidebar");
    const logo = document.getElementById("logo");
    if (logo && sidebar) {
        logo.addEventListener("click", () => {
            sidebar.classList.toggle("close");
        });
    }

    const reportLinks = document.querySelectorAll('.sub-menu a, .dashboard-link'); // Added dashboard-link class
    const dashboardView = document.getElementById('dashboardView');
    const reportView = document.getElementById('reportView');
    const metabaseFrame = document.getElementById('metabaseFrame');
    const reportTitle = document.getElementById('reportTitle');
    const backButton = document.getElementById('backButton');

    // URLs with categories
    const reportUrls = {
        // Patient reports
        'Monthly Patient': 'http://localhost:3000/public/dashboard/dbc8624b-5a07-4545-83dd-a56e500333e1',
        'Schedule Report': 'http://localhost:3000/public/dashboard/6523df9d-7297-4d8a-b732-f47352388e8d',
        'Patient Demographics': 'http://localhost:3000/public/dashboard/f9eea853-a03a-4d4e-813d-4ddaa50f4ae3',

        // Appointments reports
        'Doctor List': 'http://localhost:3000/public/dashboard/fd113efa-b6d8-43cb-9bba-2cddd0ca9b47',
        'Canceled Appointments': 'http://localhost:3000/public/dashboard/e058f1ce-8331-4c36-9f07-fa902d03143e',
        'Appointment Summary': 'http://localhost:3000/public/dashboard/eebd5c2a-71cf-4c14-b4f7-2e8f0f498f13',

        // Financial reports
        'Financial Report': 'http://localhost:3000/public/dashboard/62c1c86d-f6fa-4524-8474-9f29493da618',
        'Hospital Expense': 'http://localhost:3000/public/dashboard/15b80398-0c6c-476b-b68e-7bd6eb38785a',

        // Inventory reports
        'Medication & Inventory': 'http://localhost:3000/public/dashboard/a4f4f91b-5298-47f9-9ca5-3b9431e91cde',

        // Dashboard views
        'Appointments Overview': 'http://localhost:3000/public/dashboard/c62a194c-f6bb-48d4-9b75-3b7ae205dad6',
        'Financial Overview': 'http://localhost:3000/public/dashboard/3229b60f-9aa2-4b7d-827a-30b91fc33b03',
        'Patient Overview': 'http://localhost:3000/public/dashboard/8c4000de-f081-47c7-acab-2e50edf052ed'
    };

    if (reportLinks.length && dashboardView && reportView && metabaseFrame && reportTitle && backButton) {
        reportLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const reportName = this.textContent.trim();

                dashboardView.style.display = 'none';
                reportView.style.display = 'block';
                reportTitle.textContent = reportName;

                if (reportUrls[reportName]) {
                    metabaseFrame.src = reportUrls[reportName];
                    sessionStorage.setItem('currentReport', reportName);
                } else {
                    metabaseFrame.src = '';
                    reportTitle.textContent = 'Report Not Available';
                    console.warn(`Report URL not configured: ${reportName}`);
                }
            });
        });

        backButton.addEventListener('click', function () {
            dashboardView.style.display = 'block';
            reportView.style.display = 'none';
            metabaseFrame.src = '';
            sessionStorage.removeItem('currentReport');
        });

        const savedReport = sessionStorage.getItem('currentReport');
        if (savedReport && reportUrls[savedReport]) {
            dashboardView.style.display = 'none';
            reportView.style.display = 'block';
            reportTitle.textContent = savedReport;
            metabaseFrame.src = reportUrls[savedReport];
        }
    } else {
        console.error('One or more report elements not found in the DOM');
    }

    if (metabaseFrame) {
        metabaseFrame.addEventListener('error', () => {
            reportTitle.textContent = 'Failed to Load Report';
            console.error('Failed to load Metabase dashboard');
        });
    }
});