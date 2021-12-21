import React, { useState } from "react";

import Head from 'next/head'
import Header from "./Header"
import Footer from "./Footer"
import Form from "./Form"
import Table from "./Table"
import { workinghours } from "../pages/data"

export default function CookieStand() {
    const [reports, setReports] = useState([]);

    function handleSubmit(event) {
        event.preventDefault()


        const cookieStand = {
            id: reports.length,
            location: event.target.Location.value,
            minCustomers: event.target.minCustomers.value,
            maxCustomers: event.target.maxCustomers.value,
            avgCookies: event.target.avgCookies.value,
            hourly_sales: calculateHourlySales(event.target.minCustomers.value, event.target.maxCustomers.value, event.target.avgCookies.value),
        }

        setReports(sales => [...sales, cookieStand])
        event.target.reset()
    }

    function calculateHourlySales(minSales, maxSales, avgCookies) {
        let hourly_sales = []
        for (let i = 0; i < workinghours.length; i++) {
            hourly_sales[i] = (Math.floor(Math.random() * (parseInt(maxSales) - parseInt(minSales) + 1) + parseInt(minSales))) * avgCookies
        }
        return hourly_sales

    }

    

    function Main() {
        return (
            <>
                <div className="flex flex-col items-center justify-center flex-1 w-full text-center bg-green-50">
                    <Form handleSubmit={handleSubmit} />
                    <Table reports={reports} workinghours={workinghours} handleSubmit={handleSubmit}/>
                </div>
            </>
        )
    }
    return (

        <div className="flex flex-col items-center justify-center min-h-screen p-2">
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>

            <main className=" justify-content">

                <Header />

              
                {Main()}
      

            </main>

            <Footer Count={reports.length} />

        </div>


    )
}