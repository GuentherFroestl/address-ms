import {AbstractStore} from "./abstract-store";
import {City} from "../entity";

export class CitiesStore extends AbstractStore<City>{

    protected async findAllInStore(findOpt: any): Promise<City[]> {
        return City.findAll(findOpt);
    }

    protected async findByIdInStore(id: string): Promise<City> {
        return City.findById(id);
    }

    protected async createInStore(obj: any): Promise<City> {
        return City.create(obj);
    }
}