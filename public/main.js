
// Fallback loader for main application
(function() {
  'use strict';
  
  // Check if the main app has loaded
  setTimeout(function() {
    const root = document.getElementById('root');
    if (!root || root.children.length === 0) {
      root.innerHTML = '<div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;"><h1>Application Loading...</h1><p>Please wait while we load the application. If this message persists, please refresh the page.</p><button onclick="window.location.reload()" style="padding: 10px 20px; margin-top: 10px; background: #dc2626; color: white; border: none; border-radius: 5px; cursor: pointer;">Refresh Page</button></div>';
    }
  }, 5000);
})();
