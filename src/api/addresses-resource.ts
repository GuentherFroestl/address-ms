import {AbstractStoreResource} from "./abstract-store-resource";
import {AbstractStore, AddressesStore} from "../control";
import {Address} from "../entity";

export class AddressesResource extends AbstractStoreResource<Address>{

    protected getStore(): AbstractStore<Address> {
        return new AddressesStore();
    }
}