import { isEmpty, shake } from "radash";
import {
  QueryOrganizationSchema,
  SetupOrganizationParamsType,
} from "../schema/organizations";
import { SetupOrganizationSchema } from "../schema/organizations";
import { protectedProcedure } from "../trpc";

export const setupOrganization = protectedProcedure
  .input(SetupOrganizationSchema)
  .mutation(async ({ ctx, input }) => {
    const userId = ctx.session.user.id;
    const organization = await ctx.prisma.organization.create({
      data: {
        ...(shake(input, (value) =>
          isEmpty(value)
        ) as SetupOrganizationParamsType),
        owner: {
          connect: {
            id: userId,
          },
        },
      },
    });
    await ctx.prisma.organizationMember.create({
      data: {
        organization: {
          connect: {
            id: organization.id,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return organization;
  });

export const getOverallOrganization = protectedProcedure
  .input(QueryOrganizationSchema)
  .query(({ ctx, input }) => {
    return ctx.prisma.organization.findFirst({
      where: {
        id: input.organizationId,
        organizationMembers: {
          some: {
            userId: ctx.session.user.id,
          },
        },
      },
      include: {
        owner: {
          select: {
            id: true,
            image: true,
            name: true,
          },
        },
      },
    });
  });
