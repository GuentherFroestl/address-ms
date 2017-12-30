import {Table, Column, Model, ForeignKey} from 'sequelize-typescript';
import {Zip} from './zip.model';
import {City} from './city.model';

@Table
export class ZipCity extends Model<ZipCity>{

    @ForeignKey(() => Zip)
    @Column
    zipUuid: string;

    @ForeignKey(() => City)
    @Column
    cityUuid: string;
}