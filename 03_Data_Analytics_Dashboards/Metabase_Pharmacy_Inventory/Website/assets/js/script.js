// === ELEMENT SELECTORS ===
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.getElementById('toggleSidebar');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// === SIDEBAR TOGGLE ===
toggleBtn.addEventListener('click', () => {
    const collapsed = sidebar.classList.toggle('collapsed');

    // Always close all dropdowns when collapsing
    if (collapsed) {
        document.querySelectorAll('.dropdown').forEach(drop => {
            drop.classList.remove('open');
        });
    }
});

// === DROPDOWN TOGGLE ===
dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', e => {
        e.preventDefault();
        const parent = toggle.closest('.dropdown');

        if (sidebar.classList.contains('collapsed')) {
            // If already open, close it
            if (parent.classList.contains('open')) {
                parent.classList.remove('open');
            } else {
                // Close all others, open only clicked
                document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
                parent.classList.add('open');
            }
        } else {
            // Expanded sidebar: just toggle open/close
            parent.classList.toggle('open');
        }
    });
});

// === ACTIVE LINK STYLING FOR SUBMENU ===
document.querySelectorAll('.submenu li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.submenu li').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

// === THEME TOGGLE ===
const themeBtn = document.getElementById('toggleTheme');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeBtn.classList.toggle('bx-sun');
        themeBtn.classList.toggle('bx-moon');
    });
}

// === METABASE REPORT LOADER ===
function loadReport(url) {
    const iframe = document.getElementById('metabase');
    if (iframe) iframe.src = url;

    const title = document.getElementById('reportTitle');
    if (title) title.textContent = 'Loading Report...';
}