"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="text-gray-600 body-font bg-slate-300">
      <div className="container mx-auto flex flex-wrap justify-between p-2 flex-col md:flex-row items-center">
        <div>
          <Link
            className='className="ml-3 text-lg flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"'
            href="/"
          >
            Dashboard
          </Link>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <Link href="/logout">Logout</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
