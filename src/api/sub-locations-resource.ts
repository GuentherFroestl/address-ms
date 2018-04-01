import {AbstractStore, SubLocationsStore} from "../control";
import {SubLocation} from "../entity";
import {AbstractStoreResource} from "./abstract-store-resource";

export class SubLocationsResource extends AbstractStoreResource<SubLocation>{

    protected getStore(): AbstractStore<SubLocation> {
        return new SubLocationsStore();
    }
}