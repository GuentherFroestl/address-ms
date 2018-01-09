import {
    Table, Column, Model, UpdatedAt, PrimaryKey, IsUUID,
    CreatedAt, AllowNull, BelongsToMany, BelongsTo, ForeignKey, HasMany
} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';
import {Location} from './location.model';
import {LocationSubLocation} from "./location-sub-location";


@Table
export class SubLocation extends Model<SubLocation> implements  BaseEntity{

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

    @BelongsToMany(() => Location, () => LocationSubLocation)
    locations: Location[];

    @ForeignKey(() => SubLocation)
    @Column
    subLocationUuid: string;

    @BelongsTo(() => SubLocation)
    subLocation: SubLocation;

    @HasMany(() => SubLocation, 'subLocationUuid')
    subLocations: SubLocation[]


}