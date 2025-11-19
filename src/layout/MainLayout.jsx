// src/layout/MainLayout.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Home, Briefcase, X } from "lucide-react";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";

export default function MainLayout({ children }) {
    const [openSidebar, setOpenSidebar] = useState(true);   // DESKTOP SIDEBAR
    const [openMobile, setOpenMobile] = useState(false);    // MOBILE MENU

    return (
        <div className="flex min-h-screen bg-gray-100">

            {/* SIDEBAR DESKTOP */}
            <aside
                className={`
                    hidden md:flex bg-white shadow-xl flex-col p-4 gap-4 border-r
                    transition-all duration-300 overflow-hidden
                    ${openSidebar ? "w-64" : "w-0 p-0"}
                `}
            >
                {openSidebar && (
                    <>
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-2xl font-bold">Portofolio</h1>
                            <X
                                className="cursor-pointer"
                                onClick={() => setOpenSidebar(false)}
                            />
                        </div>

                        <nav className="flex flex-col gap-3">
                            <Link className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-xl" to="/">
                                <Home size={18} /> Profile
                            </Link>
                            <Link className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-xl" to="/portfolio">
                                <Briefcase size={18} /> Portfolio
                            </Link>
                        </nav>
                    </>
                )}
            </aside>


            {/* DESKTOP SHOW / HIDE BUTTON */}
            {!openSidebar && (
                <button
                    onClick={() => setOpenSidebar(true)}
                    className="hidden md:flex absolute left-2 top-2 p-2 bg-white shadow-lg rounded-lg border"
                >
                    <Menu size={20} />
                </button>
            )}


            {/* MOBILE FLOATING BUTTON */}
            <button
                onClick={() => setOpenMobile(!openMobile)}
                className="md:hidden fixed bottom-6 right-6 p-4 bg-black text-white rounded-full shadow-lg"
            >
                <Menu size={20} />
            </button>


            {/* MOBILE COMMAND MENU */}
            {openMobile && (
                <div className="md:hidden fixed bottom-20 right-4 bg-white rounded-xl shadow-2xl w-64 border p-2">
                    <Command>
                        <CommandList>
                            <CommandGroup heading="Navigasi">
                                <CommandItem onSelect={() => setOpenMobile(false)} asChild>
                                    <Link to="/" className="flex items-center gap-2"><Home size={16} /> Profile</Link>
                                </CommandItem>
                                <CommandItem onSelect={() => setOpenMobile(false)} asChild>
                                    <Link to="/portfolio" className="flex items-center gap-2"><Briefcase size={16} /> Portfolio</Link>
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
