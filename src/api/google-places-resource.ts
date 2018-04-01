import * as KoaRouter from 'koa-router';
import { googlePlacesAccessMW} from '../control';

export class GooglePlacesResource {

    public router: KoaRouter;

    constructor(protected path: string) {

        this.router = new KoaRouter({
            prefix: path
        });

        this.router.get('/:apiKey', async(ctx, next) => {
            ctx.body = await googlePlacesAccessMW(ctx.params.apiKey, ctx.query.input) ;
            await next();
        });
    }

}