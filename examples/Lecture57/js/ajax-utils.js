
(function(global){
   // set up a namespace for our utility.

   var ajaxUtils = {};

// Return an http request object.
function getRequestObject() {
    if(window.XMLHttpRequest){
      return (new XMLHttpRequest());
    }
    else if (window.ActiveXObject){
      // For very old IE browsers (optional)
      return (new ActiveXObject('Microsoft.XMLHttp'));
    }
    else{
      global.alert("Ajax is not supported!");
      return(null);
    }
  }

//----------- Makes an Ajax request to 'requestUrl'
  ajaxUtils.sendGetRequest =
    function(requestUrl, responseHandler){
      var request = getRequestObject();
      request.onreadystatechange =
        function(){
          handleResponse(request, responseHandler);
        };

        request.open("GET", requestUrl, true);
        request.send(null); // for POST only
    };
//-------------------------
    // Only calls user provided 'responseHandler'
    // function if response is ready
    // and not an error.
    function  handleResponse(request, responseHandler){
      if((request.readyState == 4) && (request.status == 200)){
        responseHandler(request);
      }
    }

// Expose utility to the global object.
global.$ajaxUtils = ajaxUtils;

})(window);
// (function (global) {

//
//
// // Only calls user provided 'responseHandler'
// // function if response is ready
// // and not an error
// function handleResponse(request,
//                         responseHandler) {
//   if ((request.readyState == 4) &&
//      (request.status == 200)) {
//     responseHandler(request);
//   }
// }
//
//
// // Expose utility to the global object
// global.$ajaxUtils = ajaxUtils;
//
//
// })(window);
