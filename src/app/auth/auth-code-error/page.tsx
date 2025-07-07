import Link from 'next/link'

export default function AuthCodeError() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8">
          <h1 className="text-2xl font-bold mb-4 text-red-400">Authentication Error</h1>
          
          <p className="text-gray-300 mb-6">
            There was an issue confirming your email address. This could be because:
          </p>
          
          <ul className="text-left text-gray-300 mb-6 space-y-2">
            <li>• The confirmation link has expired</li>
            <li>• The link was already used</li>
            <li>• There was a technical issue</li>
          </ul>
          
          <div className="space-y-4">
            <Link 
              href="/"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Return to Home
            </Link>
            
            <p className="text-sm text-gray-400">
              Need help? Contact support at support@interviewace.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
