import { Nav } from "@/components/nav/nav";
import { GetServerSideProps } from "next/types";

const MiddlewarePage = ({ data }: any) => {
  return (
    <div>
      <Nav />
      <p>Middleware is not working</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://main.d2ewcijckzgu5l.amplifyapp.com/api/getDate');
  const data = await res.json();

  return { props: { data } };
};

export default MiddlewarePage;
