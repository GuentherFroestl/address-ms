import {
    Table, Column, ForeignKey, BelongsTo, Model, UpdatedAt, PrimaryKey, IsUUID,
    CreatedAt
} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';
import {Zip} from './zip.model';
import {District} from './district.model';

@Table
export class Street extends Model<Street> implements BaseEntity{

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

    @ForeignKey(() => Zip)
    @Column
    zipUuid: string;

    @BelongsTo(() => Zip)
    zip: Zip;

    @ForeignKey(() => District)
    @Column
    districtUuid: string;

    @BelongsTo(() => District)
    district: District;
}