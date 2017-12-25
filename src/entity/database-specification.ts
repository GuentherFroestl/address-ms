export class DatabaseSpecification{
    host: String;
    port: number;
    user: String;
    password: String;
    database: String;
    pool ? :any;
}