import * as Koa from 'koa';
import * as Cors from 'koa2-cors';
import * as KoaLogger from 'koa-logger';
import { Server } from 'http';
import {CountriesResource} from './countries-resource';
import {ZipsResource} from './zips-resource';
import {exceptionHandler} from "./exception-handler";
import {CitiesResource} from "./cities-resource";
import {DirectionsResource} from "./directions-resource";
import {DistrictsResource} from "./districts-resource";
import {LocationsResource} from "./locations-resource";
import {StreetsResource} from "./streets-resource";
import {SubLocationsResource} from "./sub-locations-resource";
import {AreaTypesResource} from "./area-types-resource";
import {AdminAreasResource} from "./admin-areas-resource";
import {HealthCheckResource} from "./health-check-resource";



export class AddressService{

    protected restApp: Koa;
    protected service: Server;
    protected healthCheckResource = new HealthCheckResource('/healthcheck');
    protected areaTypesResource = new AreaTypesResource('/area-types');
    protected adminAreasResource = new AdminAreasResource('admin-areas');
    protected countriesResource = new CountriesResource('/countries');
    protected cityResource= new CitiesResource('/cities');
    protected zipsResource = new ZipsResource('/zips');
    protected directionsResource = new DirectionsResource('/directions');
    protected districtsResource = new DistrictsResource('/districts');
    protected locationsResource = new LocationsResource('/locations');
    protected streetsResource = new StreetsResource('/streets');
    protected subLocationsResource = new SubLocationsResource('/sub-locations');

    constructor(protected port = 3000) {

        this.restApp = new Koa();


        const paramLoggingMW = async(ctx,next) =>{
            console.log('parameters:',ctx.params);
            console.log('query', ctx.query);
            await next();
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
            .use(this.healthCheckResource.router.routes())
            .use(this.healthCheckResource.router.allowedMethods())
            .use(this.areaTypesResource.router.routes())
            .use(this.areaTypesResource.router.allowedMethods())
            .use(this.adminAreasResource.router.routes())
            .use(this.adminAreasResource.router.allowedMethods())
            .use(this.cityResource.router.routes())
            .use(this.cityResource.router.allowedMethods())
            .use(this.countriesResource.router.routes())
            .use(this.countriesResource.router.allowedMethods())
            .use(this.directionsResource.router.routes())
            .use(this.directionsResource.router.allowedMethods())
            .use(this.districtsResource.router.routes())
            .use(this.districtsResource.router.allowedMethods())
            .use(this.locationsResource.router.routes())
            .use(this.locationsResource.router.allowedMethods())
            .use(this.streetsResource.router.routes())
            .use(this.streetsResource.router.allowedMethods())
            .use(this.subLocationsResource.router.routes())
            .use(this.subLocationsResource.router.allowedMethods())
            .use(this.zipsResource.router.routes())
            .use(this.zipsResource.router.allowedMethods())
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