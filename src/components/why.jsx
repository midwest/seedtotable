export default function Why() {
    return (
        <section className="w-full py-12 md:py-24 bg-zinc-800">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-4xl space-y-6 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-zinc-400">Why Join Crypto College?</h2>
                        <p className="text-zinc-300 md:text-xl dark:text-gray-400">
                            Unlock your potential with our comprehensive resources and expert guidance.
                        </p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                        <div className="space-y-2">
                            <div className="flex items-center justify-center space-x-2">
                                <NewspaperIcon className="h-8 w-8 text-[#00b894]"/>
                                <h3 className="text-xl text-zinc-400 font-semibold">Weekly Newsletters</h3>
                            </div>
                            <p className="text-zinc-300 ">
                                Stay up-to-date with the latest market trends and insights.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-center space-x-2">
                                <GroupIcon className="h-8 w-8 text-[#00b894]"/>
                                <h3 className="text-xl text-zinc-400 font-semibold">Exclusive Community</h3>
                            </div>
                            <p className="text-zinc-300 ">Connect with like-minded investors and share ideas.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-center space-x-2">
                                <BookIcon className="h-8 w-8 text-[#00b894]"/>
                                <h3 className="text-xl text-zinc-400 font-semibold">Free eBooks &amp; Courses</h3>
                            </div>
                            <p className="text-zinc-300 ">Learn from industry experts and expand your knowledge.</p>

                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-center space-x-2">
                                <BusIcon className="h-8 w-8 text-[#00b894]"/>
                                <h3 className="text-xl text-zinc-400 font-semibold">Business Resources</h3>
                            </div>
                            <p className="text-zinc-300 ">
                                Gain knowledge through our comprehensive business resources.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-center space-x-2">
                                <ContactIcon className="h-8 w-8 text-[#00b894]"/>
                                <h3 className="text-xl text-zinc-400 font-semibold">Crypto Consultations</h3>
                            </div>
                            <p className="text-zinc-300">
                                Enroll in our crypto consultations for in-depth learning.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-center space-x-2">
                                <MilestoneIcon className="h-8 w-8 text-[#00b894]"/>
                                <h3 className="text-xl text-zinc-400 font-semibold">Mentorship Program</h3>
                            </div>
                            <p className="text-zinc-300">
                                Learn from experienced mentors and accelerate your growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function BookIcon(props) {
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
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
    )
}


function BusIcon(props) {
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
            <path d="M8 6v6" />
            <path d="M15 6v6" />
            <path d="M2 12h19.6" />
            <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
            <circle cx="7" cy="18" r="2" />
            <path d="M9 18h5" />
            <circle cx="16" cy="18" r="2" />
        </svg>
    )
}


function ContactIcon(props) {
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
            <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <circle cx="12" cy="10" r="2" />
            <line x1="8" x2="8" y1="2" y2="4" />
            <line x1="16" x2="16" y1="2" y2="4" />
        </svg>
    )
}


function GroupIcon(props) {
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
            <path d="M3 7V5c0-1.1.9-2 2-2h2" />
            <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
            <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
            <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
            <rect width="7" height="5" x="7" y="7" rx="1" />
            <rect width="7" height="5" x="10" y="12" rx="1" />
        </svg>
    )
}


function MilestoneIcon(props) {
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
            <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
            <path d="M12 13v8" />
            <path d="M12 3v3" />
        </svg>
    )
}


function NewspaperIcon(props) {
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
            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
            <path d="M18 14h-8" />
            <path d="M15 18h-5" />
            <path d="M10 6h8v4h-8V6Z" />
        </svg>
    )
}