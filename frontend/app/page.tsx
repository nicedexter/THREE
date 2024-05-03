"use client"

import React from 'react'

export default function Home() {

  const [url, setUrl] = React.useState('https://localhost:6901/')
  const [sidebarVisible, setSidebarVisible] = React.useState(true)

  const handleIframeClick = () => {
    console.log('Iframe clicked')
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


  return (
    <div className="flex justify-center items-center h-screen">

      <iframe
        src={url}
        frameBorder="0"
        width="100%"
        height="100%"
        className="absolute top-0 left-0 w-full h-screen overflow-hidden"
        onClick={handleIframeClick}
      />
      <div className={`absolute top-0 left-0 w-full h-screen ${sidebarVisible ? '' : 'iframe-control-hidden'}`} onClick={handleIframeClick}></div>

      <div className={
        `flex fixed top-0 left-0 text-white w-4/6 h-screen ${sidebarVisible ? '' : 'sidebar-hidden'}`
      }
      >
        <nav
          className="w-64 h-screen">
          <div className="flex bg-gray-800 h-screen">
            <div>
              <div>
                <p className="text-white center p-4">CHORUS</p>
              </div>

              <div className=''>
                <p className="text-white center p-4">Projets</p>
                <p className="text-white center p-4">My first project</p>
                <div className='center w-full'>
                  <button
                    className="m-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    style={{ width: 96, height: 96 }}
                    onClick={() => handleIframUrl(1)}
                  >
                    Office
                  </button>
                </div>
                <div>
                  <button
                    className="m-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    style={{ width: 96, height: 96 }}
                    onClick={() => handleIframUrl(2)}
                  >
                    Terminal
                  </button>
                </div>
                <div>
                  <button
                    className="m-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    style={{ width: 96, height: 96 }}
                    onClick={() => handleIframUrl(3)}
                  >
                    Gitlab
                  </button>
                </div>
                <div>
                  <button
                    className="m-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    style={{ width: 96, height: 96 }}
                    onClick={handleClickWorkflow}
                  >
                    Workflow
                  </button>
                  </div> 
                <div>
                  <button
                    className="m-4 bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    style={{ width: 96, height: 96 }}
                  >
                    New App
                  </button>
                </div>
              </div>
            </div>

          </div>
        </nav>
        <div className='w-full bg-white '>
          <main className="w-3/4 pl-4 border-l text-black p-8">
            <div className="mb-6">
              <h2 className="font-semibold mb-2">Office</h2>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Workbench</span>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span>Private</span>
                  </label>
                </div>
                <div className="space-y-1 flex ">
                  <button>Fullscreen</button>
                  <button>Screenshot</button>
                  <button>Quit</button>
                  <button>Pause</button>
                  <button>Restart</button>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Data</h3>
                <div className="space-y-1">
                  <button>Download</button>
                  <button>Upload</button>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Container</h3>
                <div className="space-y-1">
                  <button>get logs</button>
                  <button>delete session</button>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Resources</h3>
                <p>1 gb, 32 Ram</p>
                <p>running since 5 h</p>
              </div>
            </div>
          </main>
        </div>
        <button className="bg-gray-500 hover:bg-gray-700 text-white" onClick={handleIframeClick}>:::</button>
      </div >
    </div >
  )
}
