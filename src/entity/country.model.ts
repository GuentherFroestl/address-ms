import {BaseEntity} from './base-entity.model';
import {Table, Column, Unique, Model, UpdatedAt, PrimaryKey, IsUUID, CreatedAt, NotNull} from 'sequelize-typescript';

@Table
export class Country extends Model<Country> implements BaseEntity{

    @IsUUID(4)
    @PrimaryKey
    @Column
    uuid: string;

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