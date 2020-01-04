class Ticket{
    constructor(name, number){
        this.name = name;
        this.number = number;
    }
}

const buildClass = (name, number) => {
    return new Ticket(name, number);
}

module.exports = {buildClass};