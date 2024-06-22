/**
 * v0 by Vercel.
 * @see https://v0.dev/t/G7tUk1TsyhE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function Nav() {
    return (
        <header className="sticky top-0 z-50 w-full bg-background shadow-sm transition-all duration-300 min-h-[100px]">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href={"#"}> <Image src="/logo.svg" alt="Logo" width={300} height={100} className={"mt-6 mx-auto sm:mx-0"} /></Link>
                <nav className="hidden items-center space-x-6 lg:flex justify-items-center mt-6">
                    <Link href="#" className="text-lg font-medium hover:text-green-600 transition-colors" prefetch={false}>
                        Home
                    </Link>
                    <Link href="#" className="text-lg font-medium hover:text-green-600 transition-colors" prefetch={false}>
                        Courses
                    </Link>
                    <Link href="#" className="text-lg font-medium hover:text-green-600 transition-colors" prefetch={false}>
                        About
                    </Link>
                    <Link href="#" className="text-lg font-medium hover:text-green-600 transition-colors" prefetch={false}>
                        Contact
                    </Link>
                </nav>
                <div className="hidden lg:block mt-6">
                    <Link
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-6 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-green-600/50"
                        prefetch={false}
                    >
                        Enroll Now
                    </Link>
                </div>
                <div className="hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <MenuIcon className="h-6 w-6" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="grid gap-4 p-6">
                                <Link href="#" className="text-xl font-medium hover:text-green-600 transition-colors" prefetch={false}>
                                    Home
                                </Link>
                                <Link href="#" className="text-xl font-medium hover:text-green-600 transition-colors" prefetch={false}>
                                    Courses
                                </Link>
                                <Link href="#" className="text-xl font-medium hover:text-green-600 transition-colors" prefetch={false}>
                                    About
                                </Link>
                                <Link href="#" className="text-xl font-medium hover:text-green-600 transition-colors" prefetch={false}>
                                    Contact
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-6 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-green-600/50"
                                    prefetch={false}
                                >
                                    Enroll Now
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

function LeafIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
    )
}


function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}