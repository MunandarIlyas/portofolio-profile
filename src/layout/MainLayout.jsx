// src/layout/MainLayout.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Home, Briefcase } from "lucide-react";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";


export default function MainLayout({ children }) {
const [open, setOpen] = useState(false);


return (
<div className="flex min-h-screen bg-gray-100">
{/* SIDEBAR DESKTOP */}
<aside className="hidden md:flex w-64 bg-white shadow-xl flex-col p-4 gap-4">
<h1 className="text-2xl font-bold mb-6">Portofolio</h1>
<nav className="flex flex-col gap-3">
<Link className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-xl" to="/">
<Home size={18} /> Profile
</Link>
<Link className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-xl" to="/portfolio">
<Briefcase size={18} /> Portfolio
</Link>
</nav>
</aside>


{/* MOBILE FLOATING BUTTON */}
<button
onClick={() => setOpen(!open)}
className="md:hidden fixed bottom-6 right-6 p-4 bg-black text-white rounded-full shadow-lg"
>
<Menu size={20} />
</button>


{/* MOBILE COMMAND MENU */}
{open && (
<div className="md:hidden fixed bottom-20 right-4 bg-white rounded-xl shadow-2xl w-64 border p-2">
<Command>
<CommandList>
<CommandGroup heading="Navigasi">
<CommandItem onSelect={() => setOpen(false)} asChild>
<Link to="/" className="flex items-center gap-2"><Home size={16}/> Profile</Link>
</CommandItem>
<CommandItem onSelect={() => setOpen(false)} asChild>
<Link to="/portfolio" className="flex items-center gap-2"><Briefcase size={16}/> Portfolio</Link>
</CommandItem>
</CommandGroup>
</CommandList>
</Command>
</div>
)}


{/* MAIN CONTENT */}
<main className="flex-1 p-6">
{children}
</main>
</div>
);
}