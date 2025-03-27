"use client"

import { useState, useEffect } from 'react'
import Image from "next/image";

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
    </main>
  );
}
