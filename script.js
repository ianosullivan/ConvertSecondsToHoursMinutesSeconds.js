// Example output -> http://take.ms/xPwLk

// Used in exam/script.js and course/script.js to inform user
function secondsToHMS(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour" : " hours") : "";

    var mDisplay = m > 0 ? m + (m == 1 ? " minute" : " minutes") : "";
    //Prepend comma to minute if needed
    mDisplay = (hDisplay != "" && mDisplay != "") ? ", " + mDisplay : "" + mDisplay;  

    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    //Prepend comma to second if needed
    sDisplay = ( (hDisplay + mDisplay != "") && sDisplay != "") ? ", " + sDisplay : "" + sDisplay;  

    return hDisplay + mDisplay + sDisplay; 
}
