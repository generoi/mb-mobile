function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

var cdnUrlBase = 'https://cdn.rawgit.com/generoi/mb-mobile/';
var devUrlBase = 'https://rawgit.com/generoi/mb-mobile/';
var urlBase = devUrlBase;
var useCDN = false;
var url2 = "";

var url = window.location + '';
//url = 'https://rawgit.com/generoi/mb-mobile/94aa1a4b1404aa2b406e784a5cff170deb36c37a/js/cardisplay.js';
if (url.indexOf(cdnUrlBase) == 0) {
  useCDN = true;
  urlBase = cdnUrlBase;
}

var re = /.*generoi\/mb-mobile\/(.*?)\//i;
var found = url.match(re);
var hash = found[1];
var cssUrl = urlBase+hash+'/css/cardisplay.css';

loadjscssfile(cssUrl, "css");

