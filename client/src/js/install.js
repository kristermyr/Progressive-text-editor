const butInstall = document.getElementById('buttonInstall');
// from 28-Stu_Mini-Project
// Logic for installing the PWA

// xTODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});


// xTODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
   return;
  }
  promptEvent.prompt();

  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});


// xTODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
