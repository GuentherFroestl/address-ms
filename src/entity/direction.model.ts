import {Table, Column, Model, UpdatedAt, PrimaryKey, IsUUID, CreatedAt, AllowNull} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';

@Table
export class Direction extends Model<Direction> implements BaseEntity{

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

}