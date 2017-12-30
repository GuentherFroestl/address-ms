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

export function addAllModels(seq: Sequelize):void{
    seq.addModels([
        Country,Zip, 
        Street, 
        City,
        District,
        ZipCity, 
        Direction,
        Location,
        SubLocation
    ]);
}

export async function syncAllModels(options: any):Promise<void>{
    await Country.sync(options);
    await Zip.sync(options);
    await Street.sync(options);
    await City.sync((options));
    await District.sync((options));
    await ZipCity.sync(options);
    await Direction.sync(options);
    await Location.sync(options);
    await SubLocation.sync(options);

}