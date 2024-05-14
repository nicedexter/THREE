"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Home,
  LineChart,
  Package,
  Package2,
  Settings, Users2,
  Sun, Moon,
  MonitorPause,
  Maximize,
  RotateCcw,
  LogOut,
  Wallpaper
} from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import { useEffect, useRef, useState } from "react"

const workbenches = [
  {
    id: 1,
    name: 'Office',
    url: 'https://localhost:6901/'
  },
  {
    id: 2,
    name: 'Terminal',
    url: 'https://localhost:6902'
  },
  {
    id: 3,
    name: 'Gitlab',
    url: 'https://localhost:6903'
  },
  {
    id: 4,
    name: 'VS Code',
    url: 'https://localhost:6904'
  },
  {
    id: 5,
    name: 'Flowbite',
    url: 'http://localhost:3131'
  },
  {
    id: 6,
    name: 'Workflow',
    url: 'http://localhost:5678'
  },
  {
    id: 7,
    name: 'XPra',
    url: 'http://localhost:6907'
  },
  {
    id: 8,
    name: 'Supabase',
    url: 'http://localhost:8000'
  }
]

export default function Dashboard() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const { setTheme } = useTheme()
  const [workbench, setWorkbench] = useState(workbenches[0])
  const [sidebarVisible, setSidebarVisible] = useState(true)
  const [fullScreen, setFullScreen] = useState(false)


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
    const w = workbenches.find(w => w.id === nb)
    if (!w) return

    setWorkbench(w)
    setSidebarVisible(!sidebarVisible)
  }

  const handleFullScreen = () => {
    setFullScreen(!fullScreen)
    setSidebarVisible(!sidebarVisible)
  }

  return (
    <div className="h-screen">
      <TooltipProvider >
        <aside className="bg-slate-800 fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r border-slate-600 sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5 ">
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
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
                  className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                  onClick={handleIframeClick}
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
      <iframe
        src={workbench.url}
        
        frameBorder="0"
        width="100%"
        height="100%"
        className="absolute top-0 left-14 h-screen overflow-hidden"
        onClick={handleIframeClick}
        allowFullScreen={true}
        allow="autoplay; microphone; camera; clipboard-read; clipboard-write; window-management;"
        ref={iframeRef}
      />
      <div className={`absolute top-0 left-0  h-screen ${sidebarVisible ? '' : 'iframe-overlay-button-hide'}`} onClick={handleIframeClick}>
      </div>
      <div className="flex items-start justify-start bg-transparent ">
        <div className={`flex flex-col fixed top-0 left-0 text-white  h-screen ${sidebarVisible ? 'sidebar-reveal' : 'sidebar-hide'}`}>
          <div className="flex flex-col sm:pl-14 ">
            <div className="flex items-start ">
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
                        <Link href="#"
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                          <Package className="h-4 w-4" />
                          My first project
                        </Link>
                      </nav>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {workbenches.map(w => (
                      <Button variant="secondary"
                        className="text-xs bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        style={{ width: 80, height: 80 }}
                        onClick={() => handleIframUrl(w.id)}
                      >
                        {w.name}
                      </Button>
                    ))}
                    <Button variant="secondary"
                      className="text-xs bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      style={{ width: 80, height: 80 }}
                    >
                      New App
                    </Button>
                  </div>
                </div>
                <div className="mt-32">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </main>
              {/* <main className="backdrop-blur-md flex min-h-[calc(100vh_-_theme(spacing.16))] h-full  flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
                <div className="flex justify-between items-center">
                  <h1 className="text-3xl font-semibold">{workbench.name}</h1>
                  <Button variant="ghost"
                    className=" text-white text-xl"
                    style={{ width: 80, height: 80 }}
                    onClick={() => setSidebarVisible(false)}
                  >
                    X
                  </Button>
                </div>
                <div className="mx-auto grid  items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                  <div className="mb-6">
                    <div className="space-y-2 flex flex-col">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold mb-1">Session</h3>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="form-checkbox" />
                          <span>Private</span>
                        </label>
                      </div>
                      <div className="space-y-2 flex flex-col">
                        <Button variant="outline" className="text-slate-700" onClick={handleFullScreen}><Maximize className="mr-2 h-4 w-4" />Fullscreen</Button>
                        <Button variant="outline" className="text-slate-700"><Wallpaper className="mr-2 h-4 w-4" />Screenshot</Button>
                        <Button variant="outline" className="text-slate-700"><LogOut className="mr-2 h-4 w-4" /> Quit</Button>
                        <Button variant="outline" className="text-slate-700"><MonitorPause className="mr-2 h-4 w-4" /> Pause</Button>
                        <Button variant="outline" className="text-slate-700"><RotateCcw className="mr-2 h-4 w-4" />Restart</Button>
                      </div>
                    </div>
                    <div className="space-y-2 flex flex-col  mt-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold mb-1">Data</h3>
                      </div>
                      <div className="space-y-2 flex flex-col">
                        <Button variant="outline" className="text-slate-700"><Wallpaper className="mr-2 h-4 w-4" />Download</Button>
                        <Button variant="outline" className="text-slate-700"><Wallpaper className="mr-2 h-4 w-4" />Upload</Button>
                      </div>
                    </div>
                    <div className="space-y-2 flex flex-col mt-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold mb-1">Container</h3>
                      </div>
                      <div className="space-y-2 flex flex-col ">
                        <Button variant="outline" className="text-slate-700"><Wallpaper className="mr-2 h-4 w-4" />get logs</Button>
                        <Button variant="outline" className="text-slate-700"><Wallpaper className="mr-2 h-4 w-4" />delete session</Button>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 mt-4">Resources</h3>
                      <p>1 gb, 32 Ram</p>
                      <p>running since 5 h</p>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
              </main> */}
            </div>
          </div>
        </div>
        {/* <Button variant="secondary" className="z-50 bg-gray-500 hover:bg-gray-700 text-white" onClick={handleIframeClick}>:::</Button> */}
      </div>
    </div>
  )
}
