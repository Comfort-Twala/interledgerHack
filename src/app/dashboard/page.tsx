'use client'

import Header from "../header/header"
import Stats from "./components/stats"
import { useState, useEffect } from "react"
import supabase from "../api/client"

export default function DashboardPage() {

  const [user, setUser] = useState<any>([]);
  
  const fetchUser = async () => {
    let { data: user, error } = await supabase
      .from('user')
      .select('*')
      .eq("email", "kontreitroos@gmail.com");
    console.log(user)
    setUser(user)
  }
  
  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <>
      <div className="flex-col md:flex">
        <Header />
        <div className="flex-1 space-y-4 p-10 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          </div>
          <h3 className="text-2xl text-muted-foreground tracking-tight">Hello {user[0]?.first_name}</h3>
          <Stats />
        </div>
      </div>
    </>
  )
}