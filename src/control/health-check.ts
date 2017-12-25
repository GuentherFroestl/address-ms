const myPackageInfo:any = require('pkginfo')(module);

export const healthCheck = async (ctx, next) => {
    ctx.body = 'address-rest-service is alive '+module.exports.name+' version: '+module.exports.version;
    console.log('exports:');
    console.dir(module.exports);
    await next();
};