import { v } from "convex/values";
import { query } from "./_generated/server";

export const getCategoryInfo = query({
    args: { tag: v.optional(v.string()) },
    handler: async (ctx,args) => {
      const {db} = ctx;
      console.log('this is tag',args.tag);
      try{
      const categoryTable = await db.query('category').filter(q => q.eq(q.field('tag'),args.tag)).first();
      return categoryTable;
      } catch(e){
        console.log('this is e',e);
      }
    }
})

export const getCategories = query({
    handler: async (ctx) => {
      const {db} = ctx;
      const categoryTable = await db.query('category').collect();
      return categoryTable;
    }
})
