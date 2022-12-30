import type { User, Organization, OrganizationMember } from "@prisma/client";
import create from "zustand";
import { devtools } from "zustand/middleware";

type AggregatedUser = User & {
  organizations: Organization[];
  organizationMembers: (OrganizationMember & {
    organization: Organization;
  })[];
};

type UserStore = {
  user?: AggregatedUser;
  setUser: (user: AggregatedUser) => void;
  resetUser: () => void;
};

const useUserStore = create<UserStore>()(
  devtools(
    (set) => ({
      user: undefined,
      setUser: (user: AggregatedUser) => set({ user }),
      resetUser: () => set({ user: undefined }),
    }),
    { name: "userStore", serialize: true }
  )
);

export default useUserStore;
