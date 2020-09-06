class BackendRequest {
    static _generateRequest(method, url, resolve, reject){
        let request = cc.loader.getXMLHttpRequest();
        request.open(method, url)
        request.setRequestHeader("Content-Type","application/json");
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                let result = {}
                if(request.status >= 200 && request.status < 400){
                    result.status = request.status
                    if(request.status != 204){
                        result.body = JSON.parse(request.response)
                    }
                    resolve(result)
                }
                else{
                    result.status = request.status
                    result.body = request.response
                    reject(result)
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

    static Post(url, request_body){
        let postPromise = new Promise(function(resolve, reject){
            let request = BackendRequest._generateRequest("POST", url, resolve, reject);
            request.send(JSON.stringify(request_body));
        });
        
        return postPromise;
    } 

    static Patch(url, request_body){
        let patchPromise = new Promise(function(resolve, reject){
            let request = BackendRequest._generateRequest("PATCH", url, resolve, reject);
            request.send(JSON.stringify(request_body));
        });
        
        return patchPromise;
    } 
    static Put(url, request_body){
        let putPromise = new Promise(function(resolve, reject){
            let request = BackendRequest._generateRequest("PUT", url, resolve, reject);
            request.send(JSON.stringify(request_body));
        });
        
        return putPromise;
    } 

    static Delete(url){
        let deletePromise = new Promise(function(resolve, reject){
            let request = BackendRequest._generateRequest("DELETE", url, resolve, reject);
            request.send();
        });
        
        return deletePromise;
    } 
}