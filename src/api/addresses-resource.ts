import {AbstractResource} from "./abstract-resource";
import {AbstractStore, AddressesStore} from "../control";
import {Address} from "../entity";

export class AddressesResource extends AbstractResource<Address>{

    protected getStore(): AbstractStore<Address> {
        return new AddressesStore();
    }
}