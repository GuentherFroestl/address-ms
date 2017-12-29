import * as KoaRouter from 'koa-router';
import {zipsRouter} from "./zips-resource";

export const countryRouter = new KoaRouter({
    prefix: '/countries'
});

countryRouter.get('/', async(ctx, next) => {
    ctx.body = [
        {   uuid: '1234-5678',
            name: 'Germany'},
        {   uuid: '1234-8798',
            name: 'Australia'}
        ];
    await next();

});

countryRouter.get('/:id', async(ctx, next) => {
    ctx.body =
        {   uuid: ctx.params.id,
            name: 'Whatever Country'}
    ;
    await next();

});