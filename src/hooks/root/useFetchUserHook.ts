import { isEmpty } from "radash";
import useUserStore from "../../stores/userStore";
import { trpc } from "../../utils/trpc";

const useFetchUserHook = () => {
  const { setUser, user } = useUserStore(({ setUser, user }) => ({
    setUser,
    user,
  }));

  const userQuery = trpc.user.getUser.useQuery(undefined, {
    refetchOnWindowFocus: false,
    onSuccess(data) {
      if (data) {
        setUser(data);
      }
    },
  });

  return {
    user,
    setUser,
    isFetching: userQuery.isFetching,
    isFetched: userQuery.isFetched,
    hasOrganization:
      !isEmpty(user?.organizations) || !isEmpty(user?.organizationMembers),
  };
};

export default useFetchUserHook;
