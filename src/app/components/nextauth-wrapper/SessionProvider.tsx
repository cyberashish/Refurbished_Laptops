"use client"

import { SessionProvider as NextSessionProvider } from "next-auth/react"

const SessionProvider = ({children}:any) => {
  return (
     <NextSessionProvider>
     {children}
     </NextSessionProvider>
  )
}

export default SessionProvider
