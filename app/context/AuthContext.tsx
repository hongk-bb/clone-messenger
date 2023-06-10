'use client'

import { SessionProvider } from 'next-auth/react'

interface AuthContextProps {
  children: React.ReactNode
}

{
  /* All components that need to use authentication information */
}
const AuthContext: React.FC<AuthContextProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthContext
