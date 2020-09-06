class HttpTestScene extends cc.Scene{    
    constructor(){
        super();
    }
    onEnter(){
        super.onEnter();
 
        BackendRequest.Get("http://localhost:3000/ping").then((resp) => {
            console.log(resp)
        }).catch((err) => {
            console.log(err)
        })
        
    }
}