import { useRouter } from "next/router";
import { isEmpty } from "radash";
import { trpc } from "../../utils/trpc";

const OrganizationPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const organizationQuery = trpc.organization.getOverallOrganization.useQuery(
    {
      organizationId: id,
    },
    {
      enabled: !isEmpty(id),
    }
  );

  console.log(organizationQuery.data);
  return <></>;
};

export default OrganizationPage;
