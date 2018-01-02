import {Street} from '../entity';
import {AbstractStore} from "./abstract-store";



export class StreetsStore extends AbstractStore<Street>{

    protected async findAllInStore(findOpt: any): Promise<Street[]> {
        return Street.findAll(findOpt);
    }

    protected async findByIdInStore(id: string): Promise<Street> {
        return Street.findById(id);
    }

    protected async createInStore(obj: any): Promise<Street> {
        return Street.create(obj);
    }
}