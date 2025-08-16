'use client'

interface DownloadButtonProps {
  children: React.ReactNode
  platform?: 'mac' | 'windows'
}

export function DownloadButton({ children, platform = 'mac' }: DownloadButtonProps) {
  const handleDownload = () => {
    // Update these URLs when you have your actual installer files
    // Place your .dmg and .exe files in the public folder
    // Example: /InterviewAce.dmg and /InterviewAce.exe
    
    const downloadUrls = {
      mac: '/InterviewAce 1.0.dmg',  // Your actual Mac installer
      windows: '/InterviewAceSetup.exe' // Your actual Windows installer (150MB)
    }
    
    const url = downloadUrls[platform]
    
    if (url) {
      // Create a temporary link and trigger download
      const link = document.createElement('a')
      link.href = url
      link.download = platform === 'mac' ? 'InterviewAce 1.0.dmg' : 'InterviewAceSetup.exe'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      console.error('Download URL not configured for platform:', platform)
    }
  }

  return (
    <div onClick={handleDownload} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  )
}