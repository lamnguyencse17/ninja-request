import { router } from "../trpc";
import { getUser } from "../handlers/users";

export const userRouter = router({
  getUser,
});
