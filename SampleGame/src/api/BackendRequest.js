class BackendRequest{
    static _generateRequest(method, url, resolve, reject){
        let request = cc.loader.getXMLHttpRequest();
        request.open(method, url)
        request.setRequestHeader("Content-Type","application/json");
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                //get status text
                if(request.status >= 200 && request.status < 400){
                    resolve({
                        status: request.status,
                        body: JSON.parse(request.response)
                    })
                }
                else{
                    reject({
                        status: request.status,
                        body: request.response
                    })
                }
            }
        };
        return request;
    }

    static Get(url){
        let getPromise = new Promise(function(resolve, reject){
            let request = BackendRequest._generateRequest("GET", url, resolve, reject);
            request.send();
        });
        
        return getPromise;
    }

}