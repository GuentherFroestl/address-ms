import {
    Table, Column, ForeignKey, BelongsTo, Model, UpdatedAt, PrimaryKey, IsUUID,
    CreatedAt
} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';
import {Location} from './location.model';

@Table
export class SubLocation extends Model<SubLocation> implements  BaseEntity{

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


    @ForeignKey(() => Location)
    @Column
    locationUuid: string;

    @BelongsTo(() => Location)
    location: Location;
}