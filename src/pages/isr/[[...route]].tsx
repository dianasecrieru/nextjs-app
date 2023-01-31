import { Nav } from "@/components/nav/nav";

const IsrPage = ({ data }: any) => {
    return (
      <div>
        <Nav />
        <h1>{data.date}</h1>
        <p>This is an ISR page and will not rebuild for 1 minute </p>
      </div>
    );
  };
  
  export async function getStaticProps() {
    const res = await fetch('https://main.d2ewcijckzgu5l.amplifyapp.com/api/getDate');
    const data = await res.json();
  
    return { props: { data }, revalidate: 60 };
  }
  
  export async function getStaticPaths() {
    return { paths: [], fallback: "blocking" };
  }
  
  export default IsrPage;
  
