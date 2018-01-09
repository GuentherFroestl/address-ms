import {AbstractStore, LocationsStore} from "../control";
import {Location} from "../entity";
import {AbstractResource} from "./abstract-resource";

export class LocationsResource extends AbstractResource<Location>{

    protected getStore(): AbstractStore<Location> {
        return new LocationsStore();
    }
}