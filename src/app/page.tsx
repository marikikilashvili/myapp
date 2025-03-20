// import Cards from "./components/Cards/Cards";
// import Cards1 from "./components/Cards1/Cards1";
// import Cards2 from "./components/Cards2/Cards2";
// import Cards3 from "./components/Cards3/Cards3";
// import Hero from "./components/Hero/Hero";
// import styles from "./page.module.css";
// import Wreli from "./components/Wreli/Wreli";
// import productsData from "@/data/cards2.json";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <Hero />
//       <Cards />
//       <Cards1 />
//       <Cards2 />
//       <Cards3 />
//       <Wreli />
//     </div>
//   );
// }
// src/app/page.tsx
import Cards from "./components/Cards/Cards";
import Cards1 from "./components/Cards1/Cards1";
import Cards2 from "./components/Cards2/Cards2";
import Cards3 from "./components/Cards3/Cards3";
import Hero from "./components/Hero/Hero";
import styles from "./page.module.css";
import Wreli from "./components/Wreli/Wreli";
import productsData from "@/data/cards2.json";

const productsData = require("@/data/cards2.json") as Product[];

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Cards />
      <Cards1 />
      <Cards2 products={productsData} />
      <Cards3 />
      <Wreli />
    </div>
  );
}
