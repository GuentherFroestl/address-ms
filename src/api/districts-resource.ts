import {AbstractStore, DistrictsStore} from "../control";
import {District} from "../entity";
import {AbstractStoreResource} from "./abstract-store-resource";

export class DistrictsResource extends AbstractStoreResource<District>{

    protected getStore(): AbstractStore<District> {
        return new DistrictsStore();
    }
}