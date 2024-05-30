import { v } from "convex/values";
import { Doc } from "./_generated/dataModel";
import { mutation, query } from "./_generated/server";


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
        const newUserId = await db.insert("users", {
          Name: name ?? 'Unknown', userEmail: email ?? 'Unknown', legoPoints: 0, cart: [], tokenIdentifier: tokenIdentifier,
          favorites: []
        });
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

  export const getUserConvexInfo = query({
    handler: async (ctx) => {
      const {db, auth} = ctx;
      const identity = await auth.getUserIdentity();
      if (!identity) {
          throw new Error('Called saveUser without authentication present')
        }
        const { tokenIdentifier } = identity
        let savedUser;
        const existingUser = await db
        .query('users')
        .filter((q) => q.eq(q.field('tokenIdentifier'), tokenIdentifier))
        .first()
        if (existingUser === null) {
         throw new Error('User is not registered in Convex')
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

  export const addProductToUserCart = mutation({
    args: { newProductId: v.id('products') },
    handler: async (ctx,args) => {
      const {db, auth} = ctx;
      const identity = await auth.getUserIdentity();
      if (!identity) {
          throw new Error('Called saveUser without authentication present')
        }
        const { tokenIdentifier } = identity
        let savedUser;
        const existingUser = await db
        .query('users')
        .filter((q) => q.eq(q.field('tokenIdentifier'), tokenIdentifier))
        .first()
        if (existingUser === null) {
         throw new Error('User is not registered in Convex')
        } else {
          savedUser = await db.get(existingUser._id);
        }
        if (!savedUser) {
          // Should never happen, but just in case/to appease TS
          throw new Error('Unexpected error saving user')
        } else {
          const userData = getUserCartAndPointsFromDoc(savedUser);
          const productAlreadyExists = userData.cart.find( product => product.productId === args.newProductId);
          if(productAlreadyExists) {
            Object.assign(productAlreadyExists,{...productAlreadyExists, count : productAlreadyExists.count+1 })
            console.log(productAlreadyExists);
            await db.patch(existingUser._id, {cart : [...userData.cart]})
            return 'incremented product'
          }
          await db.patch(existingUser._id, {cart : [...userData.cart, {productId: args.newProductId, count: 1}]})
        }
    }
  })








  /// Helper functions

  export function getUserCartAndPointsFromDoc(authorDoc: Doc<'users'>) {
    return {
      cart: authorDoc.cart,
      legoPoints:authorDoc.legoPoints,
      favorites: authorDoc.favorites,
      id: authorDoc._id
    }
  }
