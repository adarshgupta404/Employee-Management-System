import React from 'react'

const LoadingProfile = () => {
  return (
    <div className="flex h-screen justify-center items-center">
<div class="border border-blue-300 shadow rounded-md p-4 pb-6 mb-14 max-w-sm w-full mx-auto">
        <div class="animate-pulse">
          <div className="flex justify-center items-center mt-4 mb-4">
        <div class="rounded-full bg-slate-700 w-24 h-24 mb-3"></div> 
        </div>  
          <div class="flex-1 space-y-6 py-1">
          <div class="space-y-1 ">
              <div class="grid grid-cols-3">
                <div class="h-2 rounded col-span-1"></div>
                <div class="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div class="grid grid-cols-3 gap-1 m-4">
                <div class="h-2 rounded col-span-1"></div>
                <div class="h-2 bg-slate-700 rounded col-span-1 mb-6"></div>
              </div>
            </div>
            <div className="flex items-center">
            <div class="h-2 bg-slate-700 w-48 rounded mt-2 mb-4 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default LoadingProfile
