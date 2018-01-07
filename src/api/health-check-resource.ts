import * as KoaRouter from "koa-router";
import {healthCheck} from "../control";


export class HealthCheckResource{

    public router: KoaRouter;

    constructor(protected path: string) {

        this.router = new KoaRouter({
            prefix: path
        });

        this.router.get('/',healthCheck);

    }

}