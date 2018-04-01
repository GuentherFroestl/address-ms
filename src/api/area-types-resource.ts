import {AbstractStoreResource} from "./abstract-store-resource";
import {AreaType} from "../entity";
import {AbstractStore} from "../control";
import {AreaTypeStore} from "../control/area-type-store";


export class AreaTypesResource extends AbstractStoreResource<AreaType>{

    protected getStore(): AbstractStore<AreaType> {
        return new AreaTypeStore();
    }
}