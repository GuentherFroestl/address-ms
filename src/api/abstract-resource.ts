import {AbstractStore} from "../control";
import {BaseEntity, DomainQuery} from "../entity";
import * as KoaRouter from 'koa-router';
import * as KoaBody from 'koa-body';

const koaBody = KoaBody();

export abstract class AbstractResource<T extends BaseEntity>{

    protected abstract getStore(): AbstractStore<T>;
    public router: KoaRouter;

    protected addRange(domainQuery:DomainQuery, query:any):DomainQuery{
        if (query&&(query.offset || query.limit)){
            let range = {};
            if (query.offset){
                range = Object.assign(range, {offset: query.offset})
            }
            if (query.limit){
                range = Object.assign(range, {limit: query.limit})
            }
            domainQuery = Object.assign({},domainQuery, {range: range})
        }
        return domainQuery;
    }


    constructor(protected path: string) {

        this.router = new KoaRouter({
            prefix: path
        });

        this.router.get('/', async(ctx, next) => {
            let domainQuery:DomainQuery = this.addRange({},ctx.query);
            ctx.body = await this.getStore().find(domainQuery);
            await next();
        });

        this.router.get('/:id', async(ctx, next) => {
            ctx.body = await this.getStore().findById(ctx.params.id);
            await next();
        });

        this.router.post('/', koaBody,async (ctx,next) =>{
            let reqWithBody: any = ctx.request;
            ctx.body = await this.getStore().create(reqWithBody.body);
            await next();
        });
    }
}