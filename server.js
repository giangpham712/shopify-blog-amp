require('isomorphic-fetch');
const dotenv = require('dotenv');
const MongoClient = require('mongodb').MongoClient;
const Koa = require('koa');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;

app.prepare().then(() => {

  // Create indexes
  const client = new MongoClient(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  client.connect((err, db) => {
    if (err) throw err

    db = client.db(process.env.DB_NAME);
    db.collection('Articles').createIndex({ tags: 1 }, (err, result) => {
      //
    })
  });

  const server = new Koa();
  server.use(session(server));
  server.keys = [SHOPIFY_API_SECRET_KEY];

  server.use(
    createShopifyAuth({
      prefix: '/shopify',
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: ['read_products'],
      afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;

        ctx.redirect('/');
      },
    }),
  );

  // Unprotected middleware
  server.use(async (ctx, next) => {
    if (ctx.url.match(/^\/amp/) || ctx.url.match(/^\/api/)) {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
      ctx.res.statusCode = 200;
    } else {
      return next();
    }
  });

  /*
  server.use(verifyRequest( {
    authRoute: '/shopify/auth',
    fallbackRoute: '/shopify/auth',
  }));

   */

  // Protected middleware
  server.use(async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
    return
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });

});
