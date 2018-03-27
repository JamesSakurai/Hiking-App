const myTrails = {
  addTrailToMyTrails(parent, { user_id, trail_id }, ctx, info) {
    return ctx.db.mutation.updateUser(
      {
        data: {
          myTrails: { update: {
              trails: { connect: {
                  id: trail_id
                } }
            }
          }
        },
        where: { id: user_id },
      }, info, )
  },
  async removeTrailFromMyTrails(parent, { user_id, trail_id }, ctx, info) {
    return ctx.db.mutation.updateUser(
      {
        data: {
          myTrails: { update: {
              trails: { disconnect : { id: trail_id}}
            }}
        },
        where: {id: user_id}
      }, info,
    )
  },
  clearMyTrails(parent, { user_id }, ctx, info) {
    return ctx.db.mutation.updateUser(
      {
        where: { id: user_id },
        data: {
          myTrails:{
            create:{}
          }
        }
      }, info,
    )
  },
}

module.exports = { myTrails }
