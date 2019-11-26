Zotero.IWUToolbox = {
  init: function() {
    // Unregister callback when the window closes (important to avoid a memory leak)
    window.addEventListener(
      'unload',
      function(e) {
        Zotero.Notifier.unregisterObserver(notifierID);
      },
      false,
    );
  },

  copyToClipboard: async function() {
    var p = {
      mode: 'bibliography',
      contentType: 'text',
      // id: 'http://www.zotero.org/styles/american-medical-association',
      id: 'http://www.zotero.org/styles/apa-iwu',
     // locale: 'en-US',
      locale: 'de-DE',
    };

    if (Zotero.Styles.initialized) {
      var handler = function(obj, worked) {};
      var items = Zotero.getActiveZoteroPane().getSelectedItems();

      Zotero.logError('Items: ' + JSON.stringify(items, null, 4));

      var result = [];

      for (var i = 0; i < items.length; i++) {
        var obj = JSON.parse(JSON.stringify(items[i]));
        obj.bib = R.trim(Zotero.QuickCopy.getContentFromItems(
          [items[i]],
          p,
          handler,
          false,
        ).text);
        result.push(obj);
      }
      var data = {data: result};

      var str = JSON.stringify(data, null, 4);

      //Zotero.logError('Result: ' + str);

      Components.classes['@mozilla.org/widget/clipboardhelper;1']
        .getService(Components.interfaces.nsIClipboardHelper)
        .copyString(str);
    } else {
      Zotero.logError('Styles not ready when triggered.');
    }
  },
};

// Initialize the utility
window.addEventListener(
  'load',
  function(e) {
    Zotero.IWUToolbox.init();
  },
  false,
);
