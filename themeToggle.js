document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeMenu = document.getElementById('themeMenu');
  
    // 1) Load previously chosen theme from localStorage or default to "light"
    const savedTheme = localStorage.getItem('selectedTheme') || 'light';
    applyTheme(savedTheme);
  
    // 2) Listen for clicks on the <ul> (theme list)
    themeMenu.addEventListener('click', (event) => {
      const clickedLi = event.target.closest('li');
      if (!clickedLi) return; // user didn't click an LI
  
      const chosenTheme = clickedLi.getAttribute('data-theme');
      applyTheme(chosenTheme);
  

      localStorage.setItem('selectedTheme', chosenTheme);
    });
  
  
    function applyTheme(theme) {
      body.classList.remove('pink', 'dark');
  
      if (theme === 'pink') {
        body.classList.add('pink');
      } else if (theme === 'dark') {
        body.classList.add('dark');
      }

    }
  });
  