import * as KoaRouter from 'koa-router';
import * as KoaBody from 'koa-body';
import {CountryStore} from "../control/country-store";
import {DomainQuery} from "../entity";

const koaBody = KoaBody();

export const countryRouter = new KoaRouter({
    prefix: '/countries'
});

export function addRange(domainQuery:DomainQuery, query:any):DomainQuery{
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

countryRouter.get('/', async(ctx, next) => {
    let domainQuery:DomainQuery = addRange({},ctx.query);
    ctx.body = await CountryStore.find(domainQuery);
    await next();
});

countryRouter.get('/:id', async(ctx, next) => {
    ctx.body = await CountryStore.getById(ctx.params.id);
    await next();
});

countryRouter.post('/', koaBody,async (ctx,next) =>{
    let reqWithBody: any = ctx.request;
    ctx.body = await CountryStore.create(reqWithBody.body);
    await next();
});