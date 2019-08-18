Zotero.IWUToolbox = {
  init: function() {
    //
    // Unregister callback when the window closes (important to avoid a memory leak)
    window.addEventListener(
      "unload",
      function(e) {
        Zotero.Notifier.unregisterObserver(notifierID);
      },
      false
    );
  },

  copyToClipboard: function() {
    // see zoteroPane.js - 	this.copySelectedItemsToClipboard = function (asCitations) {
    ZoteroPane.copySelectedItemsToClipboard(true);
  }
};

// Initialize the utility
window.addEventListener(
  "load",
  function(e) {
    Zotero.IWUToolbox.init();
  },
  false
);
