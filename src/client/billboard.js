/**
 * Created by seaston on 11/7/2016.
 */

function jsonp(url, callback) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    var script = document.createElement('script');
    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
}


jsonp('https://script.google.com/macros/s/AKfycbzbofRKikTP6HLQeP-wvNq9ABlU1k-klPF5cn_6b-yuT_Xsrd4/exec', function(data) {
    var letterDay = document.getElementById('letterDay');
    var announcement = document.getElementById('announcement');

    if (data.letterDay != "") {
        letterDay.innerHTML = "Today is: " + data.letterDay;
    } else {
        letterDay.innerHTML = "Welcome to Copenhagen Central School"
    }

    if(data.announcement != ""){
        announcement.innerHTML = data.announcement;
    }else{
        announcement.innerHTML = ""
    }

});