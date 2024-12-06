import { Button } from "@/components/ui/button"
 import Page from "./pricing"
import { Navbar } from "./navbar"
import Hero from "./hero"
export default function Home() {
  return (
    <>
    <Navbar/>
    <div className = "mt-52">
    <Hero/>
    </div>
    <Page/>
    
    </>
  )
}