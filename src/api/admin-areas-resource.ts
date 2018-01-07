import {AbstractResource} from "./abstract-resource";
import {AdminArea} from "../entity";
import {AbstractStore} from "../control";
import {AdminAreasStore} from "../control/admin-areas-store";


export class AdminAreasResource extends AbstractResource<AdminArea>{

    protected getStore(): AbstractStore<AdminArea> {
        return new AdminAreasStore();
    }
}