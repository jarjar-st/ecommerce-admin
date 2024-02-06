"use client"

import { cn } from "@/lib/utils"
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";



function MainNav({
    className,
    ...props
}: React.HtmlHTMLAttributes<HTMLElement>) {
  const pathName = usePathname();
  const params = useParams();
  const routes = [
    {
      href: `/${params.storeId}/settings`,
      label: "Settings",
      active: pathName === `/${params.storeId}/settings`
    },
  ];
  
  return (
    <nav className={cn(
      " flex space-x-4 items-center lg:space-x-6",
      className
    )}>
      {routes.map((route, index) => (
        <Link
        href={route.href}
        key={index}
        className={cn(
          " text-sm font-medium transition-colors hover:text-primary",
          route.active ? "text-black dark:text-white" : " text-muted-foreground"
        )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

export default MainNav