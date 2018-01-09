import {
    Table, Column, BelongsTo, ForeignKey, Model, UpdatedAt, PrimaryKey,
    IsUUID, CreatedAt, AllowNull, BelongsToMany, Sequelize
} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';
import {Street} from './street.model';
import {Direction} from './direction.model';
import {SubLocation} from "./sub-location.model";
import {LocationSubLocation} from "./location-sub-location";
import {GeoCoordinate} from "./geo-coordinate.model";

@Table
export class Location extends Model<Location> implements  BaseEntity, GeoCoordinate{

    @AllowNull(false)
    @IsUUID(4)
    @PrimaryKey
    @Column
    uuid: string;

    @AllowNull(false)
    @Column
    name: String;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;
    @Column
    number: string;

    @Column(Sequelize.DECIMAL(4, 13))
    latitude: number;

    @Column(Sequelize.DECIMAL(4, 13))
    longitude: number;

    @AllowNull(false)
    @ForeignKey(() => Street)
    @Column
    streetUuid: string;

    @BelongsTo(() => Street)
    street: Street;

    @ForeignKey(() => Direction)
    @Column
    directionUuid: string;

    @BelongsTo(() => Direction)
    direction: Direction;

    @BelongsToMany(() => SubLocation, () => LocationSubLocation)
    subLocations: SubLocation[]
}