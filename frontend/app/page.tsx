
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
  Settings, Users2, Users,
  Sun, Moon
} from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import { useState } from "react"

export default function Dashboard() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const { setTheme } = useTheme()
  const [url, setUrl] = useState('https://localhost:6901/')
  const [sessionName, setSessionName] = useState('Office')
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
    if (nb === 1) {
      setUrl('https://localhost:6901/')
      setSessionName('Office')
    } else if (nb === 2) {
      setUrl('https://localhost:6902')
      setSessionName('Terminal')
    } else if (nb === 3) {
      setUrl('https://localhost:6903')
      setSessionName('Gitlab')
    } else if (nb === 4) {
      setUrl('https://localhost:6904')
      setSessionName('VS Code')
    }
    // setSidebarVisible(!sidebarVisible)
  }

  const handleClickWorkflow = () => {
    fetch('http://172.17.0.1:5678/webhook-test/fe4740c0-40d9-4f8f-91fb-1c791c800ad8').then(data => console.log(data))
  }

  const handleFullScreen = () => {
    setFullScreen(!fullScreen)
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
        allowFullScreen={true}
        allow="autoplay; microphone; camera; clipboard-read; clipboard-write; window-management;"
        ref={iframeRef}
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
          <div className="flex flex-col sm:pl-14">
            <div className="flex items-start">
              <main className="flex-0 gap-4 p-4 bg-slate-800 min-h-screen w-64">
                <div className='flex flex-col'>
                  <p className=" center p-4">Projets</p>
                  <div className="flex h-full max-h-screen flex-col gap-2 mb-4">
                    <div className="flex-1">
                      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        <Link href="#"
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                          <Home className="h-4 w-4" />
                          Dashboard
                          <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                            6
                          </Badge>
                        </Link>

                        <Link href="#"
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                          <Users className="h-4 w-4" />
                          Project 98
                        </Link>
                        <Link href="#"
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                          <LineChart className="h-4 w-4" />
                          Project 101
                        </Link>
                        <Link href="#"
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                          <Package className="h-4 w-4" />
                          My first project{" "}
                        </Link>
                      </nav>
                    </div>
                  </div>


                  <div className="flex flex-wrap gap-4">
                    <Button variant="secondary"
                      className="text-xs bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      style={{ width: 80, height: 80 }}
                      onClick={() => handleIframUrl(1)}

                    >
                      Office
                    </Button>
                    <Button variant="secondary"
                      className="text-xs bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      style={{ width: 80, height: 80 }}
                      onClick={() => handleIframUrl(2)}
                    >
                      Terminal
                    </Button>
                    <Button variant="secondary"
                      className="text-xs bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      style={{ width: 80, height: 80 }}
                      onClick={() => handleIframUrl(3)}
                    >
                      Gitlab
                    </Button>
                    <Button variant="secondary"
                      className="text-xs bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      style={{ width: 80, height: 80 }}
                      onClick={() => handleIframUrl(4)}
                    >
                      vs code
                    </Button>
                    <Button variant="secondary"
                      className="text-xs bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      style={{ width: 80, height: 80 }}
                      onClick={handleClickWorkflow}
                    >
                      Workflow
                    </Button>
                    <Button variant="secondary"
                      className="text-xs bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      style={{ width: 80, height: 80 }}
                    >
                      New App
                    </Button>
                  </div>
                </div>
                <div>


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
              <main className="backdrop-blur-sm bg-white/30 flex min-h-[calc(100vh_-_theme(spacing.16))] h-full flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
                <div className="flex justify-between items-center">
                  <h1 className="text-3xl font-semibold">{sessionName}</h1>
                  <Button variant="ghost"
                    className=" text-white text-xl"
                    style={{ width: 80, height: 80 }}
                    onClick={() => setSidebarVisible(false)}
                  >
                    X
                  </Button>
                </div>
                <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
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
                        <Button variant="outline" className="text-slate-700">Fullscreen</Button>
                        <Button variant="outline" className="text-slate-700">Screenshot</Button>
                        <Button variant="outline" className="text-slate-700">Quit</Button>
                        <Button variant="outline" className="text-slate-700">Pause</Button>
                        <Button variant="outline" className="text-slate-700">Restart</Button>
                      </div>
                    </div>
                    <div className="space-y-2 flex flex-col  mt-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold mb-1">Data</h3>
                      </div>
                      <div className="space-y-2 flex flex-col">
                        <Button variant="outline" className="text-slate-700">Download</Button>
                        <Button variant="outline" className="text-slate-700">Upload</Button>
                      </div>
                    </div>
                    <div className="space-y-2 flex flex-col mt-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold mb-1">Container</h3>
                      </div>
                      <div className="space-y-2 flex flex-col ">
                        <Button variant="outline" className="text-slate-700">get logs</Button>
                        <Button variant="outline" className="text-slate-700">delete session</Button>
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
              </main>
            </div>
          </div>
        </div>
        <Button variant="secondary" className="z-50 bg-gray-500 hover:bg-gray-700 text-white" onClick={handleIframeClick}>:::</Button>
      </div>
    </div>

  )
}