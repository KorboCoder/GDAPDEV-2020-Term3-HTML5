class WebsocketConnection{
    static getInstance(){
        if(WebsocketConnection._sharedInstance == undefined){
            WebsocketConnection._sharedInstance = new WebsocketConnection();
        }

        return WebsocketConnection._sharedInstance;
    }

    StartConnection(){  
        this.connection = new WebSocket("ws://mysterious-cliffs-16628.herokuapp.com/socket");
        //this.connection = new WebSocket("ws://localhost:3000/socket");
        this.connection.onopen = this.onOpen
        this.connection.onmessage = this.onMessage
        this.connection.onerror = this.onError
        this.connection.onclose = this.onClose
    }

    onOpen(event){
        console.log("Connection is Ready")
    }

    onMessage(event){
        console.log("Received: " + event.data); 
    }

    onError(event){
        console.log("Send Text fired an error");
    }

    onClose(event){
        console.log("WebSocket instance closed.");
    }

    send(data){
        if (this.connection.readyState === WebSocket.OPEN){
            this.connection.send(data);
        }
        else{
            console.log("Websocket is not ready yet")
        }
    }

}