import { Doc } from "./_generated/dataModel";
import { mutation } from "./_generated/server";

export const getConvexUser = mutation({
  handler: async (ctx) => {

    const {db, auth} = ctx;
    const identity = await auth.getUserIdentity();
    if (!identity) {
        throw new Error('Called saveUser without authentication present')
      }
      const { tokenIdentifier, name, email } = identity
      let savedUser;
      const existingUser = await db
      .query('users')
      .filter((q) => q.eq(q.field('tokenIdentifier'), tokenIdentifier))
      .first()
      if (existingUser === null) {
        const newUserId = await db.insert("users", { Name: name ?? 'Unknown', userEmail: email ?? 'Unknown', legoPoints: 0, cart : [], tokenIdentifier : tokenIdentifier});
        savedUser = await db.get(newUserId)
      } else {
        savedUser = await db.get(existingUser._id);
      }
      if (!savedUser) {
        // Should never happen, but just in case/to appease TS
        throw new Error('Unexpected error saving user')
      } else {
        return getUserCartAndPointsFromDoc(savedUser)
      }
  }
})

function getUserCartAndPointsFromDoc(authorDoc: Doc<'users'>) {
    return {
      cart: authorDoc.cart,
      legoPoints:authorDoc.legoPoints,
    }
  }