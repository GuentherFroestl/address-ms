import {AbstractStore} from "./abstract-store";
import {Address} from "../entity";

export class AddressesStore extends AbstractStore<Address>{

    protected async findAllInStore(findOpt: any): Promise<Address[]> {
        return Address.findAll(findOpt);
    }

    protected async findByIdInStore(id: string): Promise<Address> {
        return Address.findById(id);
    }

    protected async createInStore(obj: any): Promise<Address> {
        return Address.create(obj);
    }
}