import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getDeliveries = query({
    handler: async (ctx) => {
      const {db} = ctx;
      return await db.query('delivery').collect();
    }
})

export const getOrder = query({
  handler: async (ctx) => {
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
          return await db.query('orders').filter((q) => q.eq(q.field('userEmail'), existingUser.userEmail)).first();

      }
  }
})


export const getOrders = query({
  handler: async (ctx) => {
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
          const orderDetails = await db.query('orders').filter((q) => q.eq(q.field('userEmail'), existingUser.userEmail)).collect();
          const productsDetails = await db.query('products').collect();
       return orderDetails.map(order => {
          const productsInOrder = order.products.map( orderProduct => {
            const productDetail = productsDetails.find(product => product._id === orderProduct.productId);

            // If the product detail exists, add the count parameter
            if (productDetail) {
              return {
                id: productDetail._id,
                name: productDetail.name,
                price: productDetail.price,
                url: productDetail.url,
                count: orderProduct.count,
                status : order.status
              };
            } else {
              // Handle the case where the product detail is not found
              return null; // or handle it according to your requirement
            }
          }).filter(product => product !== null);
            //productsDetails.filter( product => product._id === orderProduct.productId)
          return {...order, products: productsInOrder.flat(1)}
        })
      }
  }
})




export const SumarizeOrder = mutation({
  args: { deliveryId: v.id('delivery') },
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
    const userCart = existingUser.cart;
    const productIds = userCart.map(item => item.productId);
    const productsTable = await db.query('products').collect();
      const products = await productsTable.filter(product => productIds.includes(product._id));
      // const summarizeLegoPoints = products.reduce((sum,product) => sum + product.price * product.)
      const cartDetails = products.map(product => {
        const cartItem = userCart.find(item => item.productId === product._id)!;
        return {
           totalPrice: product.price * cartItem.count,
           legoPoints: product.legoPoints * cartItem.count
        };
      });

      const legoPointsSummed = cartDetails.reduce( (sum,product) => sum + product.legoPoints,0);
      const PriceSummed  = cartDetails.reduce( (sum,product) => sum + product.totalPrice,0);

    await db.insert('orders', {
      username: existingUser.Name,
      userEmail: existingUser.userEmail,
      products: userCart,
      legoPoints: legoPointsSummed,
      delivery: args.deliveryId,
      totalPrice: PriceSummed,
      status: 'Paid'
    })
    
    await db.patch(existingUser._id, { cart: [], legoPoints: legoPointsSummed });
    return {status:200, text:'Finished Order'}
        }
      }
});

