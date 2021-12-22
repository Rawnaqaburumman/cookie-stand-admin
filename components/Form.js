// import React, { useState } from "react";

export default function Form({ handleSubmit }) {

    return (
        <>

            <form onSubmit={handleSubmit}>
                <div className="justify-center p-2 bg-green-300 rounded shadow-2xl h-52">

                    <div className="justify-center text-3xl font-semibold text-black ml-96 w-72 ">Creat Cookie Stand</div>

                    <br />

                    <div className="flex ... ">

                        <label className="block ml-4 mr-2 text-sm font-bold text-black-700" htmlFor="Location">
                            Location
                        </label>

                        <input 
                            className="justify-center text-lg font-normal text-gray-800 rounded pl-96 pr-96"
                            id="Location"
                            type="text"
                            name="location"
                            required
                        />
                    </div>
                    <br />

                    <div className="flex ... ">

                        <div>
                            <label className="block mb-2 ml-6 text-sm font-bold text-black-700" htmlFor="MINCPH" >
                                Minimum Customer per Hour
                            </label>

                            <input 
                                className="justify-center mr-4 p-1 text-lg font-normal text-gray-7=800 rounded w-64 "
                                id="MINCPH"
                                type="number"
                                min="0"
                                name="min"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-2 ml-6 text-sm font-bold text-black-700" htmlFor="MAXCPH">
                                Maximum Customer per Hour
                            </label>

                            <input 
                                className="justify-center mr-4 p-1 text-lg font-normal text-gray-7=800 rounded w-64 "
                                id="MAXCPH"
                                type="number"
                                min="0"
                                name="max"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-2 ml-8 text-sm font-bold text-black-700" htmlFor="AVCPS">
                                Averege Cookies per Sale
                            </label>

                            <input 
                                className="justify-center mr-4 p-1 text-lg font-normal text-gray-7=800 rounded w-64 "
                                id="AVCPS"
                                type="number"
                                min="0"
                                name="avg"
                                step="0.01"
                                required
                            />
                        </div>

                        <button
                            className="relative inline-block font-bold text-black "
                        >
                            <div className="absolute h-full bg-green-700 border rounded-lg -inset-x-0 inset-y-2 -buttom-2"></div>
                            
                            <div className="relative w-64 px-6 py-6 duration-150 transform bg-green-500 border border-gray-500 rounded-lg shadow-2xl transision hover:translate-y-2">Create</div>
                        </button>

                    </div>

                </div>

            </form>

        </>
    )
}