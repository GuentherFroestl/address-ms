import {Direction} from '../entity';
import {AbstractStore} from "./abstract-store";



export class DirectionsStore extends AbstractStore<Direction>{

    protected async findAllInStore(findOpt: any): Promise<Direction[]> {
        return Direction.findAll(findOpt);
    }

    protected async findByIdInStore(id: string): Promise<Direction> {
        return Direction.findById(id);
    }

    protected async createInStore(obj: any): Promise<Direction> {
        return Direction.create(obj);
    }
}