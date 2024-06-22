"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function Pricing() {
    const [annualPricing, setAnnualPricing] = useState(false)
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
            <div className="container px-4 md:px-6 lg:px-24">
                <div className="grid gap-8 md:gap-12 items-center">
                    <div className="grid gap-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-green-800">
                            Organic Gardening Course Packages
                        </h2>
                        <p className="mx-auto max-w-[600px] text-green-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Choose the package that fits your organic gardening learning needs and budget. Upgrade or downgrade
                            anytime.
                        </p>
                        <div className="mx-auto flex items-center justify-center gap-2">
              <span className={`font-medium ${annualPricing ? "text-green-700" : "text-green-800 font-semibold"}`}>
                Monthly
              </span>
                            <Switch
                                checked={annualPricing}
                                onCheckedChange={setAnnualPricing}
                                className="relative inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={`pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                                        annualPricing ? "translate-x-5 bg-green-600" : "translate-x-0 bg-green-300"
                                    }`}
                                />
                            </Switch>
                            <span className={`font-medium ${annualPricing ? "text-green-800 font-semibold" : "text-green-700"}`}>
                Annually
              </span>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-0 lg:gap-0 mx-auto">
                        <Card
                            className="group relative overflow-hidden rounded-xl border border-green-300 bg-green-50 shadow-sm transition-all hover:border-green-600 hover:shadow-md">
                            <CardHeader className="bg-green-100 p-6">
                                <div className="flex flex-col items-center gap-2">
                                    <h3 className="text-2xl font-bold text-green-800">Seedling</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-bold text-green-800">${annualPricing ? "49" : "59"}</span>
                                        <span className="text-green-700">/{annualPricing ? "year" : "month"}</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <ul className="grid gap-3 text-green-700">
                                    <li className="flex items-center gap-2">
                                        <SproutIcon className="h-5 w-5 fill-green-600" />
                                        Introduction to Organic Gardening
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <SproutIcon className="h-5 w-5 fill-green-600" />
                                        Fermentation Basics
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <XIcon className="h-5 w-5 fill-green-700" />
                                        Full Access to Courses
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <XIcon className="h-5 w-5 fill-green-700" />
                                        Community Access
                                    </li>
                                </ul>
                            </CardContent>
                            <CardFooter className="mt-auto bg-green-100 p-6">
                                <Button className="w-full group-hover:bg-green-600 group-hover:text-white">Get Started</Button>
                            </CardFooter>
                        </Card>
                        <Card className="group relative overflow-hidden rounded-xl border border-green-300 bg-green-50 shadow-sm transition-all hover:border-green-600 hover:shadow-md">
                            <CardHeader className="bg-green-600 p-6 text-white">
                                <div className="flex flex-col items-center gap-2">
                                    <h3 className="text-2xl font-bold">Green Thumb</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-bold">${annualPricing ? "99" : "129"}</span>
                                        <span className="text-white">/{annualPricing ? "year" : "month"}</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <ul className="grid gap-3 text-green-700">
                                    <li className="flex items-center gap-2">
                                        <SproutIcon className="h-5 w-5 fill-green-600" />
                                        Introduction to Organic Gardening
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <SproutIcon className="h-5 w-5 fill-green-600" />
                                        Fermentation Basics
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <SproutIcon className="h-5 w-5 fill-green-600" />
                                        Full Access to Courses
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <SproutIcon className="h-5 w-5 fill-green-600" />
                                        Community Access
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <XIcon className="h-5 w-5 fill-green-700" />
                                        Exclusive Content
                                    </li>
                                </ul>
                            </CardContent>
                            <CardFooter className="mt-auto bg-green-600 p-6 text-white">
                                <Button className="w-full group-hover:bg-white group-hover:text-green-600">Get Started</Button>
                            </CardFooter>
                        </Card>
                        <Card className="group relative overflow-hidden rounded-xl border border-green-300 bg-green-50 shadow-sm transition-all hover:border-green-600 hover:shadow-md lg:col-span-2">
                            <CardHeader className="bg-green-100 p-6">
                                <div className="flex flex-col items-center gap-2">
                                    <h3 className="text-2xl font-bold text-green-800">Master Gardener</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-bold text-green-800">${annualPricing ? "199" : "249"}</span>
                                        <span className="text-green-700">/{annualPricing ? "year" : "month"}</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <ul className="grid gap-3 text-green-700">
                                    <li className="flex items-center gap-2">
                                        <SproutIcon className="h-5 w-5 fill-green-600" />
                                        Full Access to All Courses
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <SproutIcon className="h-5 w-5 fill-green-600" />
                                        Community Access
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <SproutIcon className="h-5 w-5 fill-green-600" />
                                        Personalized Support
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <SproutIcon className="h-5 w-5 fill-green-600" />
                                        Exclusive Content
                                    </li>
                                </ul>
                            </CardContent>
                            <CardFooter className="mt-auto bg-green-100 p-6">
                                <Button className="w-full group-hover:bg-green-600 group-hover:text-white">Get Started</Button>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="grid gap-8 ">
                        <div className="grid gap-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-green-800">Comparison</h2>
                            <p className="mx-auto max-w-[600px] text-green-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                See how our organic gardening course packages compare and find the one that fits your needs.
                            </p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-left">
                                <thead className="bg-green-100">
                                <tr>
                                    <th className="p-4 font-medium text-green-800">Features</th>
                                    <th className="p-4 font-medium text-green-800">Seedling</th>
                                    <th className="p-4 font-medium text-green-800">Green Thumb</th>
                                    <th className="p-4 font-medium text-green-800">Master Gardener</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="border-b border-green-300">
                                    <td className="p-4 text-green-700">Courses Included</td>
                                    <td className="p-4 text-green-700">Introduction to Organic Gardening, Fermentation Basics</td>
                                    <td className="p-4 text-green-700">Full Access to Courses</td>
                                    <td className="p-4 text-green-700">Full Access to All Courses</td>
                                </tr>
                                <tr className="border-b border-green-300">
                                    <td className="p-4 text-green-700">Community Access</td>
                                    <td className="p-4">
                                        <XIcon className="h-5 w-5 fill-green-700" />
                                    </td>
                                    <td className="p-4">
                                        <SproutIcon className="h-5 w-5 fill-green-600" />
                                    </td>
                                    <td className="p-4">
                                        <SproutIcon className="h-5 w-5 fill-green-600" />
                                    </td>
                                </tr>
                                <tr className="border-b border-green-300">
                                    <td className="p-4 text-green-700">Personalized Support</td>
                                    <td className="p-4">
                                        <XIcon className="h-5 w-5 fill-green-700" />
                                    </td>
                                    <td className="p-4">
                                        <XIcon className="h-5 w-5 fill-green-700" />
                                    </td>
                                    <td className="p-4">
                                        <SproutIcon className="h-5 w-5 fill-green-600" />
                                    </td>
                                </tr>
                                <tr className="border-b border-green-300">
                                    <td className="p-4 text-green-700">Exclusive Content</td>
                                    <td className="p-4">
                                        <XIcon className="h-5 w-5 fill-green-700" />
                                    </td>
                                    <td className="p-4">
                                        <XIcon className="h-5 w-5 fill-green-700" />
                                    </td>
                                    <td className="p-4">
                                        <SproutIcon className="h-5 w-5 fill-green-600" />
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="grid gap-8">
                        <div className="grid gap-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-green-800">FAQ</h2>
                            <p className="mx-auto max-w-[600px] text-green-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Got questions? We've got answers. Check out our frequently asked questions about our organic gardening
                                courses.
                            </p>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="faq-1">
                                <AccordionTrigger className="flex items-center justify-between">
                                    <h3 className="text-lg font-medium text-green-800">
                                        What is the difference between the Seedling, Green Thumb, and Master Gardener packages?
                                    </h3>
                                    <ChevronDownIcon className="h-4 w-4 transition-transform duration-300 [&[data-state=open]]:rotate-180 text-green-600" />
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="grid gap-4 py-4 text-left text-green-700">
                                        <p>
                                            The main differences between the packages are the number of courses, access to the community,
                                            personalized support, and exclusive content.
                                        </p>
                                        <p>
                                            The Seedling package provides access to the Introduction to Organic Gardening and Fermentation
                                            Basics courses. The Green Thumb package offers full access to all courses and the community. The
                                            Master Gardener package includes full access to all courses, the community, personalized support,
                                            and exclusive content.
                                        </p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ChevronDownIcon(props) {
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
            <path d="m6 9 6 6 6-6" />
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


function XIcon(props) {
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}