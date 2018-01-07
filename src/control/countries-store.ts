import {Country} from '../entity';
import {AbstractStore} from "./abstract-store";

export class CountryStore extends AbstractStore<Country>{

    protected async findAllInStore(findOpt: any): Promise<Country[]> {
        return Country.findAll(findOpt);
    }

    protected async findByIdInStore(id: string): Promise<Country> {
        return Country.findById(id);
    }

    protected async createInStore(obj: any): Promise<Country> {
        return Country.create(obj);
    }
}