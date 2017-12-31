import {Table, Column, Model, UpdatedAt, PrimaryKey, IsUUID, CreatedAt} from 'sequelize-typescript';
import {BaseEntity} from './base-entity.model';

@Table
export class Direction extends Model<Direction> implements BaseEntity{

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

}