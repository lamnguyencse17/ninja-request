import {
  Divider,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Head from "next/head";
import Favicon from "../components/shared/Favicon";

const PrivacyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy policy</title>
        <meta name="description" content="Ninja Request - Privacy policy" />
        <Favicon />
      </Head>
      <main>
        <Heading>Privacy Policy</Heading>
        <Divider orientation="horizontal" />
        <Text>
          Here at Ninja Request, we believe in our users&apos; right to
          anonymity, safety, and security while online and have implemented an
          industry-leading, transparent privacy policy. We have made every
          effort to clearly define what information is collected from you and
          how such information is used.
        </Text>
        <Heading size="md">Submitters</Heading>
        <UnorderedList>
          <ListItem>Submission content and metadata, e.g. timestamps</ListItem>
          <ListItem>
            Your approximate location (city, state/province and country),
            geolocated from IP address (see below); location data is wiped after
            a submission is published or deleted
          </ListItem>
          <ListItem>reCAPTCHA response - for anti-spam purposes</ListItem>
        </UnorderedList>
        <Text>
          Only published submissions are archived on our servers. Deleted
          submissions are permanently removed from the database.
        </Text>
        <Heading size="md">Page managers</Heading>
        <UnorderedList>
          <ListItem>
            The user ID, name, and email associated with your Facebook account
          </ListItem>
          <ListItem>
            Facebook access tokens - to perform actions on your behalf, e.g.
            publishing a submission
          </ListItem>
          <ListItem>
            The identity of the page manager who published a submission
          </ListItem>
        </UnorderedList>
        <Heading size="md">Page managers</Heading>
        <Text>
          Includes metadata such as your IP address, user agent, referrer, and
          URLs requested.{" "}
          <Text as="b">
            This data exists only transiently to support functions such as
            geolocation and is immediately wiped to protect the anonymity of our
            users.
          </Text>
        </Text>
        <Heading size="md">Third parties</Heading>
        <Text>
          We integrate with third-party services such as CloudFlare, Facebook,
          and Google Analytics. Any data storage or collection performed by
          these services is subject to their respective privacy policies and
          data usage policies.
        </Text>
        <Heading size="md">Cookies</Heading>
        <Text>
          Like most modern websites, Ninja Request uses cookies to support
          critical site functions such as user authentication. No guarantees are
          made about the functionality or usability of the Ninja Request
          platform if cookies are disabled.
        </Text>
        <Heading size="md">Information disclosure</Heading>
        <Text>
          We do not share your data with third parties. If we receive a subpoena
          or judicial authorization for user data, we will first verify its
          validity before complying. If possible, we will notify the affected
          user(s) first and/or object to the disclosure.{" "}
          <Text as="b">
            Since we do not permanently record data such as IP addresses or
            location, we are unable to assist with determining the identity of a
            submitter.
          </Text>
        </Text>
        <Heading size="md">Data Deletion</Heading>
        <Text>
          Users have the right to request that their data, as described above,
          be deleted from the Ninja Request platform. To do so, send us a
          message through one of the communication channels listed on the
          &quot;Help / Contact Us&quot; page. We will then attempt to remove the
          aforementioned data to the maximum technological extent possible.
          Please note that Ninja Request is not responsible for the deletion or
          removal of any user data that may be collected or preserved by
          third-party services or applications.
        </Text>
      </main>
    </>
  );
};

export default PrivacyPage;
