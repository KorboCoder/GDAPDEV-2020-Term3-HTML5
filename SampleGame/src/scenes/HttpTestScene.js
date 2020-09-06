class HttpTestScene extends cc.Scene{    
    constructor(){
        super();
    }
    onEnter(){
        super.onEnter();
        var request = cc.loader.getXMLHttpRequest();
        request.open("GET", "http://localhost:3000/ping")
        request.setRequestHeader("Content-Type","application/json");
		request.onreadystatechange = function () {
			if (request.readyState == 4) {
				//get status text
                console.log(`Response Status: ${request.status}`)
				console.log(`Response Body: ${request.response}`)
			}
		};
        request.send();
        
    }
}