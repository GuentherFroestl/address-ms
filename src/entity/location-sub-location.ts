import {Table, Column, Model, ForeignKey, AllowNull} from 'sequelize-typescript';
import {Location} from "./location.model";
import {SubLocation} from "./sub-location.model";

@Table
export class LocationSubLocation extends Model<LocationSubLocation>{

    @AllowNull(false)
    @ForeignKey(() => Location)
    @Column
    locationUuid: string;

    @AllowNull(false)
    @ForeignKey(() => SubLocation)
    @Column
    subLocationUuid: string;
}