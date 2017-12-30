import {Table, Column, Unique, BelongsTo, ForeignKey, HasOne} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';
import {Street} from './street.model';
import {Direction} from './direction.model';

@Table
export class Location extends BaseEntity{

    @Column
    number: string;

    @ForeignKey(() => Street)
    @Column
    cityUuid: string;

    @BelongsTo(() => Street)
    street: Street;

    @ForeignKey(() => Direction)
    @Column
    directionUuid: string;

    @BelongsTo(() => Direction)
    direction: Direction;
}