
function init(){
    document.getElementById('log_div').textContent = navigator.userAgent;
    try{
        let test = [{name: "Juan", age: 32}, {name: "Jose", age: 23}]
        let resultIdx = test.findIndex(find_juan);
        
        document.getElementById('log_div').textContent = JSON.stringify(test[resultIdx]);
    }
    catch(err){
        // work around goes here
        document.getElementById('log_div').textContent = "Not Supported: " + err;
    }
}

function find_juan(element){
    return element.name == "Juan";
}