import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <section className="w-screen py-12 md:py-24 lg:py-32  bg-gradient-to-r from-[#0077b6] to-[#00b894]">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                                Join the Ultimate Crypto Learning Community
                            </h1>
                            <p className="max-w-[600px] text-gray-200 md:text-xl">
                                Stay ahead in the world of cryptocurrency with expert insights, latest news, and exclusive resources.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-white">About Crypto College</h2>
                            <p className="text-gray-200 md:text-lg">
                                Crypto College is your one-stop destination for comprehensive crypto education and resources. Our
                                mission is to equip you with in-depth crypto knowledge and essential tools to navigate the ever-evolving
                                digital asset landscape.
                            </p>
                            <ul className="space-y-1 text-gray-200 md:text-lg">
                                <li>✓ Expert articles and guides</li>
                                <li>✓ Live webinars with industry leaders</li>
                                <li>✓ Exclusive research reports</li>
                            </ul>
                        </div>
                        {/*<div className="w-full max-w-sm space-y-2">
                            <form className="flex gap-2">
                                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                                <Button type="submit" className="bg-[#00b894] hover:bg-[#00a383] text-white">
                                    Sign Up Now
                                </Button>
                            </form>
                            <p className="text-xs text-gray-200">Start your crypto journey with Crypto College.</p>
                        </div>*/}
                    </div>
                    <iframe width="350" height="200" src="https://www.youtube.com/embed/vzAfh0O_MUo?si=IdfYwr-Elfdd52Hl"
                            className={"sm:w-[560px] sm:h-[315px] border-none"}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    )
}