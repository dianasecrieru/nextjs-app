import { Nav } from "@/components/nav/nav";
import { GetServerSideProps } from "next/types";

const MiddlewareWorkingPage = ({ data }: any) => {
  return (
    <div>
      <Nav />
      <h1>{data.date}</h1>
      <p>Middleware is working!!</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.SITE_URL}/api/getDate`);
  const data = await res.json();

  return { props: { data } };
};

export default MiddlewareWorkingPage;
