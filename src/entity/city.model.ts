import {Table, Column, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';
import {Country} from './country.model';

@Table
export class City extends BaseEntity{

    @ForeignKey(() => Country)
    @Column
    countryUuid: string;

    @BelongsTo(() => Country)
    country: Country;

}