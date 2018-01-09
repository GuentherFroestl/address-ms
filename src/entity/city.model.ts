import {
    Table, Column, ForeignKey, BelongsTo, Model, UpdatedAt, PrimaryKey, IsUUID,
    CreatedAt, AllowNull, BelongsToMany, HasMany
} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';
import {Country} from './country.model';
import {AdminArea} from "./admin-area.model";
import {ZipCity} from "./zip-city.model";
import {Zip} from "./zip.model";
import {Street} from "./street.model";

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

    @BelongsToMany(() => Zip, () => ZipCity)
    zips: Zip[];

    @ForeignKey(() => AdminArea)
    @Column
    adminAreaUuid: string;

    @BelongsTo(() => AdminArea)
    adminArea: AdminArea;

    @HasMany(()=> Street, 'cityUuid')
    streets: Street[]
}