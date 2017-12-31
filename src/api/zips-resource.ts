import {AbstractResource} from "./abstract-resource";
import {Zip} from "../entity";
import {ZipsStore} from "../control/zips-store";
import {AbstractStore} from "../control/abstract-store";

export class ZipsResource extends AbstractResource<Zip>{

    protected getStore(): AbstractStore<Zip> {
        return new ZipsStore();
    }
}