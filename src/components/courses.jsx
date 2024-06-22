import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"



export default function Courses() {
    return (
        <section className="flex min-h-screen flex-col items-center sm:mt-[250px] justify-between ">
            <Intro />
            <Intermediate />
            <Advanced />
            <Fermentation />

        </section>
    );
}


 function Intro() {
    return (
        <section className="px-4 py-8 md:py-12 lg:py-16">
            <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[1fr_400px]">
                <div id={"#courses"}>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight">Introduction to Gardening</h2>
                        <p className="text-muted-foreground">
                            This comprehensive course covers the fundamentals of gardening, from soil preparation and plant selection
                            to pruning and pest control. You'll learn how to create beautiful and thriving gardens, and gain a solid
                            foundation for a lifelong passion for gardening.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Key Learning Outcomes</h3>
                        <ul className="grid gap-2">
                            <li className="flex items-center gap-2">
                                <CircleCheckIcon className="w-5 h-5 text-primary" />
                                <span>Understand soil types and nutrient requirements</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CircleCheckIcon className="w-5 h-5 text-primary" />
                                <span>Master plant selection and garden design principles</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CircleCheckIcon className="w-5 h-5 text-primary" />
                                <span>Learn proper watering and fertilization techniques</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CircleCheckIcon className="w-5 h-5 text-primary" />
                                <span>Explore organic and sustainable gardening practices</span>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Course Syllabus</h3>
                        <Accordion type="single" collapsible className="space-y-2 border-none">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="group flex items-center justify-between rounded-lg px-4 py-2 transition-all hover:bg-muted">
                                    <span>Soil Preparation</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    <ul className="space-y-2 pl-4">
                                        <li>Understanding soil types</li>
                                        <li>Soil testing and amendments</li>
                                        <li>Composting and organic matter</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="group flex items-center justify-between rounded-lg px-4 py-2 transition-all hover:bg-muted">
                                    <span>Plant Selection and Design</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    <ul className="space-y-2 pl-4">
                                        <li>Choosing plants for your climate</li>
                                        <li>Garden design principles</li>
                                        <li>Companion planting and crop rotation</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="group flex items-center justify-between rounded-lg px-4 py-2 transition-all hover:bg-muted">
                                    <span>Plant Care and Maintenance</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    <ul className="space-y-2 pl-4">
                                        <li>Watering techniques and schedules</li>
                                        <li>Fertilization and nutrient management</li>
                                        <li>Pruning and deadheading</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="group flex items-center justify-between rounded-lg px-4 py-2 transition-all hover:bg-muted">
                                    <span>Organic and Sustainable Practices</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    <ul className="space-y-2 pl-4">
                                        <li>Integrated pest management</li>
                                        <li>Xeriscaping and water conservation</li>
                                        <li>Permaculture principles</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Instructor</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center gap-4">
                            <Avatar className="h-24 w-24">
                                <AvatarImage src="/placeholder-user.jpg" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div className="text-center">
                                <h4 className="text-lg font-semibold">Jane Doe</h4>
                                <p className="text-muted-foreground">Master Gardener and Horticulturist</p>
                                <p className="text-sm text-muted-foreground">
                                    With a lifelong passion for gardening, Jane has spent years cultivating her knowledge and expertise in
                                    various gardening techniques. She is dedicated to sharing her love for gardening and helping others
                                    create beautiful and sustainable gardens.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

function Intermediate() {
    return (
        <section className="px-4 py-8 md:py-12 lg:py-16">
            <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[400px_1fr]">
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Instructor</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center gap-4">
                            <Avatar className="h-24 w-24">
                                <AvatarImage src="/placeholder-user.jpg" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div className="text-center">
                                <h4 className="text-lg font-semibold">Jane Doe</h4>
                                <p className="text-muted-foreground">Master Gardener and Horticulturist</p>
                                <p className="text-sm text-muted-foreground">
                                    With a lifelong passion for gardening, Jane has spent years cultivating her knowledge and expertise in
                                    various gardening techniques. She is dedicated to sharing her love for gardening and helping others
                                    create beautiful and sustainable gardens.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight">Intermediate Gardening Techniques</h2>
                        <p className="text-muted-foreground">
                            Take your gardening skills to the next level with this comprehensive course on intermediate techniques.
                            You'll delve deeper into advanced soil management, plant propagation, and garden design principles,
                            equipping you with the knowledge and skills to create thriving and visually stunning gardens.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Key Learning Outcomes</h3>
                        <ul className="grid gap-2">
                            <li className="flex items-center gap-2">
                                <CircleCheckIcon className="w-5 h-5 text-primary" />
                                <span>Master advanced soil management techniques</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CircleCheckIcon className="w-5 h-5 text-primary" />
                                <span>Learn plant propagation methods like division and grafting</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CircleCheckIcon className="w-5 h-5 text-primary" />
                                <span>Explore advanced garden design principles and styles</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CircleCheckIcon className="w-5 h-5 text-primary" />
                                <span>Understand plant care for specific climates and environments</span>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Course Syllabus</h3>
                        <Accordion type="single" collapsible className="space-y-2 border-none">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="group flex items-center justify-between rounded-lg px-4 py-2 transition-all hover:bg-muted">
                                    <span>Advanced Soil Management</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    <ul className="space-y-2 pl-4">
                                        <li>Soil nutrient analysis and fertilizer programs</li>
                                        <li>Soil pH management and amendments</li>
                                        <li>Mulching techniques and benefits</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="group flex items-center justify-between rounded-lg px-4 py-2 transition-all hover:bg-muted">
                                    <span>Plant Propagation Methods</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    <ul className="space-y-2 pl-4">
                                        <li>Seed propagation and germination techniques</li>
                                        <li>Plant division and separation</li>
                                        <li>Grafting and budding techniques</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="group flex items-center justify-between rounded-lg px-4 py-2 transition-all hover:bg-muted">
                                    <span>Advanced Garden Design</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    <ul className="space-y-2 pl-4">
                                        <li>Principles of landscape design</li>
                                        <li>Garden styles and themes</li>
                                        <li>Hardscaping and water features</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="group flex items-center justify-between rounded-lg px-4 py-2 transition-all hover:bg-muted">
                                    <span>Plant Care for Specific Environments</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    <ul className="space-y-2 pl-4">
                                        <li>Gardening in arid and drought-prone regions</li>
                                        <li>Gardening in tropical and humid climates</li>
                                        <li>Gardening in cold and frost-prone areas</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Advanced() {
    return (
        <section className="px-4 py-8 md:py-12 lg:py-16">
            <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[1fr_400px]">
                <div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight">Advanced Gardening Mastery</h2>
                        <p className="text-muted-foreground">
                            This expert-level course is designed for experienced gardeners seeking to take their skills and knowledge
                            to the next level. You'll delve into advanced techniques, explore cutting-edge research, and gain a
                            comprehensive understanding of sustainable and regenerative gardening practices.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Key Learning Outcomes</h3>
                        <ul className="grid gap-2">
                            <li className="flex items-center gap-2">
                                <CircleCheckIcon className="w-5 h-5 text-primary" />
                                <span>Master advanced soil management and bioremediation techniques</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CircleCheckIcon className="w-5 h-5 text-primary" />
                                <span>Explore permaculture design principles and food forests</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CircleCheckIcon className="w-5 h-5 text-primary" />
                                <span>Implement effective integrated pest management strategies</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CircleCheckIcon className="w-5 h-5 text-primary" />
                                <span>Understand the science behind plant breeding and genetics</span>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Course Syllabus</h3>
                        <Accordion type="single" collapsible className="space-y-2 border-none">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="group flex items-center justify-between rounded-lg px-4 py-2 transition-all hover:bg-muted">
                                    <span>Advanced Soil Management</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    <ul className="space-y-2 pl-4">
                                        <li>Soil microbiology and bioremediation</li>
                                        <li>Nutrient cycling and mineral balancing</li>
                                        <li>Mycorrhizal fungi and soil food web</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="group flex items-center justify-between rounded-lg px-4 py-2 transition-all hover:bg-muted">
                                    <span>Permaculture Design and Food Forests</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    <ul className="space-y-2 pl-4">
                                        <li>Permaculture principles and ethics</li>
                                        <li>Food forest design and implementation</li>
                                        <li>Agroforestry and silvopasture systems</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="group flex items-center justify-between rounded-lg px-4 py-2 transition-all hover:bg-muted">
                                    <span>Integrated Pest Management</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    <ul className="space-y-2 pl-4">
                                        <li>Biological control methods</li>
                                        <li>Organic pesticides and repellents</li>
                                        <li>Pest monitoring and prevention strategies</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="group flex items-center justify-between rounded-lg px-4 py-2 transition-all hover:bg-muted">
                                    <span>Plant Breeding and Genetics</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    <ul className="space-y-2 pl-4">
                                        <li>Plant genetics and genomics</li>
                                        <li>Breeding techniques and hybridization</li>
                                        <li>Seed saving and heirloom preservation</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Instructor</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center gap-4">
                            <Avatar className="h-24 w-24">
                                <AvatarImage src="/placeholder-user.jpg" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div className="text-center">
                                <h4 className="text-lg font-semibold">Jane Doe</h4>
                                <p className="text-muted-foreground">Master Gardener and Horticulturist</p>
                                <p className="text-sm text-muted-foreground">
                                    With a lifelong passion for gardening, Jane has spent years cultivating her knowledge and expertise in
                                    various gardening techniques. She is dedicated to sharing her love for gardening and helping others
                                    create beautiful and sustainable gardens.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

function Fermentation() {
    return (
        <section className="px-4 py-8 md:py-12 lg:py-16">
            <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[400px_1fr]">
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Instructor</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center gap-4">
                            <Avatar className="h-24 w-24">
                                <AvatarImage src="/placeholder-user.jpg" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div className="text-center">
                                <h4 className="text-lg font-semibold">Jane Doe</h4>
                                <p className="text-muted-foreground">Fermentation Expert and Microbiologist</p>
                                <p className="text-sm text-muted-foreground">
                                    With a deep fascination for the art of fermentation, Jane has spent years studying and mastering
                                    various fermentation techniques. She is passionate about sharing her knowledge and helping others
                                    explore the world of fermented foods and beverages.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight">Mastering the Art of Fermentation</h2>
                        <p className="text-muted-foreground">
                            Delve into the fascinating world of fermentation with this comprehensive course. You'll learn about the
                            science behind fermentation, explore various fermentation techniques, and discover how to create delicious
                            and nutritious fermented foods and beverages at home.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Key Learning Outcomes</h3>
                        <ul className="grid gap-2">
                            <li className="flex items-center gap-2">
                                <CircleCheckIcon className="w-5 h-5 text-primary" />
                                <span>Understand the science of fermentation</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CircleCheckIcon className="w-5 h-5 text-primary" />
                                <span>Learn various fermentation techniques and methods</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CircleCheckIcon className="w-5 h-5 text-primary" />
                                <span>Ferment vegetables, fruits, dairy, and grains</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CircleCheckIcon className="w-5 h-5 text-primary" />
                                <span>Create fermented beverages like kombucha and kefir</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CircleCheckIcon className="w-5 h-5 text-primary" />
                                <span>Understand fermentation for preservation and health benefits</span>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Course Syllabus</h3>
                        <Accordion type="single" collapsible className="space-y-2 border-none">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="group flex items-center justify-between rounded-lg px-4 py-2 transition-all hover:bg-muted">
                                    <span>Introduction to Fermentation</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    <ul className="space-y-2 pl-4">
                                        <li>History and cultural significance of fermentation</li>
                                        <li>The science behind fermentation processes</li>
                                        <li>Benefits of fermented foods and beverages</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="group flex items-center justify-between rounded-lg px-4 py-2 transition-all hover:bg-muted">
                                    <span>Fermenting Vegetables and Fruits</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    <ul className="space-y-2 pl-4">
                                        <li>Lacto-fermentation of vegetables</li>
                                        <li>Fermented fruit chutneys and preserves</li>
                                        <li>Fermented pickles and relishes</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="group flex items-center justify-between rounded-lg px-4 py-2 transition-all hover:bg-muted">
                                    <span>Fermenting Dairy and Grains</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    <ul className="space-y-2 pl-4">
                                        <li>Yogurt and kefir fermentation</li>
                                        <li>Sourdough bread and fermented grains</li>
                                        <li>Fermented cheese and dairy products</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="group flex items-center justify-between rounded-lg px-4 py-2 transition-all hover:bg-muted">
                                    <span>Fermented Beverages</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    <ul className="space-y-2 pl-4">
                                        <li>Kombucha and jun fermentation</li>
                                        <li>Water kefir and fermented sodas</li>
                                        <li>Fermented alcoholic beverages</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger className="group flex items-center justify-between rounded-lg px-4 py-2 transition-all hover:bg-muted">
                                    <span>Fermentation for Preservation and Health</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    <ul className="space-y-2 pl-4">
                                        <li>Fermentation as a preservation method</li>
                                        <li>Probiotic benefits of fermented foods</li>
                                        <li>Fermentation and gut health</li>
                                        <li>Fermentation for flavor enhancement</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
function ChevronRightIcon(props) {
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
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}


function CircleCheckIcon(props) {
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
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}