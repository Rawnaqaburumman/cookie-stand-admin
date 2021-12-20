import Head from 'next/head'
import Form from "../components/Form"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { useState } from 'react'

export default function Home() {

  const [data, setdata] = useState();

  const adddata = (newdata) => {
    setdata(JSON.stringify(newdata));

  }
  return (

    <div className="flex items-center justify-center min-h-screen p-2">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <main className=" justify-content">

        <Header/>

        {/* //////////////////////////////////////////////////////// */}
        <Form onSubmit={adddata} />
        
        <br />

        <div className="flex justify-center p-1 mt-6">
          <p> Report table coming soon ...</p>
        </div>

        <dev className="flex justify-center p-2 mt-6">
          <pre>{data}</pre>
        </dev>

        {/* //////////////////////////////////////////////////////// */}

      </main>

      <Footer/>

    </div>
  )
}