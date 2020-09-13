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

}