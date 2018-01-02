import {District} from '../entity';
import {AbstractStore} from "./abstract-store";



export class DistrictsStore extends AbstractStore<District>{

    protected async findAllInStore(findOpt: any): Promise<District[]> {
        return District.findAll(findOpt);
    }

    protected async findByIdInStore(id: string): Promise<District> {
        return District.findById(id);
    }

    protected async createInStore(obj: any): Promise<District> {
        return District.create(obj);
    }
}