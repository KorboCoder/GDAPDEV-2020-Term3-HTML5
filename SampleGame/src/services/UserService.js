class UserService{
    static getInstance(){
        if(UserService._sharedInstance == undefined){
            UserService._sharedInstance = new UserService();
        }

        return UserService._sharedInstance;
    }

    async createUser(name, last_name){  
        return await UserApi.CreateUser({name: name, last_name: last_name}).then((newUser) => {
            cc.sys.localStorage.setItem('current_user_id', newUser.id)
            this.currentUser = newUser;
            return this.currentUser;
        })
    }

    async loadUser(){
        let userId = undefined
        if(this.currentUser){
            userId = this.currentUser.id
        }
        else{
            userId = cc.sys.localStorage.getItem('current_user_id')
        }
        console.log(userId)
        if(userId == undefined){
            return Promise.reject(new Error("NotExisting"))
        }

        return await UserApi.GetUser(userId).then((loadedUser) => {
            this.currentUser = loadedUser;
            return this.currentUser;
        })
    }


}