import {defineConfig} from "drizzle-kit"

export default defineConfig({
    schema: "./configs/schema.js",
    out: "./drizzle",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://ai-saas_owner:uLwMOvs79WKA@ep-dark-dew-a1fdc5yh.ap-southeast-1.aws.neon.tech/ai-saas?sslmode=require',
    }

})