import {Table, Column, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';
import {Location} from './location.model';

@Table
export class SubLocation extends  BaseEntity{

    @ForeignKey(() => Location)
    @Column
    locationUuid: string;

    @BelongsTo(() => Location)
    location: Location;
}