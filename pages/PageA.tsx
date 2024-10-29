import type { GetStaticProps } from "next";
import { MySingleton } from "../lib/my-module";

type PageProps = {
  value:string
}

export default function PageA(props: PageProps) {
  return <div>PageA</div>;
}

export const getStaticProps: GetStaticProps = () => {
  const mySingleton = MySingleton;
  return { props: { value: mySingleton.value } };
};
