import {AbstractStore, SubLocationsStore} from "../control";
import {SubLocation} from "../entity";
import {AbstractResource} from "./abstract-resource";

export class SubLocationsResource extends AbstractResource<SubLocation>{

    protected getStore(): AbstractStore<SubLocation> {
        return new SubLocationsStore();
    }
}