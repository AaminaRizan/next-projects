import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const display=localFont({src:"./fonts/display.otf",variable:"--font-display",display:"swap"});
const body=localFont({src:"./fonts/body.otf",variable:"--font-body",display:"swap"});
const mono=localFont({src:"./fonts/mono.otf",variable:"--font-label",display:"swap"});
export const metadata: Metadata = {title:"Third Floor Boxing Club | Learn the craft",description:"A technique-first boxing club concept. Learn the fundamentals and find your rhythm.",icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body className={`${display.variable} ${body.variable} ${mono.variable}`}>{children}</body></html>}
