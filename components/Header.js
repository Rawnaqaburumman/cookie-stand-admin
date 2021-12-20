import Link from 'next/link'


function Header(){
    return(
        <header className="fixed inset-x-0 top-0 z-50 flex justify-between p-4 bg-green-500 border-b">
            <Link href='/'>
                <a>
                    <h1 className="text-4xl font-semibold">
                        Cookie Stand Admin

                    </h1>
                </a>
            </Link>

    

        </header>
    )
}
export default Header;