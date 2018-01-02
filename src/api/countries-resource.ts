import {AbstractStore, CountryStore} from "../control";
import {Country, DomainQuery} from "../entity";
import {AbstractResource} from "./abstract-resource";

export class CountriesResource extends AbstractResource<Country>{

    protected getStore(): AbstractStore<Country> {
        return new CountryStore();
    }
}