import {Sequelize} from 'sequelize-typescript';
import {Country} from './country.model';
import {Zip} from './zip.model';
import {Street} from './street.model';
import {City} from './city.model';
import {ZipCity} from './zip-city.model';
import {Direction} from './direction.model';
import {Location} from './location.model';
import {District} from './district.model';
import {SubLocation} from './sub-location';
import {AdminArea} from "./admin-area.model";
import {AreaType} from "./area-type.model";

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
        SubLocation
    ]);
}

export async function syncAllModels(seq: Sequelize,options: any):Promise<void>{
    console.log('sync models to DB');
    await seq.sync(options);
}