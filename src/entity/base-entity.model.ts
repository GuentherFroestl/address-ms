import {Table, Column, Model,IsUUID, PrimaryKey, CreatedAt, UpdatedAt} from 'sequelize-typescript';


export class BaseEntity extends Model<BaseEntity> {

    @IsUUID(4)
    @PrimaryKey
    @Column
    uuid: string;

    @Column
    name: String;

    @CreatedAt
    careatedAt: Date;

    @UpdatedAt
    updatedAt: Date;
}