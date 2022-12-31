import Head from "next/head";
import SetupForm from "../../components/organization/setup/SetupForm";
import Favicon from "../../components/shared/Favicon";

const OrganizationSetupPage = () => {
  return (
    <>
      <Head>
        <title>Ninja Request</title>
        <meta name="description" content="Ninja Request" />
        <Favicon />
      </Head>
      <main>
        <SetupForm />
      </main>
    </>
  );
};

export default OrganizationSetupPage;
