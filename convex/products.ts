import { query } from "./_generated/server";

export const getProducts = query({
    handler: async (ctx) => {
        return ctx.db.query('products').collect();
    }
})

