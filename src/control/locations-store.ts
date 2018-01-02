import {Location} from '../entity';
import {AbstractStore} from "./abstract-store";



export class LocationsStore extends AbstractStore<Location>{

    protected async findAllInStore(findOpt: any): Promise<Location[]> {
        return Location.findAll(findOpt);
    }

    protected async findByIdInStore(id: string): Promise<Location> {
        return Location.findById(id);
    }

    protected async createInStore(obj: any): Promise<Location> {
        return Location.create(obj);
    }
}