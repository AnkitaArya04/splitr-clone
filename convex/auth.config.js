export default {
    providers: [
        {
            domain : ProcessingInstruction.env.CLERK_JWT_ISSUER_DOMAIN,
            application: "convex",
        },
    ],
}