import {AbstractStore, LocationsStore} from "../control";
import {Location} from "../entity";
import {AbstractStoreResource} from "./abstract-store-resource";

export class LocationsResource extends AbstractStoreResource<Location>{

    protected getStore(): AbstractStore<Location> {
        return new LocationsStore();
    }
}