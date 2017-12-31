/**
 * exception handler for building a response.
 * Created by gfr on 06.01.17.
 */
export const exceptionHandler = async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    console.error(`Exception occurred: ${e}`);
    const resError = {
      code: e.status || 500,
      message: e.message,
      errors: e.errors
    };
    if (e instanceof Error) {
      Object.assign(resError, { stack: e.stack });
    }
    Object.assign(ctx, { body: resError, status: e.status || 500 });
  }
};