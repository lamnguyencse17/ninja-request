import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import useFetchUserHook from "../hooks/root/useFetchUserHook";
import SetupOrganizationModal from "../components/root/SetupOrganizationModal";
import Navbar from "../components/shared/Navbar";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const { hasOrganization, isFetched } = useFetchUserHook();

  return (
    <ChakraProvider>
      <SessionProvider session={session}>
        <Box width="100%" height="100%">
          <Navbar />
          <Container>
            <Component {...pageProps} />
          </Container>
        </Box>

        <SetupOrganizationModal
          hasOrganization={hasOrganization}
          isFetched={isFetched}
        />
      </SessionProvider>
    </ChakraProvider>
  );
};

export default trpc.withTRPC(MyApp);
