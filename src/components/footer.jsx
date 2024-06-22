import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollAreaViewport } from "@/components/ui/scroll-area"

export default function Footer() {
    return (
        <footer className="bg-background py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Pages</h3>
                    <nav className="grid gap-2">
                        <Link href="#" className="hover:underline" prefetch={false}>
                            Home
                        </Link>
                        <Link href="#" className="hover:underline" prefetch={false}>
                            Courses
                        </Link>
                        <Link href="#" className="hover:underline" prefetch={false}>
                            About
                        </Link>
                        <Link href="#" className="hover:underline" prefetch={false}>
                            Contact
                        </Link>
                    </nav>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Social</h3>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="hover:text-primary" prefetch={false}>
                            <FacebookIcon className="w-6 h-6" />
                        </Link>
                        <Link href="#" className="hover:text-primary" prefetch={false}>
                            <InstagramIcon className="w-6 h-6" />
                        </Link>
                        <Link href="#" className="hover:text-primary" prefetch={false}>
                            <TwitterIcon className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                    <form className="flex flex-col gap-2">
                        <Input type="email" placeholder="Enter your email" className="max-w-sm" />
                        <Button type="submit" className="max-w-fit">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between mt-8 border-t border-border pt-4">
                <p className="text-sm text-muted-foreground">&copy; 2024 Organic Gardening Courses. All rights reserved.</p>
                <ScrollArea className="mt-4 md:mt-0">
                    <div className="w-full h-full">
                        <Link
                            href="#"
                            className="flex items-center justify-center gap-2 text-sm font-medium hover:text-primary"
                            prefetch={false}
                        >
                            <ArrowUpIcon className="w-4 h-4" />
                            Back to Top
                        </Link>
                    </div>
                </ScrollArea>
            </div>
        </footer>
    )
}

function ArrowUpIcon(props) {
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
            <path d="m5 12 7-7 7 7" />
            <path d="M12 19V5" />
        </svg>
    )
}


function FacebookIcon(props) {
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
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}


function InstagramIcon(props) {
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
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
}


function TwitterIcon(props) {
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
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    )
}