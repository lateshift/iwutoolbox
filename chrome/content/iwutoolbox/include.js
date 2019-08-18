if (!Zotero.IWUToolbox) {
  let loader = Components.classes[
    "@mozilla.org/moz/jssubscript-loader;1"
  ].getService(Components.interfaces.mozIJSSubScriptLoader);
  loader.loadSubScript("chrome://iwutoolbox/content/toolbox.js");
}
