import { Box, Button } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: sessionData } = useSession();
  return (
    <Box width="100%" paddingX={4}>
      <Button onClick={sessionData ? () => signOut() : () => signIn()}>
        {sessionData ? "logout" : "login"}
      </Button>
    </Box>
  );
};

export default Navbar;
