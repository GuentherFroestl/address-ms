import {AbstractStore, StreetsStore} from "../control";
import {Street} from "../entity";
import {AbstractResource} from "./abstract-resource";

export class StreetsResource extends AbstractResource<Street>{

    protected getStore(): AbstractStore<Street> {
        return new StreetsStore();
    }
}