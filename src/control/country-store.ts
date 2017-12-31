import {Country, DomainQuery} from '../entity';
import * as Uuid from 'uuid/v4';


export class CountryStore{

    public static async find(query:DomainQuery): Promise<Country[]>{
        let findOpts: any = {};
        if (query.range){
            findOpts = Object.assign(findOpts, query.range);
        }
        console.log('findOpts: ',findOpts);
        return Country.findAll(findOpts);
    }

    public static async getById(id: string): Promise<Country>{
        return Country.findById(id);
    }

    public static async create(object: any): Promise<Country>{
        let uuid = Uuid();
        let country=Object.assign({}, object, {uuid: uuid});
        console.log('save country: ',country);
        return Country.create(country);
    }
}