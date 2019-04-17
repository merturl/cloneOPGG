const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    ctx.body = 'Hello Koa';
});

app.use(router.routes());
app.use(router.allowedMethods()); //allow GET, POST, PUT, DELETE...etc

app.listen(4000, () => {
    console.log('heurm server is listening to port 4000');
});
