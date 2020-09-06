class HttpTestScene extends cc.Scene{    
    constructor(){
        super();
    }
    onEnter(){
        super.onEnter();
      /*  BackendRequest.Get(`http://localhost:3000/ping`).then((resp) => {
            console.log(resp)
        }).catch((err) => {
            console.log(err)
        })*/
        this.userCalls();
    }

    async userCalls(){
        let base_url = "http://localhost:3000"
        let new_user = { user: {name: 'test'} }
        console.log("POST /users");
        let user = await BackendRequest.Post(`${base_url}/users`, new_user)
        .then((resp) => {
            console.log(resp);
            return resp.body.user;
        }) 
        // More down here...


        console.log("PATCH /users/:id");
        await BackendRequest.Patch(`${base_url}/users/${user.id}`,  { user: { last_name: "test_last" } })
        .then((resp) => {
            console.log(resp);
        })


        console.log("PUT /users/:id");
        user.name = "new_name"
        user = await BackendRequest.Put(`${base_url}/users/${user.id}`, { user: user })
        .then((resp) => {
            console.log(resp);
            return resp.body.user;
        })

        console.log("GET /users/:id");
        user = await BackendRequest.Get(`${base_url}/users/${user.id}`)
        .then((resp) => {
            console.log(resp);
            return resp.body.user;
        })

        console.log("DELETE /users/:id");
        await BackendRequest.Delete(`${base_url}/users/${user.id}`)
        .then((resp) => {
            console.log(resp);
        })

        
    }
}