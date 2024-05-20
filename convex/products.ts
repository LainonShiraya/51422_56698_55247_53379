import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getUserCartAndPointsFromDoc } from "./users";

export const getProducts = query({
    handler: async (ctx) => {
      const {db} = ctx;
      const categoryTable = await db.query('category').collect();
      const categoriesOfProduct = new Map(categoryTable.map(category => [category._id.toString(), category]));
      const products = await ctx.db.query('products').collect();
        return products.map( product => ({
          ...product,
          categories: product.categories.map(categoryId => categoriesOfProduct.get(categoryId.toString()))
        }));
    }
})

export const getReccomendedTop4Products = query({
    handler: async (ctx) => {
      const {db} = ctx;
      const categoryTable = await db.query('category').collect();
      const categoriesOfProduct = new Map(categoryTable.map(category => [category._id.toString(), category]));
      const products = await ctx.db.query('products').withIndex('by_sold').order('desc').take(4);
        return products.map( product => ({
          ...product,
          categories: product.categories.map(categoryId => categoriesOfProduct.get(categoryId.toString()))
        }));
    }
})

export const getTop3WeeklySets = query({
    handler: async (ctx) => {
      const {db} = ctx;
      const categoryTable = await db.query('category').collect();
      const weeklyOferts = await ctx.db.query('weeklyOferts').order('desc').take(3);
        return weeklyOferts.map( ofert => ({
          ...ofert,
          category: categoryTable.find( category => category._id === ofert.category),
        }));
      }
})

export const getUserCart = query({
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
          const {cart} = getUserCartAndPointsFromDoc(savedUser);
          const productIds = cart.map(item => item.productId);
          const productsTable = await db.query('products').collect();
            const products = await productsTable.filter(product => productIds.includes(product._id));
            const cartDetails = products.map(product => {
                const cartItem = cart.find(item => item.productId === product._id)!;
                return {
                    id: product._id,
                  name: product.name,
                  price: product.price,
                  url: product.url,
                  count: cartItem.count,
                };
              });
          
              return cartDetails;

        }
    }
  })
  export const increaseProductCountInCart = mutation({
    args: { productIdToIncrease: v.id('products') },
    handler: async (ctx,args) => {
        const {db, auth} = ctx;
        const identity = await auth.getUserIdentity();
        if (!identity) {
            throw new Error('Called saveUser without authentication present')
          }
          const { tokenIdentifier } = identity
          const existingUser = await db
          .query('users')
          .filter((q) => q.eq(q.field('tokenIdentifier'), tokenIdentifier))
          .first()
          if (existingUser === null) {
           throw new Error('User is not registered in Convex')
          } else {
      // Find the product in the cart
      const cartItemIndex = existingUser.cart.findIndex(item => item.productId === args.productIdToIncrease);
      existingUser.cart[cartItemIndex].count++;
      // Update the user's cart in the database
      await db.patch(existingUser._id, { cart: existingUser.cart });
      return {status:200, text:'Increased count'}
          }
        }
  });

  export const decreaseProductCountInCart = mutation({
    args: { productIdToIncrease: v.id('products') },
    handler: async (ctx,args) => {
        const {db, auth} = ctx;
        const identity = await auth.getUserIdentity();
        if (!identity) {
            throw new Error('Called saveUser without authentication present')
          }
          const { tokenIdentifier } = identity
          const existingUser = await db
          .query('users')
          .filter((q) => q.eq(q.field('tokenIdentifier'), tokenIdentifier))
          .first()
          if (existingUser === null) {
           throw new Error('User is not registered in Convex')
          } else {
      // Find the product in the cart
      const cartItemIndex = existingUser.cart.findIndex(item => item.productId === args.productIdToIncrease);
      existingUser.cart[cartItemIndex].count--;
      if( existingUser.cart[cartItemIndex].count === 0)
{
    await db.patch(existingUser._id, { cart: existingUser.cart.filter( product => product.productId !== args.productIdToIncrease) });
    return {status:200, text:'Removed item'}
}
      // Update the user's cart in the database
      await db.patch(existingUser._id, { cart: existingUser.cart });
      return {status:200, text:'Decreased count'}
          }
        }
  });

  export const removeProductInCart = mutation({
    args: { productIdToIncrease: v.id('products') },
    handler: async (ctx,args) => {
        const {db, auth} = ctx;
        const identity = await auth.getUserIdentity();
        if (!identity) {
            throw new Error('Called saveUser without authentication present')
          }
          const { tokenIdentifier } = identity
          const existingUser = await db
          .query('users')
          .filter((q) => q.eq(q.field('tokenIdentifier'), tokenIdentifier))
          .first()
          if (existingUser === null) {
           throw new Error('User is not registered in Convex')
          } else {
      // Find the product in the cart      
    await db.patch(existingUser._id, { cart: existingUser.cart.filter( product => product.productId !== args.productIdToIncrease) });
    return {status:200, text:'Removed item'}

          }
        }
  });

  
export const getUserFavorites = query({
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
        const {favorites} = getUserCartAndPointsFromDoc(savedUser);
        const productIds = favorites.map(item => item.productId);
        const productsTable = await db.query('products').collect();
          const products = await productsTable.filter(product => productIds.includes(product._id));
          const favoritesDetails = products.map(product => {
              return {
                  id: product._id,
                name: product.name,
                price: product.price,
                url: product.url,
              };
            });
        
            return favoritesDetails;

      }
  }
})

export const checkIsFavorite = query({
  args: { productId: v.id('products') },
  handler: async (ctx,args) => {
    const {db, auth} = ctx;
    const identity = await auth.getUserIdentity();
    if (!identity) {
      return false;
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
        const {favorites} = getUserCartAndPointsFromDoc(savedUser);

       const isFavorite = favorites.find(favorite => favorite.productId === args.productId);

        if(isFavorite){
            return true
        } else{
          return false
        }
      }
  }
})

export const AddOrRemoveToFavorites = mutation({
  args: { productId: v.id('products') },
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
        const {favorites} = getUserCartAndPointsFromDoc(savedUser);

       const isFavorite = favorites.find(favorite => favorite.productId === args.productId);

        if(isFavorite){
          await db.patch(existingUser._id, { favorites: existingUser.favorites.filter( product => product.productId !== args.productId) });
          return {status:200, text:'Removed Favorite'}
        } else{
          existingUser.favorites.push({
            productId: args.productId,
            count: 0
          });
          await db.patch(existingUser._id, { favorites: existingUser.favorites });
          return {status:200, text:'Added Favorite'}
        }
      }
  }
})
