export default function Table({ reports, hours}) {

    function CreateTable() {

        let sales = []
        for (let i = 0; i < reports.length; i++) {
            sales.push(reports[i].hourly_sales)

            let totalsArray = []
            for (let i = 0; i < sales[0].length; i++) {
                let hourlyTotal = 0
                for (let location in sales) {
                    hourlyTotal += sales[location][i]
                    totalsArray[i] = hourlyTotal
                }
            }
        }

        return (
            <>
                <table className="flex-center ...  w-full py-10 my-12 border-r  md:px-32">
                    <thead className="bg-green-600 border-b border-gray-800 ">
                        <tr>
                            <th>Location</th>
                            {hours.map(hour =>

                                <th >{hour}</th>

                            )}
                            <th>Totals</th>
                        </tr>
                    </thead>

                    <tbody>
                        {reports.map(value =>
                            <tr key={value.id} className="odd:bg-green-400 even:bg-green-200" >
                                <td className="text-lg border-b border-r border-gray-700 ">{value.location}</td>
                                {value.hourly_sales.map(sale =>
                                    <td className="text-lg border-b border-r border-gray-600"> {sale.toFixed(3)}</td>
                                )}
                                <td className="text-lg border-b border-r border-gray-600">{(value.hourly_sales.reduce(function (a, b) { return a + b; }, 0)).toFixed(3)}</td>
                                
                                <td >
                                    <button className="justify-center w-8 h-10" onClick={() => { removelocation(value.id)}}>  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                </button>
                                </td>
                                
                            </tr>
                        )}
                    </tbody>
                    <tfoot className="bg-green-600 border-t border-b border-gray-700">
                        <tr>
                            <th className="border-r border-gray-600 ">Totals</th>
                            {totalsArray.map(sale =>
                                <th className="border-r border-gray-600 "> {sale.toFixed(3)} </th>
                            )}
                            <th className="border-r border-gray-600 ">{(totalsArray.reduce(function (a, b) { return a + b; }, 0)).toFixed(3)} </th>
                        </tr>
                    </tfoot>
                </table>
            </>
        )
    }
    function removelocation(id){
        reports.splice(parseInt(id))
    }
    return (
        <>
            {reports.length > 0 ? <CreateTable /> : <h2 className="h-10 my-10 text-3xl font-bold text-gray-700">No Cookie Stands Available</h2>}

        </>
    )
   
}