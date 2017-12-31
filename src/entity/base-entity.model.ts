import {Table, Column, Model,IsUUID, PrimaryKey, CreatedAt, UpdatedAt} from 'sequelize-typescript';


export interface  BaseEntity {

    uuid: string;
    name: String;
    createdAt: Date;
    updatedAt: Date;
}