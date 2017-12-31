import {BaseEntity, DomainQuery} from "../entity";
import * as Uuid from 'uuid/v4';


export abstract class AbstractStore<T extends BaseEntity>{

    protected async abstract findAllInStore(findOpt:any): Promise<T[]>;
    protected async abstract findByIdInStore(id: string): Promise<T>;
    protected async abstract createInStore(obj: any): Promise<T>;

    public async find(query:DomainQuery): Promise<T[]>{
        let findOpts: any = {};
        if (query.range){
            findOpts = Object.assign(findOpts, query.range);
        }
        console.log('findOpts: ',findOpts);
        return this.findAllInStore(findOpts);
    }

    public async findById(id: string): Promise<T>{
        console.log('findById: ',id);
        return this.findByIdInStore(id);
    }

    public async create(object: any): Promise<T>{
        let uuid = Uuid();
        let objToSave=Object.assign({}, object, {uuid: uuid});
        console.log('save object: ',objToSave);
        return this.createInStore(objToSave);
    }
}