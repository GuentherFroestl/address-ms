import {Table, Column, Model, ForeignKey, AllowNull} from 'sequelize-typescript';
import {Zip} from './zip.model';
import {City} from './city.model';

@Table
export class ZipCity extends Model<ZipCity>{

    @AllowNull(false)
    @ForeignKey(() => Zip)
    @Column
    zipUuid: string;

    @AllowNull(false)
    @ForeignKey(() => City)
    @Column
    cityUuid: string;
}