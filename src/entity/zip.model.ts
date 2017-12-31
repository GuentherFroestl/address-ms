import {
    Table, Column, ForeignKey, BelongsTo, BelongsToMany, Model, UpdatedAt, PrimaryKey,
    IsUUID, CreatedAt
} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';
import {Country} from './country.model';
import {City} from './city.model';
import {ZipCity} from './zip-city.model';

@Table
export class Zip extends Model<Zip> implements BaseEntity {

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

    @BelongsToMany(() => City, () => ZipCity)
    cities: City[];

}