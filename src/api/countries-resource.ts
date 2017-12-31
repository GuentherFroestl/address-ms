import {CountryStore} from "../control/countries-store";
import {Country, DomainQuery} from "../entity";
import {AbstractResource} from "./abstract-resource";
import {AbstractStore} from "../control/abstract-store";

export class CountriesResource extends AbstractResource<Country>{

    protected getStore(): AbstractStore<Country> {
        return new CountryStore();
    }
}