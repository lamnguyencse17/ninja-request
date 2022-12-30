import { protectedProcedure } from "../trpc";

export const getUser = protectedProcedure.query(({ ctx }) => {
  const userId = ctx.session.user.id;
  return ctx.prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      organizations: true,
      organizationMembers: {
        include: {
          organization: true,
        },
      },
    },
  });
});
