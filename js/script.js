document.addEventListener('DOMContentLoaded', () => {
  const menuTrigger = document.querySelector('.menu-trigger');
  const sidebar = document.querySelector('.sidebar');
  const sidebarClose = document.querySelector('.sidebar-close');
  
  // Open Sidebar
  if (menuTrigger) {
    menuTrigger.addEventListener('click', () => {
      sidebar.classList.add('active');
    });
  }

  // Close Sidebar
  if (sidebarClose) {
    sidebarClose.addEventListener('click', () => {
      sidebar.classList.remove('active');
    });
  }
});
