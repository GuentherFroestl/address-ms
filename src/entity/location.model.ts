import {
    Table, Column, Unique, BelongsTo, ForeignKey, HasOne, Model, UpdatedAt, PrimaryKey,
    IsUUID, CreatedAt, AllowNull
} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';
import {Street} from './street.model';
import {Direction} from './direction.model';

@Table
export class Location extends Model<Location> implements  BaseEntity{

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
    @Column
    number: string;

    @AllowNull(false)
    @ForeignKey(() => Street)
    @Column
    streetUuid: string;

    @BelongsTo(() => Street)
    street: Street;

    @ForeignKey(() => Direction)
    @Column
    directionUuid: string;

    @BelongsTo(() => Direction)
    direction: Direction;
}