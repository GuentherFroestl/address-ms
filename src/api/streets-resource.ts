import {AbstractStore, StreetsStore} from "../control";
import {Street} from "../entity";
import {AbstractStoreResource} from "./abstract-store-resource";

export class StreetsResource extends AbstractStoreResource<Street>{

    protected getStore(): AbstractStore<Street> {
        return new StreetsStore();
    }
}