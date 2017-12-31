import {AbstractStore} from "./abstract-store";
import {Zip} from "../entity";

export class ZipsStore extends  AbstractStore<Zip>{

    protected async findAllInStore(findOpt: any): Promise<Zip[]> {
        return Zip.findAll(findOpt);
    }

    protected async findByIdInStore(id: string): Promise<Zip> {
        return Zip.findById(id);
    }

    protected async createInStore(obj: any): Promise<Zip> {
        return Zip.create(obj);
    }
}