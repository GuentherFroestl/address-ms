import {AbstractStoreResource} from "./abstract-store-resource";
import {AdminArea} from "../entity";
import {AbstractStore} from "../control";
import {AdminAreasStore} from "../control/admin-areas-store";


export class AdminAreasResource extends AbstractStoreResource<AdminArea>{

    protected getStore(): AbstractStore<AdminArea> {
        return new AdminAreasStore();
    }
}