import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { isEmpty, sift } from "radash";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SetupOrganizationParamsType } from "../../../server/trpc/schema/organizations";
import { SetupOrganizationSchema } from "../../../server/trpc/schema/organizations";
import { trpc } from "../../../utils/trpc";

const SetupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SetupOrganizationParamsType>({
    resolver: zodResolver(SetupOrganizationSchema),
  });

  const setupOrganization = trpc.organization.setupOrganization.useMutation({
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const errorKeys = Object.keys(
    errors
  ) as (keyof SetupOrganizationParamsType)[];

  const onSubmit = async (data: SetupOrganizationParamsType) => {
    await setupOrganization.mutateAsync({ ...data });
  };

  const isInvalid = !isEmpty(sift(errorKeys.map((key) => errors[key])));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={isInvalid}>
          <FormLabel htmlFor="organizationName">Organization name</FormLabel>
          <Input
            id="organizationName"
            placeholder="Your organization name"
            {...register("name")}
            isInvalid={!!errors["name"]?.message}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>

          <FormLabel htmlFor="description">Description</FormLabel>
          <Input
            id="description"
            placeholder="Your organization description"
            {...register("description")}
            isInvalid={!!errors["description"]?.message}
          />
          <FormErrorMessage>
            {errors.description && errors.description.message}
          </FormErrorMessage>

          <FormLabel htmlFor="url">URL</FormLabel>
          <Input
            id="url"
            placeholder="Your organization URL"
            {...register("url", { required: false })}
            isInvalid={!!errors["url"]?.message}
          />
          <FormErrorMessage>
            {errors.description && errors.description.message}
          </FormErrorMessage>

          <FormLabel htmlFor="url">Logo</FormLabel>
          <Input
            id="logo"
            placeholder="Your organization logo"
            {...register("logo", { required: false })}
            isInvalid={!!errors["logo"]?.message}
          />
          <FormErrorMessage>
            {errors.description && errors.description.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default SetupForm;
