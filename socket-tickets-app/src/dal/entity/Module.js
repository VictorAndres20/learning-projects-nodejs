class Module{

    constructor(owner, number){
        this.owner = owner;
        this.number = number;
    }    
}

const buildClass = (owner, number) => {
    return new Module(owner, number);
}

module.exports = {buildClass};