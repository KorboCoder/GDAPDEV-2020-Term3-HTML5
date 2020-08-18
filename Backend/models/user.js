class User{
    constructor({name = '', last_name = '', id = ''}){
        this.name = name;
        this.last_name = last_name;
        this.id = id;
    }
}

module.exports = User;