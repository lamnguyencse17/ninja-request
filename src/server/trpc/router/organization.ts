import { router } from "../trpc";
import * as organizationHandlers from "../handlers/organizations";

export const organizationRouter = router({
  ...organizationHandlers,
});
