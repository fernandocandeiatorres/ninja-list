import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          quibusdam voluptatum. Repellendus totam quidem qui, iusto, alias earum
          aut doloribus veritatis, accusantium nemo odit esse deleniti
          voluptatem maiores. Sint, commodi? Adipisci temporibus eveniet
          cupiditate commodi reiciendis placeat tempora impedit? Cupiditate,
          sit. Delectus, labore. Illum sunt facere, ipsa distinctio eligendi
          modi officiis dolorem dolorum natus repudiandae quasi cum nam nemo
          vero?
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
