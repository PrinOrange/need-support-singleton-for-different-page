import type { GetStaticProps } from "next";
import { MySingleton } from "../lib/my-module";

type PageProps = {
  value:string
}

export default function PageB(props: PageProps) {
  return <div>PageB</div>;
}

export const getStaticProps: GetStaticProps = () => {
  const mySingleton = MySingleton;
  return { props: { value: mySingleton.value } };
};
