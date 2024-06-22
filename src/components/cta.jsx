"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function CTA() {
    const [daysLeft, setDaysLeft] = useState(3)
    useEffect(() => {
        const timer = setInterval(() => {
            setDaysLeft((prevDays) => (prevDays > 0 ? prevDays - 1 : 0))
        }, 86400000)
        return () => clearInterval(timer)
    }, [])
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid max-w-5xl items-center justify-center gap-8 px-4 text-center md:px-6 lg:grid-cols-2 lg:text-left xl:max-w-6xl">
                <div className="flex flex-col items-center justify-center space-y-4 lg:items-start">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Grow Your Own Organic Garden
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Learn the secrets to cultivating a thriving organic garden from the comfort of your home. Enjoy fresh,
                            nutritious produce all year round.
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <div className="flex items-center gap-2">
                            <CheckIcon className="h-5 w-5 text-green-500" />
                            <span>Step-by-step video lessons</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckIcon className="h-5 w-5 text-green-500" />
                            <span>Expert guidance from certified gardeners</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckIcon className="h-5 w-5 text-green-500" />
                            <span>Lifetime access to course materials</span>
                        </div>
                    </div>
                    <Button variant="default" size="lg" className="mt-4 w-full max-w-xs lg:max-w-none">
                        Enroll Now
                    </Button>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <Alert className="w-full max-w-md">
                        <div className="flex items-center justify-between w-full">
                            <div className="space-y-1">
                                <AlertTitle className="text-lg font-bold">Limited-Time Offer</AlertTitle>
                                <AlertDescription className="text-sm">Enroll now and get these exclusive bonuses!</AlertDescription>
                            </div>
                            <div className="flex items-center gap-2 px-2 py-1 bg-background rounded-full">
                                <ClockIcon className="h-4 w-4 text-foreground" />
                                <span className="text-sm font-medium">{daysLeft} days left</span>
                            </div>
                        </div>
                    </Alert>
                    <div className="grid w-full max-w-md grid-cols-1 gap-4">
                        <div className="flex items-center gap-2">
                            <SproutIcon className="h-5 w-5 text-green-500" />
                            <span>Free Organic Seed Pack</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <PenToolIcon className="h-5 w-5 text-green-500" />
                            <span>Gardening Tool Set</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <UsersIcon className="h-5 w-5 text-green-500" />
                            <span>Access to Private Community</span>
                        </div>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" size="lg" className="bg-green-700 text-white hover:bg-green-800">
                                Join Waitlist
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Join the Waitlist</DialogTitle>
                                <DialogDescription>Be the first to know when we launch!</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                        Name
                                    </Label>
                                    <Input id="name" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="email" className="text-right">
                                        Email
                                    </Label>
                                    <Input id="email" type="email" className="col-span-3" />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Join Waitlist</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </section>
    )
}

function CheckIcon(props) {
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
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}


function ClockIcon(props) {
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
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}


function PenToolIcon(props) {
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
            <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
            <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
            <path d="m2.3 2.3 7.286 7.286" />
            <circle cx="11" cy="11" r="2" />
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


function UsersIcon(props) {
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}