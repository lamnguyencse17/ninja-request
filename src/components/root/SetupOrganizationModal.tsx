import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import type { FunctionComponent } from "react";
import { useEffect, useRef } from "react";

type SetupOrganizationModalProps = {
  hasOrganization: boolean;
  isFetched: boolean;
};

const SetupOrganizationModal: FunctionComponent<
  SetupOrganizationModalProps
> = ({ hasOrganization, isFetched }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const cancelRef = useRef(null);

  const closeAndLogout = () => {
    onClose();
    signOut();
  };

  const closeAndSetup = () => {
    onClose();
    router.push("/organization/setup");
  };

  useEffect(() => {
    if (
      !hasOrganization &&
      router.pathname !== "/organization/setup" &&
      isFetched
    ) {
      onOpen();
    }
  }, [hasOrganization, onOpen, router.pathname, isFetched]);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            You need an organization to use our service :&#40;
          </AlertDialogHeader>
          <AlertDialogBody>
            Follow us to our organization setup below. By closing without
            setting up, you will be logged out
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={closeAndLogout}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={closeAndSetup} ml={3}>
              Setup now
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default SetupOrganizationModal;
