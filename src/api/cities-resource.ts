import {AbstractStoreResource} from "./abstract-store-resource";
import {City} from "../entity";
import {AbstractStore, CitiesStore} from "../control";


export class CitiesResource extends AbstractStoreResource<City>{

    protected getStore(): AbstractStore<City> {
        return new CitiesStore();
    }
}