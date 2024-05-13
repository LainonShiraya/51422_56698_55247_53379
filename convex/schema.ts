import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    name: v.string(),
    price: v.float64(),
    url: v.string(),
    sold: v.number(),
  }).index("by_sold", ["sold"]),
  users: defineTable({
    userEmail: v.string(),
    legoPoints: v.number(),
    cart: v.array(v.id('products')),
    tokenIdentifier: v.string(),
    Name: v.string(),
  }),
  weeklyOferts: defineTable({
    title: v.string(),
    description: v.string(),
    image: v.string(),
  })
});