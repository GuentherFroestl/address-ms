import {Table, Column, ForeignKey, BelongsTo, BelongsToMany} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';
import {Country} from './country.model';
import {City} from './city.model';
import {ZipCity} from './zip-city.model';

@Table
export class Zip extends BaseEntity {

    @ForeignKey(() => Country)
    @Column
    countryUuid: string;

    @BelongsTo(() => Country)
    country: Country;

    @BelongsToMany(() => City, () => ZipCity)
    cities: City[];

}