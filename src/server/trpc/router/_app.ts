import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { organizationRouter } from "./organization";
import { userRouter } from "./users";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  user: userRouter,
  organization: organizationRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
