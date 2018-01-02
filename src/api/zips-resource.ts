import {AbstractResource} from "./abstract-resource";
import {Zip} from "../entity";
import {AbstractStore, ZipsStore} from "../control";

export class ZipsResource extends AbstractResource<Zip>{

    protected getStore(): AbstractStore<Zip> {
        return new ZipsStore();
    }
}