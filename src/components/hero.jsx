import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Hero() {
    return (
        <section>
            <section
                className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{backgroundImage: `url('/placeholder.svg?height=800&width=1600')`}}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.5)]"/>
                <div className="container px-4 md:px-6 z-10 flex flex-col items-center text-center space-y-6">
                    <div className="space-y-3">
                        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                            Unlock the Secrets of Organic Gardening
                        </h1>
                        <p className="text-lg text-white md:text-xl">
                            Discover the joy of growing your own fresh, nutrient-rich produce with our comprehensive
                            online
                            course.
                        </p>
                    </div>
                    <Button
                        className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                        Enroll Now
                    </Button>
                </div>
                <div
                    className="hidden sm:flex absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-md">
                    <Card className="p-6 bg-background shadow-lg">
                        <CardHeader>
                            <CardTitle>Course Highlights</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-4">
                            <div
                                className="flex flex-col items-center bg-gradient-to-br from-green-100/80 to-green-200/80 p-4 rounded-lg shadow-md transition-colors hover:from-green-200/90 hover:to-green-300/90">
                                <span className="text-lg font-bold text-green-700">Plant Propagation Methods</span>
                            </div>
                            <div
                                className="flex flex-col items-center bg-gradient-to-br from-green-100/80 to-green-200/80 p-4 rounded-lg shadow-md transition-colors hover:from-green-200/90 hover:to-green-300/90">
                                <span className="text-lg font-bold text-green-700">Permaculture Principles</span>
                            </div>
                            <div
                                className="flex flex-col items-center bg-gradient-to-br from-green-100/80 to-green-200/80 p-4 rounded-lg shadow-md transition-colors hover:from-green-200/90 hover:to-green-300/90">
                                <span className="text-lg font-bold text-green-700">Pest Control Methods</span>
                            </div>
                            <div
                                className="flex flex-col items-center bg-gradient-to-br from-green-100/80 to-green-200/80 p-4 rounded-lg shadow-md transition-colors hover:from-green-200/90 hover:to-green-300/90">
                                <span className="text-lg font-bold text-green-700">Post Processing</span>
                            </div>
                            <div
                                className="flex flex-col items-center col-span-full bg-gradient-to-br from-green-100/80 to-green-200/80 p-4 rounded-lg shadow-md w-full">
                                <span className="text-2xl font-extrabold text-green-700">And much more</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
            <div
                className="w-full sm:hidden">
                <Card className="p-6 bg-background shadow-lg">
                    <CardHeader>
                        <CardTitle>Course Highlights</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                        <div
                            className="flex flex-col items-center bg-gradient-to-br from-green-100/80 to-green-200/80 p-4 rounded-lg shadow-md transition-colors hover:from-green-200/90 hover:to-green-300/90">
                            <span className="text-lg font-bold text-green-700">Plant Propagation Methods</span>
                        </div>
                        <div
                            className="flex flex-col items-center bg-gradient-to-br from-green-100/80 to-green-200/80 p-4 rounded-lg shadow-md transition-colors hover:from-green-200/90 hover:to-green-300/90">
                            <span className="text-lg font-bold text-green-700">Permaculture Principles</span>
                        </div>
                        <div
                            className="flex flex-col items-center bg-gradient-to-br from-green-100/80 to-green-200/80 p-4 rounded-lg shadow-md transition-colors hover:from-green-200/90 hover:to-green-300/90">
                            <span className="text-lg font-bold text-green-700">Pest Control Methods</span>
                        </div>
                        <div
                            className="flex flex-col items-center bg-gradient-to-br from-green-100/80 to-green-200/80 p-4 rounded-lg shadow-md transition-colors hover:from-green-200/90 hover:to-green-300/90">
                            <span className="text-lg font-bold text-green-700">Post Processing</span>
                        </div>
                        <div
                            className="flex flex-col items-center col-span-full bg-gradient-to-br from-green-100/80 to-green-200/80 p-4 rounded-lg shadow-md w-full">
                            <span className="text-2xl font-extrabold text-green-700">And much more</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>

    )
}