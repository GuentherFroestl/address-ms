import {AbstractStoreResource} from "./abstract-store-resource";
import {Zip} from "../entity";
import {AbstractStore, ZipsStore} from "../control";

export class ZipsResource extends AbstractStoreResource<Zip>{

    protected getStore(): AbstractStore<Zip> {
        return new ZipsStore();
    }
}