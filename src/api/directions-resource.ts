import {AbstractStore, DirectionsStore} from "../control";
import {Direction} from "../entity";
import {AbstractResource} from "./abstract-resource";

export class DirectionsResource extends AbstractResource<Direction>{

    protected getStore(): AbstractStore<Direction> {
        return new DirectionsStore();
    }
}