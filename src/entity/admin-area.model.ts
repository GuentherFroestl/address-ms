import {
    Table, Column, ForeignKey, BelongsTo, Model, UpdatedAt, PrimaryKey, IsUUID,
    CreatedAt, AllowNull
} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';
import {Country} from './country.model';
import {AreaType} from "./area-type.model";

@Table
export class AdminArea extends Model<AdminArea> implements BaseEntity{

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
    @ForeignKey(() => AreaType)
    @Column
    areaTypeUuid: string;

    @BelongsTo(() => AreaType)
    areaType: AreaType;

    @AllowNull(false)
    @ForeignKey(() => Country)
    @Column
    countryUuid: string;

    @BelongsTo(() => Country)
    country: Country;

    @AllowNull(false)
    @ForeignKey(() => AdminArea)
    @Column
    adminAreaUuid: string;

    @BelongsTo(() => AdminArea)
    adminArea: AdminArea;

}