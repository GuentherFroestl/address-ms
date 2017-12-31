import {
    Table, Column, BelongsTo, ForeignKey, Model, UpdatedAt, PrimaryKey, IsUUID,
    CreatedAt
} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';
import {City} from './city.model';

@Table
export class District extends Model<District> implements  BaseEntity{

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


    @ForeignKey(() => City)
    @Column
    cityUuid: string;

    @BelongsTo(() => City)
    city: City;
}