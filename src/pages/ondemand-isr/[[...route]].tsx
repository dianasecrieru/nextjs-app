import { Nav } from "@/components/nav/nav";

const OndemandIsr1Page = ({ data }: any) => {
    return (
      <div>
        <Nav />
        <h1>{data.date}</h1>
        <p>This is an on demand ISR page and will not rebuild until you invalidate it from https://main.d2ewcijckzgu5l.amplifyapp.com/api/revalidate?page=(page)</p>
      </div>
    );
  };
  
  export async function getStaticProps() {
    const res = await fetch('https://main.d2ewcijckzgu5l.amplifyapp.com/api/getDate');
    const data = await res.json();
  
    return { props: { data }};
  }

  export async function getStaticPaths() {
    return { paths: [], fallback: "blocking" };
  }
  
  export default OndemandIsr1Page;
  
