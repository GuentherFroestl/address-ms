import {Sequelize} from 'sequelize-typescript';
import {addAllModels, syncAllModels} from '../control';

const config = {
    database: 'some_db',
    dialect: 'sqlite',
    username: 'root',
    password: '',
    storage: ':memory:'
};


export async function initDbAsync(){
    console.log('initDbAsync');
    try {
        const sequelize =  new Sequelize(config);
        await sequelize.authenticate();
        console.log('Connection has been established successfully, with config:\n',config);
        addAllModels(sequelize);
        console.log('Creating database schema ......');
        await syncAllModels(sequelize,{force: true});
        console.log('Schema and Entities have been created successful');
    }
    catch(err){
        console.error('Error happend during db init, with config:\n',config,'\n', err);
    }
}
