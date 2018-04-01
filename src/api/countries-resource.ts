import {AbstractStore, CountryStore} from "../control";
import {Country, DomainQuery} from "../entity";
import {AbstractStoreResource} from "./abstract-store-resource";

export class CountriesResource extends AbstractStoreResource<Country>{

    protected getStore(): AbstractStore<Country> {
        return new CountryStore();
    }
}