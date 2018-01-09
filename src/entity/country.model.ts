import {BaseEntity} from './base-entity.model';
import {
    Table, Column, Unique, Model, UpdatedAt, PrimaryKey, IsUUID, CreatedAt,
    AllowNull, HasMany
} from 'sequelize-typescript';
import {City} from "./city.model";
import {Zip} from "./zip.model";

@Table
export class Country extends Model<Country> implements BaseEntity{

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

    @Unique
    @Column
    iso2Code: string;

    @Unique
    @Column
    iso3Code: string;

    @Unique
    @Column
    isoNumber: number;

    @HasMany(() => City, 'countryUuid')
    cities: City[]

    @HasMany(() => Zip, 'countryUuid')
    zips: Zip[]



}