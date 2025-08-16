'use client'

interface DownloadButtonProps {
  children: React.ReactNode
  platform?: 'mac' | 'windows'
}

export function DownloadButton({ children, platform = 'mac' }: DownloadButtonProps) {
  const handleDownload = () => {
    // IMPORTANT: Replace these URLs with your actual download links!
    // 
    // Option 1: GitHub Releases (recommended)
    // 1. Go to https://github.com/Kartikayy007/InterviewAceLandingPage/releases
    // 2. Create a new release
    // 3. Upload your .dmg and .exe files
    // 4. Copy the direct download URLs and paste them below
    //
    // Example GitHub Release URLs:
    // mac: 'https://github.com/Kartikayy007/InterviewAceLandingPage/releases/download/v1.0.0/InterviewAce-1.0.dmg'
    // windows: 'https://github.com/Kartikayy007/InterviewAceLandingPage/releases/download/v1.0.0/InterviewAceSetup.exe'
    
    const downloadUrls = {
      mac: 'https://github.com/Kartikayy007/InterviewAceLandingPage/releases/download/v1.0.0/InterviewAce.1.0.dmg',
      windows: 'https://github.com/Kartikayy007/InterviewAceLandingPage/releases/download/v1.0.0/InterviewAceSetup.exe'
    }
    
    const url = downloadUrls[platform]
    
    if (url) {
      // Direct browser navigation for download
      window.open(url, '_blank')
    } else {
      console.error('Download URL not configured for platform:', platform)
      alert('Download link not available yet. Please check back later.')
    }
  }

  return (
    <div onClick={handleDownload} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  )
}