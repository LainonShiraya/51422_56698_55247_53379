import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    name: v.string(),
    price: v.float64(),
    url: v.string(),
    sold: v.number(),
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
  }),
  category: defineTable({
    name: v.string(),
    tag: v.string(),
    description: v.string(),
  })
});