import {
    Table, Column, ForeignKey, BelongsTo, Model, UpdatedAt, PrimaryKey, IsUUID,
    CreatedAt, AllowNull
} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';
import {Location} from './location.model';

@Table
export class SubLocation extends Model<SubLocation> implements  BaseEntity{

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
    @ForeignKey(() => Location)
    @Column
    locationUuid: string;

    @BelongsTo(() => Location)
    location: Location;
}