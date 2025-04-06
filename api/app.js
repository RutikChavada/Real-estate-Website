    import express from "express"
    import cors from "cors"
    import cookieParser from "cookie-parser";
    import PostRoute from "./Routes/post_route.js"
    import AuthRoute from "./Routes/auth_route.js"
    import testRoute from "./Routes/test.js"

    const app = express();

    app.use(cors({origin:process.env.CLIENT_URL, credentials:true}))
    app.use(express.json())
    app.use(cookieParser())

    app.use("/api/posts",PostRoute)
    app.use("/api/auth",AuthRoute)
    app.use("/api/test",testRoute)

    app.listen(8800, () => {
        console.log("Server is Running");
    });