import { protectedProcedure } from "../trpc";

export const getUser = protectedProcedure.query(({ ctx }) => {
  const userId = ctx.session.user.id;
  const user = ctx.prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      organization: true,
    },
  });
  return user;
});
