import Link from "next/link"

const Logo = () => {
    return <Link passHref={true} href="/">
        <div className="flex cursor-pointer items-end font-bold text-2xl sm:text-3xl font-[Righteous]">
            follio
            <div className="h-2 w-2 mb-2 ml-1 rounded-md bg-brand"></div>
        </div>
    </Link>
}

export default Logo