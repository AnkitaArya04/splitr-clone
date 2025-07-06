// convex/contacts.js
import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

export const getAllContacts=query({
    handler:async (ctx)=>{
         const currentUser = await ctx.runQuery(internal.users.getCurrentUser);
    }
})