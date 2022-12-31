import { Box, Button } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data: sessionData } = useSession();
  return (
    <Box
      width="100%"
      paddingX={4}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      paddingY={2}
    >
      <Box>
        <Image
          src="/logo.png"
          width="187"
          height="30"
          alt="Ninja request logo"
        />
      </Box>
      <Box>
        <Button onClick={sessionData ? () => signOut() : () => signIn()}>
          {sessionData ? "logout" : "login"}
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
