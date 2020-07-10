
function init(){  

    let is_mobile =  /mobi|android/i.test(navigator.userAgent)
    document.getElementById('log_div').textContent = is_mobile? "Mobile" : "Not Mobile"
    
}
