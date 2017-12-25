import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as Cors from 'koa2-cors';
import { Server } from 'http';
//import {DatabaseSpecification} from "../entity/database-specification";
import {healthCheck} from "../control/health-check";

const mainRouter = new Router();


export class AddressService{

    restApp: Koa;
    service: Server;

    constructor(private port = 3000) {

        this.restApp = new Koa();

        mainRouter.get('/healthcheck', healthCheck);

        this.restApp
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
            .use(mainRouter.allowedMethods());

    }

    listen = () => {
        this.service = this.restApp.listen(this.port, () => {
            console.info(`REST Service started on http://localhost:${this.port}`);
        });
    };
    close = () => {
        if (this.service) {
            this.service.close();
        }
    };

}