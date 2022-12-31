import Head from "next/head";
import { useRouter } from "next/router";
import { isEmpty } from "radash";
import Favicon from "../../components/shared/Favicon";
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
  return (
    <>
      <Head>
        <title>Your organization</title>
        <meta name="description" content="Ninja Request" />
        <Favicon />
      </Head>
    </>
  );
};

export default OrganizationPage;
