import {Sequelize} from 'sequelize-typescript';
import {Country} from '../entity';
import {Zip} from '../entity';
import {Street} from '../entity';
import {City} from '../entity';
import {ZipCity} from '../entity';
import {Direction} from '../entity';
import {Location} from '../entity';
import {District} from '../entity';
import {SubLocation} from '../entity';
import {AdminArea} from "../entity";
import {AreaType} from "../entity";
import {Address} from "../entity";

export function addAllModels(seq: Sequelize):void{
    console.log('add models to Sequelize');
    seq.addModels([
        Country,
        AreaType,
        AdminArea,
        Zip,
        Street, 
        City,
        District,
        ZipCity, 
        Direction,
        Location,
        SubLocation,
        Address
    ]);
}

export async function syncAllModels(seq: Sequelize,options: any):Promise<void>{
    console.log('sync models to DB');
    await seq.sync(options);
}