import {
    Table, Column, BelongsTo, ForeignKey, Model, UpdatedAt, PrimaryKey, IsUUID,
    CreatedAt, AllowNull
} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';
import {City} from './city.model';

@Table
export class District extends Model<District> implements  BaseEntity{

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


    @AllowNull(false)
    @ForeignKey(() => City)
    @Column
    cityUuid: string;

    @BelongsTo(() => City)
    city: City;
}