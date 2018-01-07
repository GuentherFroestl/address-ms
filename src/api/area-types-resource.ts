import {AbstractResource} from "./abstract-resource";
import {AreaType} from "../entity";
import {AbstractStore} from "../control";
import {AreaTypeStore} from "../control/area-type-store";


export class AreaTypesResource extends AbstractResource<AreaType>{

    protected getStore(): AbstractStore<AreaType> {
        return new AreaTypeStore();
    }
}