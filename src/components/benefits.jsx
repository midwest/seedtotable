import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

export default function Benefits() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-8">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-700">
                            Unlock the Power of Organic Gardening
                        </h2>
                        <p className="max-w-[700px] text-green-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Discover the transformative benefits of our organic gardening course and take your green thumb to new
                            heights.
                        </p>
                    </div>
                    <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-green-100 p-6 px-4 sm:px-6 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                            <div className="flex gap-4">
                                <LeafIcon className="h-12 w-12 text-green-600" />
                                <SproutIcon className="h-12 w-12 text-green-600" />
                                <RecycleIcon className="h-12 w-12 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-green-700">Healthier Soil</h3>
                            <p className="text-green-700">
                                Enrich your soil with organic matter, improving water retention and nutrient availability.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-green-100 p-6 px-4 sm:px-6 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                            <div className="flex gap-4">
                                <SproutIcon className="h-12 w-12 text-green-600" />
                                <RecycleIcon className="h-12 w-12 text-green-600" />
                                <GlassWaterIcon className="h-12 w-12 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-green-700">Vibrant Plants</h3>
                            <p className="text-green-700">
                                Grow lush, thriving plants that are more resistant to pests and diseases.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-green-100 p-6 px-4 sm:px-6 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                            <div className="flex gap-4">
                                <SproutIcon className="h-12 w-12 text-green-600" />
                                <RecycleIcon className="h-12 w-12 text-green-600" />
                                <GlassWaterIcon className="h-12 w-12 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-green-700">Sustainable Practices</h3>
                            <p className="text-green-700">
                                Learn eco-friendly techniques to reduce waste and minimize your environmental impact.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-12 max-w-4xl">
                    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-green-100 p-6 px-4 sm:px-6 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                            <SproutIcon className="h-12 w-12 text-green-600" />
                            <h3 className="text-xl font-bold text-green-700">Seed Starting</h3>
                            <p className="text-green-700">
                                Learn the art of seed starting and nurture your plants from the very beginning.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-green-100 p-6 px-4 sm:px-6 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                            <RecycleIcon className="h-12 w-12 text-green-600" />
                            <h3 className="text-xl font-bold text-green-700">Composting</h3>
                            <p className="text-green-700">
                                Discover the power of composting and create nutrient-rich soil for your garden.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-green-100 p-6 px-4 sm:px-6 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                            <GlassWaterIcon className="h-12 w-12 text-green-600" />
                            <h3 className="text-xl font-bold text-green-700">Water Conservation</h3>
                            <p className="text-green-700">
                                Explore water-efficient techniques to keep your garden thriving while minimizing waste.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-12 max-w-4xl">
                    <Tabs defaultValue="before" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="before">Before</TabsTrigger>
                            <TabsTrigger value="after">After</TabsTrigger>
                        </TabsList>
                        <TabsContent value="before">
                            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-green-100 p-6 px-4 sm:px-6">
                                <img
                                    src="/placeholder.svg"
                                    width={800}
                                    height={600}
                                    alt="Before"
                                    className="w-full rounded-lg object-cover"
                                />
                                <p className="text-green-700">A neglected garden with poor soil and unhealthy plants.</p>
                            </div>
                        </TabsContent>
                        <TabsContent value="after">
                            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-green-100 p-6 px-4 sm:px-6">
                                <img
                                    src="/placeholder.svg"
                                    width={800}
                                    height={600}
                                    alt="After"
                                    className="w-full rounded-lg object-cover"
                                />
                                <p className="text-green-700">A thriving, vibrant garden with lush, healthy plants.</p>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
                <div className="mx-[50px] sm:mx-auto mt-12 max-w-4xl">
                    <Carousel className="w-full">
                        <CarouselContent>
                            <CarouselItem>
                                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-green-100 p-6 px-4 sm:px-6">
                                    <img src="/placeholder.svg" width={80} height={80} alt="Student 1" className="rounded-full" />
                                    <blockquote className="text-center">
                                        <p className="text-green-700">
                                            "This course completely transformed my garden. I'm\n amazed at the difference in the health and\n
                                            productivity of my plants."
                                        </p>
                                        <cite className="mt-4 text-sm font-medium text-green-700">- Jane Doe, Organic Gardener</cite>
                                    </blockquote>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-green-100 p-6 px-4 sm:px-6">
                                    <img src="/placeholder.svg" width={80} height={80} alt="Student 2" className="rounded-full" />
                                    <blockquote className="text-center">
                                        <p className="text-green-700">
                                            "I never thought I could grow such vibrant, healthy\n plants, but this course gave me the
                                            knowledge and\n confidence to do it."
                                        </p>
                                        <cite className="mt-4 text-sm font-medium text-green-700">- John Smith, Gardening Enthusiast</cite>
                                    </blockquote>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-green-100 p-6 px-4 sm:px-6">
                                    <img src="/placeholder.svg" width={80} height={80} alt="Student 3" className="rounded-full" />
                                    <blockquote className="text-center">
                                        <p className="text-green-700">
                                            "I was hesitant at first, but this course has\n completely changed the way I approach gardening.
                                            I\n can't recommend it enough!"
                                        </p>
                                        <cite className="mt-4 text-sm font-medium text-green-700">
                                            - Sarah Lee, Organic Gardening Advocate
                                        </cite>
                                    </blockquote>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

function GlassWaterIcon(props) {
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
            <path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" />
            <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
        </svg>
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


function RecycleIcon(props) {
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
            <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
            <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
            <path d="m14 16-3 3 3 3" />
            <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
            <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
            <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
        </svg>
    )
}


function SproutIcon(props) {
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
            <path d="M7 20h10" />
            <path d="M10 20c5.5-2.5.8-6.4 3-10" />
            <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
            <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
        </svg>
    )
}