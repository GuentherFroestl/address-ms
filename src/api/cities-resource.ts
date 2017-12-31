import {AbstractResource} from "./abstract-resource";
import {City} from "../entity";
import {CitiesStore} from "../control/cities-store";
import {AbstractStore} from "../control/abstract-store";


export class CitiesResource extends AbstractResource<City>{

    protected getStore(): AbstractStore<City> {
        return new CitiesStore();
    }
}