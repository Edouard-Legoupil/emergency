
// Detect IE7 or IE8
     var ua = $.browser;
if ( ua.msie && ua.version.slice(0,1) == "8" ) {
alert('What? You are using "Internet Explorer 8"! this browser is too old and is not well supported. It is really time to change it!!!');
} else if ( ua.msie && ua.version.slice(0,1) == "7" ) {
alert('What? You are using "Internet Explorer 7"! this browser is too old and is not well supported. It is really time to change it!!!');
}
