import {AbstractResource} from "./abstract-resource";
import {City} from "../entity";
import {AbstractStore, CitiesStore} from "../control";


export class CitiesResource extends AbstractResource<City>{

    protected getStore(): AbstractStore<City> {
        return new CitiesStore();
    }
}