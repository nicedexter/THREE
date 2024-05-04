
"use client"

import {
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users2
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import { useState } from "react"

const accounts = [
  {
    label: "Alicia Koch",
    email: "alicia@example.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Vercel</title>
        <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Alicia Koch",
    email: "alicia@gmail.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Gmail</title>
        <path
          d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Alicia Koch",
    email: "alicia@me.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>iCloud</title>
        <path
          d="M13.762 4.29a6.51 6.51 0 0 0-5.669 3.332 3.571 3.571 0 0 0-1.558-.36 3.571 3.571 0 0 0-3.516 3A4.918 4.918 0 0 0 0 14.796a4.918 4.918 0 0 0 4.92 4.914 4.93 4.93 0 0 0 .617-.045h14.42c2.305-.272 4.041-2.258 4.043-4.589v-.009a4.594 4.594 0 0 0-3.727-4.508 6.51 6.51 0 0 0-6.511-6.27z"
          fill="currentColor"
        />
      </svg>
    ),
  },
]


export default function Dashboard() {

  const [url, setUrl] = useState('https://localhost:6901/')
  const [sidebarVisible, setSidebarVisible] = useState(true)

  const handleIframeClick = () => {
    setSidebarVisible(!sidebarVisible)
  }

  const handleIframUrl = (nb: number) => {
    if (nb === 1) {
      setUrl('https://localhost:6901/')
    } else if (nb === 2) {
      setUrl('https://localhost:6902')
    } else if (nb === 3) {
      setUrl('https://localhost:6903')
    }
    setSidebarVisible(!sidebarVisible)
  }

  const handleClickWorkflow = () => {
    fetch('http://172.17.0.1:5678/webhook-test/fe4740c0-40d9-4f8f-91fb-1c791c800ad8').then(data => console.log(data))
  }

  const isCollapsed = false
  return (
    <div className="w-full h-screen">
      <iframe
        src={url}
        frameBorder="0"
        width="100%"
        height="100%"
        className="absolute top-0 left-0 w-full h-screen overflow-hidden"
        onClick={handleIframeClick}
      />
      <div className={`absolute  top-0 left-0 w-full h-screen ${sidebarVisible ? '' : 'iframe-overlay-button-hide'}`} onClick={handleIframeClick}>
      </div>
      <div className="flex items-start justify-start bg-slate-800">
        <div className={`bg-slate-800 flex flex-col fixed top-0 left-0 text-white h-screen ${sidebarVisible ? 'sidebar-reveal' : 'sidebar-hide'}`}>
          <TooltipProvider >
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r border-slate-600 sm:flex">
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
          <div className="flex flex-col  sm:py-4 sm:pl-14">

            <div className="flex items-start">
              <main className="flex-0 gap-4 p-4 ">
                <div className='flex flex-col'>
                  <p className=" center p-4">Projets</p>
                  <p className="center p-4">My first project</p>
                  <div className='center w-full'>
                    <Button variant="secondary"
                      className="m-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      style={{ width: 128, height: 128 }}
                      onClick={() => handleIframUrl(1)}

                    >
                      Office
                    </Button>
                  </div>
                  <div>
                    <Button variant="secondary"
                      className="m-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      style={{ width: 96, height: 96 }}
                      onClick={() => handleIframUrl(2)}
                    >
                      Terminal
                    </Button>
                  </div>
                  <div>
                    <Button variant="secondary"
                      className="m-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      style={{ width: 96, height: 96 }}
                      onClick={() => handleIframUrl(3)}
                    >
                      Gitlab
                    </Button>
                  </div>
                  <div>
                    <Button variant="secondary"
                      className="m-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      style={{ width: 96, height: 96 }}
                      onClick={handleClickWorkflow}
                    >
                      Workflow
                    </Button>
                  </div>
                  <div>
                    <Button variant="secondary"
                      className="m-4 bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      style={{ width: 96, height: 96 }}
                    >
                      New App
                    </Button>
                  </div>
                </div>
              </main>
              <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
                <div className="mx-auto grid w-full max-w-6xl gap-2">
                  <h1 className="text-3xl font-semibold">Office</h1>
                </div>
                <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                  <div className="mb-6">
                    <div className="space-y-2 flex flex-col">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold mb-2">Session</h3>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="form-checkbox" />
                          <span>Private</span>
                        </label>
                      </div>
                      <div className="space-y-2 flex flex-col">
                        <Button variant="secondary">Fullscreen</Button>
                        <Button variant="secondary">Screenshot</Button>
                        <Button variant="secondary">Quit</Button>
                        <Button variant="secondary">Pause</Button>
                        <Button variant="secondary">Restart</Button>
                      </div>
                    </div>
                    <div className="space-y-2 flex flex-col">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold mb-2">Data</h3>
                      </div>
                      <div className="space-y-2 flex flex-col">
                        <Button variant="secondary">Download</Button>
                        <Button variant="secondary">Upload</Button>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Container</h3>
                      <div className="space-y-2 flex flex-col">
                        <Button variant="secondary">get logs</Button>
                        <Button variant="secondary">delete session</Button>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Resources</h3>
                      <p>1 gb, 32 Ram</p>
                      <p>running since 5 h</p>
                    </div>
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