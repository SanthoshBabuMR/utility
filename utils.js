(function(){

  'use strict';

  var utils = {};
  
  /* detect if device is mobile */
  utils.isMobile = {
    Android: function(){
      return navigator.userAgent.match(/Android/i)? true: false;
    },
    Blackberry: function() {
      return navigator.userAgent.match(/Blackberry/i)? true: false;
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i)? true: false;
    },
    Windows: function() {
      return navigator.userAgent.match(/IEPhone/i)? true: false;
    },
    any: function(){
      return ( utils.isMobile.Android() ) || ( utils.isMobile.Blackberry () ) || ( utils.isMobile.iOS() ) || ( utils.isMobile.Windows() );
    }
  };

  /* return true if entire element is visible within viewport */
  utils.isElementInViewport = function(element){
   var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= ( window.innerHeight || document.documentElement.clientHeight ) &&
      rect.right <= ( window.innerWidth || document.documentElement.clientWidth )
    );
  };

  /* 
   * remove properties with '_' prefix when stringifying JSON 
   * eg: var model = { _private: 'key63', surveyCompleted: true }
   * var data = JSON.stringify( model, utils.prepareJSON )
   */

  utils.prepareJSON = function( key, val ) {
    if(typeof (key) === 'number') {
      key = key.toString();
    }
    if(key.indexOf('_') === 0) {
      return undefined;
    }
    if(val === 'false') {
      return false;
    } 
    if(val === 'true') {
      return true;
    }
    return val;
  };

  return utils;

}());
