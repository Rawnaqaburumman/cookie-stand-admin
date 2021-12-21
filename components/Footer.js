export default function Footer({ Count }){
    return (
        <footer className="fixed inset-x-0 bottom-0 flex justify-between p-3 mt-8 bg-green-600 border-t">
            <b className="text-lg font-bold text-black"> {Count} Locations Wolrd Wide </b>
        </footer>
    )
}