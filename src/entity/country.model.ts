import {BaseEntity} from './base-entity.model';
import {
    Table, Column, Unique, Model, UpdatedAt, PrimaryKey, IsUUID, CreatedAt,
    AllowNull
} from 'sequelize-typescript';

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



}