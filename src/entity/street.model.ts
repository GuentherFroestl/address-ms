import {
    Table, Column, ForeignKey, BelongsTo, Model, UpdatedAt, PrimaryKey, IsUUID,
    CreatedAt, AllowNull
} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';
import {Zip} from './zip.model';
import {District} from './district.model';
import {City} from "./city.model";

@Table
export class Street extends Model<Street> implements BaseEntity{

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
    @ForeignKey(() => Zip)
    @Column
    zipUuid: string;

    @BelongsTo(() => Zip)
    zip: Zip;

    @ForeignKey(() => City)
    @Column
    cityUuid: string;

    @BelongsTo(() => City)
    city: City;

    @ForeignKey(() => District)
    @Column
    districtUuid: string;

    @BelongsTo(() => District)
    district: District;
}