import type { MetaFunction } from "@remix-run/node";
import Banner from "~/components/banner";
import Socials from "~/components/socials";

export const meta: MetaFunction = () => {
  return [
    { title: "Sumit Jha" },
    {
      name: "description",
      content:
        "Sumit, an full-stack dev with a knack for building and learning new stuff.",
    },
  ];
};

export default function Index() {
  return (
    <>
      <Banner />
      <Socials />
    </>
  );
}
