import {AbstractStore} from "./abstract-store";
import {AdminArea} from "../entity";

export class AdminAreasStore extends AbstractStore<AdminArea>{

    protected async findAllInStore(findOpt: any): Promise<AdminArea[]> {
        return AdminArea.findAll(findOpt);
    }

    protected async findByIdInStore(id: string): Promise<AdminArea> {
        return AdminArea.findById(id);
    }

    protected async createInStore(obj: any): Promise<AdminArea> {
        return AdminArea.create(obj);
    }
}