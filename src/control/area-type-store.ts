import {AbstractStore} from "./abstract-store";
import {AreaType} from "../entity";

export class AreaTypeStore extends AbstractStore<AreaType>{

    protected async findAllInStore(findOpt: any): Promise<AreaType[]> {
        return AreaType.findAll(findOpt);
    }

    protected async findByIdInStore(id: string): Promise<AreaType> {
        return AreaType.findById(id);
    }

    protected async createInStore(obj: any): Promise<AreaType> {
        return AreaType.create(obj);
    }
}