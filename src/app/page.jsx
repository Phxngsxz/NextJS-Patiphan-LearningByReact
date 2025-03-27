import Image from "next/image";

// Components
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Nav />
      <hr className="my-3" />
      <h3>Home Page</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laudantium id natus illum corrupti totam quisquam reprehenderit. Quasi nostrum omnis accusantium ratione. Eius facere voluptatem quia delectus veritatis, quo quas?</p>
    </main>
  );
}
