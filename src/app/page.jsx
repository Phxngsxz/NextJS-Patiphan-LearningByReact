"use client"

import { useState, useEffect } from 'react'
import Image from "next/image";
import NextLoGo from '../../public/next.svg'

// Components
import Nav from "./components/Nav";

export default function Home() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main className="container mx-auto">
      <Nav />
      <hr className="my-3" />
      <h1>{data.message}</h1>
      <h3>Home Page</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laudantium id natus illum corrupti totam quisquam reprehenderit. Quasi nostrum omnis accusantium ratione. Eius facere voluptatem quia delectus veritatis, quo quas?</p>
      <Image src={NextLoGo} width={300} height={100} alt='nextjs logo'/>
      <Image src="https://www.cisco.com/c/dam/assets/swa/img/1200x627/what-is-routing-1200x627.jpg" width={300} height={100} alt='nextjs pic'/>
    </main>
  );
}
