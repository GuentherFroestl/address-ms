import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as Cors from 'koa2-cors';
import * as KoaLogger from 'koa-logger';
import { Server } from 'http';
import {healthCheck} from '../control/health-check';
import {countryRouter} from './countries-resource';
import {zipsRouter} from './zips-resource';
import {exceptionHandler} from "./exception-handler";

const mainRouter = new Router();


export class AddressService{

    restApp: Koa;
    service: Server;

    constructor(private port = 3000) {

        this.restApp = new Koa();

        mainRouter.get('/healthcheck', healthCheck);

        const paramLoggingMW = async(ctx,ntx) =>{
            console.log('parameters:',ctx.params);
            console.log('query', ctx.query);
        };

        this.restApp
            .use(KoaLogger())
            .use(exceptionHandler)
            .use(Cors({
                exposeHeaders: [
                    'Accept',
                    'Accept-Encoding',
                    'authorization',
                    'content-type',
                    'Accept-Language',
                    'Cache-Control',
                    'e-tag',
                    'Set-Cookie',
                    'Content-Length',
                    'Location'
                ]
            }))
            .use(mainRouter.routes())
            .use(mainRouter.allowedMethods())
            .use(countryRouter.routes())
            .use(countryRouter.allowedMethods())
            .use(zipsRouter.routes())
            .use(zipsRouter.allowedMethods())
            .use(paramLoggingMW)
        ;
    }

    listen = () => {
        this.service = this.restApp.listen(this.port, () => {
            console.info(`Address REST Service started on http://localhost:${this.port}`);
        });
    };
    close = () => {
        if (this.service) {
            this.service.close();
        }
    };

}