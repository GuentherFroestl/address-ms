import {SubLocation} from '../entity';
import {AbstractStore} from "./abstract-store";



export class SubLocationsStore extends AbstractStore<SubLocation>{

    protected async findAllInStore(findOpt: any): Promise<SubLocation[]> {
        return SubLocation.findAll(findOpt);
    }

    protected async findByIdInStore(id: string): Promise<SubLocation> {
        return SubLocation.findById(id);
    }

    protected async createInStore(obj: any): Promise<SubLocation> {
        return SubLocation.create(obj);
    }
}