import {
    Table, Column, ForeignKey, BelongsTo, BelongsToMany, Model, UpdatedAt, PrimaryKey,
    IsUUID, CreatedAt, Length, AllowNull
} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';
import {Country} from './country.model';
import {City} from './city.model';
import {ZipCity} from './zip-city.model';
import {State} from "./state.model";

@Table
export class Zip extends Model<Zip> implements BaseEntity {

    @AllowNull(false)
    @IsUUID(4)
    @PrimaryKey
    @Column
    uuid: string;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;

    @AllowNull(false)
    @Length({min: 2, msg: 'a minimum of 2 characters is required for the zip code'})
    @Column
    name: string;

    @AllowNull(false)
    @ForeignKey(() => Country)
    @Column
    countryUuid: string;

    @BelongsTo(() => Country)
    country: Country;

    @ForeignKey(() => State)
    @Column
    stateUuid: string;

    @BelongsTo(() => State)
    state: State;

    @BelongsToMany(() => City, () => ZipCity)
    cities: City[];

}