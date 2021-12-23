import Link from 'next/link'

export default function Overview(){
    return(
        <>
            <div className="flex justify-center "  >
                <p className="text-lg font-bold text-blue-500">Hi</p>
            
                
            </div>
            <div>
            <Link href='/' >
                <a>
                    <h1 className="text-3xl font-semibold">
                        Cookie Stand Admin

                    </h1>
                </a>
            </Link>
            </div>
        </>
    )
}