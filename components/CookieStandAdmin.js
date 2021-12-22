import React, { useState } from "react";

import Head from 'next/head'
import Header from "./Header"
import Footer from "./Footer"
import Form from "./Form"
import Table from "./Table"
import {hours } from "../pages/data"
import axios from 'axios';
import { useEffect } from "react";
const baseurl ='https://cookie-stand-api-rawnaq.herokuapp.com/';

const responsesEndPoint = baseurl+'api/v1/cookie_stands/';
export default function CookieStand(props) {



    const [reports, setReports] = useState([]);

   useEffect(() => {
        if (props.token) {
            getRepliesFromAPI();
        }
    }, [props.token]);



    const getRepliesFromAPI = async () => {
        console.log("hiii");

        const config = { headers: { 'Authorization': 'Bearer ' + props.token } };
        const answers = await axios.get(responsesEndPoint, config);
        console.log("hiiiia", answers.data);

     
            // const storeData = {
            //     location: item.location,
            //     average_cookies_per_sale: item.average_cookies_per_sale,
            //     minimum_customers_per_hour: item.minimum_customers_per_hour,
            //     maximum_customers_per_hour: item.maximum_customers_per_hour,
            //     hourly_sales: item.hourly_sales,

            // }
           
            setReports([...answers.data]);

          
       

    }



   


    const deleteHandler =async (id) => {
        const config = {
            method: "DELETE",
            url: `https://cookie-stand-api-rawnaq.herokuapp.com/api/v1/cookie_stands/${id}`,
            headers: { "Authorization": `Bearer ${props.token}` }
        }
        let result=reports.filter(del => del.id != id )
        console.log(result)
        await axios(config)
        setReports(result)


        
    }

     
    
    //  setCookiesData([...cookiesData,answers]);
     

    
    function handleSubmit(e) {
        e.preventDefault()


        // const cookieStand = {
        //     id: reports.length,
        //     location: event.target.Location.value,
        //     minCustomers: event.target.minCustomers.value,
        //     maxCustomers: event.target.maxCustomers.value,
        //     avgCookies: event.target.avgCookies.value,
        //     hourly_sales: calculateHourlySales(event.target.minCustomers.value, event.target.maxCustomers.value, event.target.avgCookies.value),
       
        let cookiePerHour = []
        let totalDay = 0
        let min = Number(e.target.min.value)
        let max = Number(e.target.max.value)
        let avg = Number(e.target.avg.value)
    
        const random = (min, max, avg) => {
            return (Math.floor(Math.random() * max) + min) * avg
        }
    
        for (let i = 0; i < 14; i++) {
            let numCookie = random(min, max, avg)
            cookiePerHour.push(numCookie);
            totalDay += numCookie
        }
        let data = {
            location: e.target.location.value,
            description: '',
            hourly_sales: cookiePerHour,
            minimum_customers_per_hour: min,
            maximum_customers_per_hour: max,
            average_cookies_per_sale: avg,
            owner: 1
        }
        // console.log(cookiePerHour);
        cookiePerHour.push(totalDay)
        const configPost = {
            method: "POST",
            url: responsesEndPoint,
            headers: { "Authorization": `Bearer ${props.token}` },
            data: data
        }
        setReports([...reports, data])
  
        axios(configPost)
    }
        // setReports(sales => [...sales, cookieStand])
        // event.target.reset()
   

    function calculateHourlySales(minSales, maxSales, avgCookies) {
        let hourly_sales = []
        for (let i = 0; i < hours.length; i++) {
            hourly_sales[i] = (Math.floor(Math.random() * (parseInt(maxSales) - parseInt(minSales) + 1) + parseInt(minSales))) * avgCookies
        }
        return hourly_sales

    }

    

    function Main() {
        return (
            <>
                <div className="flex flex-col items-center justify-center flex-1 w-full text-center bg-green-50">
                    <Form handleSubmit={handleSubmit} />
                    <Table reports={reports} hours={hours} handleSubmit={handleSubmit} deleteHandler= {deleteHandler}/>
                </div>

                
            </>
        )
    }
    return (
        <>
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
        </>


);
}