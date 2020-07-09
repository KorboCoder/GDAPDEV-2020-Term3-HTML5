
function init(){  

    let is_windows =  /windows/i.test(navigator.userAgent)
    document.getElementById('log_div').textContent = is_windows? "You're on windows" : "Not on Windows"
    
}
