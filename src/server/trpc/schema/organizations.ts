import { z } from "zod";

export const QueryOrganizationSchema = z.object({
  organizationId: z.preprocess(
    (arg) => (arg === "" ? undefined : arg),
    z.string().cuid()
  ),
});

export type QueryOrganizationParamsType = z.infer<
  typeof QueryOrganizationSchema
>;

export const SetupOrganizationSchema = z.object({
  name: z.string().min(2).max(255),
  description: z.preprocess(
    (arg) => (arg === "" ? undefined : arg),
    z.string().max(255).optional()
  ),
  url: z.preprocess(
    (arg) => (arg === "" ? undefined : arg),
    z.string().url().optional()
  ),
  logo: z.preprocess(
    (arg) => (arg === "" ? undefined : arg),
    z.string().url().optional()
  ),
});

export type SetupOrganizationParamsType = z.infer<
  typeof SetupOrganizationSchema
>;
