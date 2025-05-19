"use client"

import { useSession } from "next-auth/react"

export default function UserInfo() {
    const session = useSession()
  return (
      <div>UserInfo { JSON.stringify(session)}</div>
  )
}
