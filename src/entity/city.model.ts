import {
    Table, Column, ForeignKey, BelongsTo, Model, UpdatedAt, PrimaryKey, IsUUID,
    CreatedAt, AllowNull
} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';
import {Country} from './country.model';
import {State} from "./state.model";

@Table
export class City extends Model<City> implements BaseEntity{

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
}