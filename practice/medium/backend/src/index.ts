import { Hono } from 'hono';
import { blogRouter } from './routes/blog';
import { userRouter } from './routes/user';

const app = new Hono();


// app.use("/api/v1/blog/*", async(c, next) => {

//   //@ts-ignore
//   const header = c.req.header["Authorization"] || "";
//   const token = header.split(" ")[1];
//    //@ts-ignore
//   const response =await verify(token, c.env.JWT_SECRETE)
  
//   if (response.id) {
//     next();
//   }
//   else {
//     c.status(403);
//     return c.json({"message":"Unauthorized access"});
//   }
// })
app.route("/api/v1/user/", userRouter);
app.route("/api/v1/blog", blogRouter)






export default app
