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
        console.log("POST /users");
        let user = await UserApi.CreateUser({name: 'test'})
        console.log(user)

        console.log("PATCH /users/:id");
        await UserApi.PatchUser(user.id, { last_name: "test_last" })

        console.log("PUT /users/:id");
        user.name = "new_name"
        user = await UserApi.UpdateUser(user.id, user)
        console.log(user)

        console.log("GET /users/:id");
        user = await UserApi.GetUser(user.id);

        console.log("DELETE /users/:id");
        await UserApi.DeleteUser(user.id)
        .then((resp) => {
            console.log(resp);
        })

        
    }
}