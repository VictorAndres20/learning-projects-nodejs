import DataBase from '../../server/config/DataBase';

export default class UserRepository{

    constructor(){}

    public async findAll(){
        DataBase.buildInstance();
        //await DataBase.connect();
        let results = await DataBase.query('SELECT ?? FROM n_user',[['name', 'age']]);
        //await DataBase.disconnect(),
        console.log(`Users: ${results.length}`);
        return results;
    }
}