
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
    } else if (nb === 4) {
      setUrl('https://localhost:6904')
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
      <div className="flex items-start justify-start bg-transparent">
        <div className={`flex flex-col fixed top-0 left-0 text-white h-screen ${sidebarVisible ? 'sidebar-reveal' : 'sidebar-hide'}`}>
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
          <div className="flex flex-col sm:pl-14 w-96 ">
            <div className="flex items-start">
              <main className="flex-0 gap-4 p-4 bg-slate-800 min-h-screen">
                <div className='flex flex-col'>
                  <p className=" center p-4">Projets</p>
                  <p className="center p-4">My first project</p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="secondary"
                      className="m-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      style={{ width: 128, height: 128 }}
                      onClick={() => handleIframUrl(1)}

                    >
                      Office
                    </Button>
                    <Button variant="secondary"
                      className="text-xs bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      style={{ width: 64, height: 64 }}
                      onClick={() => handleIframUrl(2)}
                    >
                      Terminal
                    </Button>
                    <Button variant="secondary"
                      className="text-xs bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      style={{ width: 64, height: 64 }}
                      onClick={() => handleIframUrl(3)}
                    >
                      Gitlab
                    </Button>
                    <Button variant="secondary"
                      className="text-xs bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      style={{ width: 64, height: 64 }}
                      onClick={() => handleIframUrl(4)}
                    >
                      vs code
                    </Button>
                    <Button variant="secondary"
                      className="text-xs bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      style={{ width: 64, height: 64 }}
                      onClick={handleClickWorkflow}
                    >
                      Workflow
                    </Button>
                    <Button variant="secondary"
                      className="text-xs bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      style={{ width: 64, height: 64 }}
                    >
                      New App
                    </Button>
                  </div>
                </div>
              </main>
              <main className=" backdrop-blur-sm bg-white/30 flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
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