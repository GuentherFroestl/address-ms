import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as Cors from 'koa2-cors';
import * as KoaLogger from 'koa-logger';
import { Server } from 'http';
import {healthCheck} from '../control/health-check';
import {CountriesResource} from './countries-resource';
import {ZipsResource} from './zips-resource';
import {exceptionHandler} from "./exception-handler";
import {CitiesResource} from "./cities-resource";

const mainRouter = new Router();


export class AddressService{

    restApp: Koa;
    service: Server;
    countriesResource = new CountriesResource('/countries');
    cityResource= new CitiesResource('/cities');
    zipsResource = new ZipsResource('/zips');

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
            .use(this.countriesResource.router.routes())
            .use(this.countriesResource.router.allowedMethods())
            .use(this.zipsResource.router.routes())
            .use(this.zipsResource.router.allowedMethods())
            .use(this.cityResource.router.routes())
            .use(this.cityResource.router.allowedMethods())
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