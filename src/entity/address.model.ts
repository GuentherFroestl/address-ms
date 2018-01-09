import {
    Table, Column, ForeignKey, BelongsTo, Model, UpdatedAt, PrimaryKey, IsUUID,
    CreatedAt, AllowNull
} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';
import {AdminArea} from "./admin-area.model";
import {City} from "./city.model";
import {Zip} from "./zip.model";
import {Country} from "./country.model";
import {District} from "./district.model";
import {Location} from "./location.model";
import {SubLocation} from "./sub-location";

@Table
export class Address extends Model<Address> implements BaseEntity{

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

    @AllowNull(false)
    @Column
    countryName: string;

    @ForeignKey(() => AdminArea)
    @Column
    adminAreaUuid: string;

    @BelongsTo(() => AdminArea)
    adminArea: AdminArea;

    @Column
    adminAreasNames: string;

    @ForeignKey(() => City)
    @Column
    cityUuid: string;

    @BelongsTo(() => City)
    city: City;

    @AllowNull(false)
    @Column
    cityName: string;

    @ForeignKey(() => District)
    @Column
    districtUuid: string;

    @BelongsTo(() => District)
    district: District;

    @Column
    districtName: string;

    @AllowNull(false)
    @ForeignKey(() => Zip)
    @Column
    zipUuid: string;

    @BelongsTo(() => Zip)
    zip: Zip;

    @AllowNull(false)
    @Column
    zipName: string;

    @ForeignKey(() => Location)
    @Column
    locationUuid: string;

    @BelongsTo(() => Location)
    location: Location;

    @AllowNull(false)
    @Column
    locationName: string;

    @ForeignKey(() => SubLocation)
    @Column
    subLocationUuid: string;

    @BelongsTo(() => SubLocation)
    subLocation: SubLocation;

    @Column
    subLocationName: string;
}