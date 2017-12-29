import * as KoaRouter from 'koa-router';

export const zipsRouter = new KoaRouter({
    prefix: '/zips'
});


zipsRouter.get('/', async(ctx, next) => {
    ctx.body = [
        {   uuid: '1234-5678',
            name: '82110'},
        {   uuid: '1234-8798',
            name: '81099'}
        ];
    await next();

});

zipsRouter.get('/:id', async(ctx, next) => {
    ctx.body =
        {   uuid: ctx.params.id,
            name: 'Whatever Zip'}
    ;
    await next();

});