'use client'

import { useState } from 'react'
import { downloadMacApp } from '@/lib/auth-actions'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

interface DownloadButtonProps {
  children: React.ReactNode
}

export function DownloadButton({ children }: DownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleDownload = async () => {
    setIsLoading(true)
    try {
      const userAgent = navigator.userAgent
      const result = await downloadMacApp(userAgent)
      toast.success(result.message)
      
      // Create a temporary download link
      const link = document.createElement('a')
      link.href = result.downloadUrl
      link.download = 'InterviewAce.dmg'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Download failed')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button onClick={handleDownload} disabled={isLoading} className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full">
          <Loader2 className="h-4 w-4 animate-spin text-white" />
        </div>
      )}
      {children}
    </button>
  )
}
