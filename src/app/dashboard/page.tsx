import { Metadata } from "next"

import Header from "../header/header"
import Stats from "./components/stats"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "User dashboard.",
}

export default function DashboardPage() {
  return (
    <>
      <div className="flex-col md:flex">
        <Header />
        <div className="flex-1 space-y-4 p-10 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          </div>
          <h3 className="text-2xl text-muted-foreground tracking-tight">Hello Bab' Twala</h3>
          <Stats />
        </div>
      </div>
    </>
  )
}