import {
    Table, Column, ForeignKey, BelongsTo, Model, UpdatedAt, PrimaryKey, IsUUID,
    CreatedAt
} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';
import {Country} from './country.model';

@Table
export class City extends Model<City> implements BaseEntity{

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

    @ForeignKey(() => Country)
    @Column
    countryUuid: string;

    @BelongsTo(() => Country)
    country: Country;

}