import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    name: v.string(),
    price: v.float64(),
    url: v.string(),
    sold: v.number(),
<<<<<<< HEAD
=======
    legoPoints: v.number(),
>>>>>>> b78ab6fb0a61447a5116f72090ee0ea55fee370c
    categories: v.array(v.id('category'))
  }).index("by_sold", ["sold"]),
  users: defineTable({
    userEmail: v.string(),
    legoPoints: v.number(),
    cart: v.array(v.object({productId: v.id('products'), count: v.number()})),
    favorites: v.array(v.object({productId: v.id('products'), count: v.number()})),
    tokenIdentifier: v.string(),
    Name: v.string(),
  }),
  weeklyOferts: defineTable({
    title: v.string(),
    description: v.string(),
    image: v.string(),
<<<<<<< HEAD
=======
    category: v.id('category'),
>>>>>>> b78ab6fb0a61447a5116f72090ee0ea55fee370c
  }),
  category: defineTable({
    name: v.string(),
    tag: v.string(),
    description: v.string(),
<<<<<<< HEAD
=======
  }),
  orders: defineTable({
    username: v.string(),
    products: v.array(v.object({productId: v.id('products'), count: v.number()})),
    legoPoints: v.number(),
    userEmail: v.string(),
    delivery: v.id('delivery'),
    totalPrice: v.number(),
  }),
  delivery: defineTable({
    type: v.string(),
    price: v.number(),
>>>>>>> b78ab6fb0a61447a5116f72090ee0ea55fee370c
  })
});