"use client"

import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip"
import { Client, Databases, Query } from "appwrite"
import {
    Home,
    LineChart,
    Package,
    Package2,
    Settings, Users2
} from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Project() {
    const iframeRef = useRef<HTMLIFrameElement>(null)
    const [projects, setProjects] = useState<any[]>([]) // Add initial value for projects state variable
    const [project, setProject] = useState()
    const [sidebarVisible, setSidebarVisible] = useState(true)
    const [fullScreen, setFullScreen] = useState(false)

    const client = new Client()
        .setEndpoint('http://localhost:8081/v1')
        .setProject('66438e7d0020c4ad0367')

    async function init() {
        const databases = new Databases(client)
        const response = await databases.listDocuments(
            "chorus-tre",
            "projects",
            [Query.orderDesc("$createdAt"), Query.limit(10)]
        )
        setProjects((response.documents as any))
    }

    useEffect(() => {
        init()
    }, [])

    useEffect(() => {
        if (fullScreen) {
            iframeRef?.current?.requestFullscreen()
            document.addEventListener('fullscreenchange', () => {
                if (!document.fullscreenElement) {
                    setFullScreen(false)
                }
            })
        }
    }, [fullScreen])

    const handleIframeClick = () => {
        setSidebarVisible(!sidebarVisible)
    }

    const handleIframUrl = (nb: number) => {
        const w = projects.find(w => w.id === nb)
        if (!w) return

        setProject(w)
    }

    const handleFullScreen = () => {
        setFullScreen(!fullScreen)
        setSidebarVisible(!sidebarVisible)
    }

    return (
        <div className="w-full h-screen">
            <iframe
                src={project?.url || ''}
                frameBorder="0"
                width="100%"
                height="100%"
                className="absolute top-0 left-0 w-full h-screen overflow-hidden"
                onClick={handleIframeClick}
                allowFullScreen={true}
                allow="autoplay; microphone; camera; clipboard-read; clipboard-write; window-management;"
                ref={iframeRef}
            />
            <div className={`absolute top-0 left-0 w-full h-screen ${sidebarVisible ? '' : 'iframe-overlay-button-hide'}`} onClick={handleIframeClick}>
            </div>
            <div className="flex items-start justify-start bg-transparent w-full">
                <div className={`flex flex-col fixed top-0 left-0 text-white w-full h-screen ${sidebarVisible ? 'sidebar-reveal' : 'sidebar-hide'}`}>
                    <TooltipProvider >
                        <aside className="bg-slate-800 fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r border-slate-600 sm:flex">
                            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5 ">
                                <Link
                                    href="#"
                                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                                >
                                    <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                                    <span className="sr-only">CHORUS</span>
                                </Link>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href="#"
                                            className="flex h-9 w-9 items-center 
                      justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                        >
                                            <Home className="h-5 w-5" />
                                            <span className="sr-only">My Space</span>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">My Space</TooltipContent>
                                </Tooltip>

                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href="#"
                                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                        >
                                            <Users2 className="h-5 w-5" />
                                            <span className="sr-only">Projects</span>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">Projects</TooltipContent>
                                </Tooltip>

                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href="#"
                                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                        >
                                            <Package className="h-5 w-5" />
                                            <span className="sr-only">Data</span>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">Data</TooltipContent>
                                </Tooltip>

                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href="#"
                                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                        >
                                            <LineChart className="h-5 w-5" />
                                            <span className="sr-only">Analytics</span>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">Analytics</TooltipContent>
                                </Tooltip>
                            </nav>
                            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href="#"
                                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                        >
                                            <Settings className="h-5 w-5" />
                                            <span className="sr-only">Settings</span>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">Settings</TooltipContent>
                                </Tooltip>
                            </nav>
                        </aside>
                    </TooltipProvider >
                    <div className="flex flex-col sm:pl-14 w-full">
                        <div className="flex items-start w-full">
                            <main className="flex-0 gap-4 p-4 bg-slate-800 min-h-screen w-64">
                                <div className='flex flex-col'>
                                    <div className='flex justify-between items-center'>
                                        <p className=" center p-4">Projets</p>
                                        <Button variant="ghost"
                                            className=" text-white text-md"
                                            style={{ width: 80, height: 80 }}
                                            onClick={() => setSidebarVisible(false)}
                                        >
                                            X
                                        </Button>
                                    </div>
                                    <div className="flex h-full max-h-screen flex-col gap-2 mb-4">
                                        <div className="flex-1">
                                            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                                                {projects.map((project, i) => (
                                                    <Link href="#"
                                                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                                                        <Package className="h-4 w-4" />
                                                        {project?.name}
                                                    </Link>
                                                ))}
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </main>
                            <main className="backdrop-blur-md flex min-h-[calc(100vh_-_theme(spacing.16))] h-full w-full flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
                                <div className="flex justify-between items-center">
                                    <h1 className="text-3xl font-semibold">{project?.name || ''}</h1>
                                    <Button variant="ghost"
                                        className=" text-white text-xl"
                                        style={{ width: 80, height: 80 }}
                                        onClick={() => setSidebarVisible(false)}
                                    >
                                        X
                                    </Button>
                                </div>
                                <div className="mx-auto grid w-full items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                                    <div className="mb-6">
                                        toto
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
                <Button variant="secondary" className="z-50 bg-gray-500 hover:bg-gray-700 text-white" onClick={handleIframeClick}>:::</Button>
            </div>
        </div>
    )
}
