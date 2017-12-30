import {BaseEntity} from './base-entity.model';
import {Table, Column, Unique} from 'sequelize-typescript';

@Table
export class Country extends BaseEntity{

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