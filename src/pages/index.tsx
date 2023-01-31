import { Nav } from "@/components/nav/nav";
import { GetServerSideProps } from "next/types";

const SsrPage = ({ data }: any) => {
  return (
    <div>
      <Nav />
      <h1>{data.date}</h1>
      <p>This is an SSR page and will rebuild on every visit</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.SITE_URL}/api/getDate`);
  const data = await res.json();

  return { props: { data } };
};

export default SsrPage;
