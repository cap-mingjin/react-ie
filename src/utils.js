export const getXMLHttpRequest = function () {
  // let request;

  // if (window.XDomainRequest) {
  //     alert("XDomainRequest")
  //     request =  new XDomainRequest();
  //     request.setRequestHeader('Content-Type', 'text/plain')
  //     return request
  // }

  if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  } else {
    try {
      return new ActiveXObject("Msxml2.XMLHTTP.6.0");
    } catch (e) {}

    try {
      return new ActiveXObject("Msxml2.XMLHTTP.3.0");
    } catch (e) {}

    try {
      // IE 6 - Pathway
      // return new ActiveXObject("Microsoft.XMLHTTP");
      return new ActiveXObject("MSXML2.XMLHTTP");
    } catch (e) {}

    //Microsoft.XMLHTTP points to Msxml2.XMLHTTP and is redundant
    //throw new Error("This browser does not support XMLHttpRequest.");

    return null;
  }
};
