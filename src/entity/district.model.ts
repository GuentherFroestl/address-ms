import {Table, Column, BelongsTo, ForeignKey} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';
import {City} from './city.model';

@Table
export class District extends  BaseEntity{

    @ForeignKey(() => City)
    @Column
    cityUuid: string;

    @BelongsTo(() => City)
    city: City;
}