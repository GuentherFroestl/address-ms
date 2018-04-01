import {AbstractStore, DirectionsStore} from "../control";
import {Direction} from "../entity";
import {AbstractStoreResource} from "./abstract-store-resource";

export class DirectionsResource extends AbstractStoreResource<Direction>{

    protected getStore(): AbstractStore<Direction> {
        return new DirectionsStore();
    }
}