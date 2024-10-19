'use client'
import Link from "next/link"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const [selected, setSelected] = useState("dashboard")

  useEffect(() => {
    const savedSelection = localStorage.getItem("selectedLink")
    if (savedSelection) {
      setSelected(savedSelection)
    }
  }, [])

  const handleClick = (link: string) => {
    setSelected(link)
    localStorage.setItem("selectedLink", link)
  }

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          selected === "dashboard" ? "text-foreground" : "text-muted-foreground"
        )}
        onClick={() => handleClick("dashboard")}
      >
        Dashboard
      </Link>
      <Link
        href="/customers"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          selected === "customers" ? "text-foreground" : "text-muted-foreground"
        )}
        onClick={() => handleClick("customers")}
      >
        Accounts
      </Link>
    </nav>
  )
}