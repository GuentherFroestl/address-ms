import {Table, Column, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';
import {Zip} from './zip.model';
import {District} from './district.model';

@Table
export class Street extends BaseEntity{

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