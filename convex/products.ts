import { query } from "./_generated/server";

export const getProducts = query({
    handler: async (ctx) => {
        return ctx.db.query('products').collect();
    }
})

export const getReccomendedTop4Products = query({
    handler: async (ctx) => {
        return ctx.db.query('products').withIndex('by_sold').order('desc').take(4);
    }
})

export const getTop3WeeklySets = query({
    handler: async (ctx) => {
        return ctx.db.query('weeklyOferts').order('desc').take(3);
    }
})
