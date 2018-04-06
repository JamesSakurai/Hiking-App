const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')
const { myTrails } = require('./resolvers/myTrails')
const { auth } = require('./resolvers/auth')

const resolvers = {
  Query: {
    user(parent, { id }, ctx, info) {
      return ctx.db.query.user(
        { where: { id } },
        info
      )
    },
    product(parent, { id }, ctx, info) {
      return ctx.db.query.product(
        { where: { id } },
        info
      )
    },
    trail(parent, { id }, ctx, info) {
      return ctx.db.query.trail(
        { where: { id }},
        info
      )
    },
    cart(parent, { id }, ctx, info){
      return ctx.db.mutation.user(
        { where: { id } },
        info
      )
    },
    myTrails(parent, { id }, ctx, info){
      return ctx.db.mutation.user(
        { where: { id } },
        info
      )
    },
    allProducts(parent, {}, ctx, info) {
      return ctx.db.query.products({}, info)
    },
    allTrails(parent, {}, ctx, info) {
      return ctx.db.query.trails({}, info)
    },
    allUsers(parent, {}, ctx, info) {
      return ctx.db.query.users({}, info)
    },
    async allTrailsInMyTrails(parent, { id }, ctx, info){
      const myTrails = await ctx.db.query.myTrails(
        { where: { id } },
        info
      )
      return myTrails.trails
    }
  },
  Mutation: {
    ...auth,
    ...myTrails,
    updateUser(parent, { id, name, email, pw }, ctx, info) {
      return ctx.db.mutation.updateUser(
        {
          data: { name, email, pw },
          where: { id }
        },
        info,
      )
    },
    createProduct(parent, { name, imgURL, desc, price }, ctx, info) {
      return ctx.db.mutation.createProduct(
        { data: { name, imgURL, desc, price } },
        info,
      )
    },
    updateProduct(parent, { id, name, imgURL, desc, price }, ctx, info) {
      return ctx.db.mutation.updateProduct(
        {
          data: { name, imgURL, desc, price },
          where: { id }
        },
        info,
      )
    },
    deleteProduct(parent, { id }, ctx, info){
      return ctx.db.mutation.deleteProduct(
        {
          where: { id }
        },
        info
      )
    },
    createTrail(parent, { name, mapFrame, imgURL, distance, difficulty }, ctx, info) {
      return ctx.db.mutation.createTrail(
        { data: { name, mapFrame, imgURL, distance, difficulty } },
        info,
      )
    },
    updateTrail(parent, { id, name, mapFrame, imgURL, distance, difficulty }, ctx, info) {
      return ctx.db.mutation.updateTrail(
        {
          data: { name, mapFrame, imgURL, distance, difficulty },
          where: { id }
        },
        info,
      )
    },
    deleteTrail(parent, { id }, ctx, info){
      return ctx.db.mutation.deleteTrail(
        {
          where: { id }
        },
        info
      )
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://us1.prisma.sh/public-crystalvoice-844/simple-store/dev',
      secret: 'mysecret123',
      debug: true,
    }),
  }),
})

server.start(() => console.log('Server is running on http://localhost:4000'))
