import {AbstractStore, DistrictsStore} from "../control";
import {District} from "../entity";
import {AbstractResource} from "./abstract-resource";

export class DistrictsResource extends AbstractResource<District>{

    protected getStore(): AbstractStore<District> {
        return new DistrictsStore();
    }
}