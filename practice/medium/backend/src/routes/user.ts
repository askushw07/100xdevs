import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRETE: string;
  };
}>();

userRouter.post("signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const existingUser = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (existingUser) return c.json({ message: "User already exists" });

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });

  return c.json({ message: "user created successfully. Kindly login!" });
});

userRouter.post("signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    },
  });

  if (!user) return c.json({ message: "Invalid Credentials" });

  const token = await sign({ id: user.id }, c.env.JWT_SECRETE);
  return c.json({
    token,
  });
});
