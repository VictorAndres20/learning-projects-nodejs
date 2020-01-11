import mysql from 'mysql';

const connectionParams = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'secret',
    database: 'node_test'
};

export default class DataBase{

    private static _INSTANCE: mysql.Connection;

    private constructor(){}

    public static buildInstance(): void{
        if(this._INSTANCE == null){
            this._INSTANCE = mysql.createConnection(connectionParams);
            console.log('Instance builded.');
        }
    }

    public static getInstance(): mysql.Connection{
        return this._INSTANCE;
    }

    /**
     * Query method to execute query
     * 
     * If you are inserting a row into 
     * a table with an auto increment primary key, you can retrieve the insert id
     * `results.insertId`
     * 
     * You can get the number of affected rows from an insert, update or delete statement
     * `results.affectedRows`
     * 
     * You can get the number of changed rows from an update statement
     * `results.changedRows`
     * 
     * @param queryFormat Query String like 'SELECT ?? FROM ?? WHERE id = ?'
     * @param args Arguments array like [['Column1, column2'],'users', 3]
     */
    public static query(queryFormat: string, args: any): Promise<any>{
        return new Promise((resolve, reject) => {
            this.getInstance().query(queryFormat, args, (err, results, fields) => {
                if (err) reject(err);
                
                resolve(results);
            });
        });
    }

    /**
     * Method to establish connection
     */
    public static connect(): Promise<boolean>{
        return new Promise((resolve, reject) => {
            this.getInstance().connect((err: mysql.MysqlError) => {
                if(err) reject(err);

                resolve(true);
            });
        });
    }

    public static disconnect(): Promise<boolean>{
        return new Promise((resolve, reject) => {
            this.getInstance().end((err: mysql.MysqlError) => {
                if(err) reject(err);

                resolve(true);
            });
        });
    }

    public static destroy(): void{
        this.getInstance().destroy();
    }
}