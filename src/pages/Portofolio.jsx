// src/pages/Portfolio.jsx
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import PhotoViewer from "@/components/PhotoViewer";


export default function Portofolio() {
const [viewerOpen, setViewerOpen] = useState(false);
const [viewerImages, setViewerImages] = useState([]);
const [viewerIndex, setViewerIndex] = useState(0);


const projects = [
{
title: "Website Portofolio",
desc: "Website pribadi menggunakan React + Tailwind + Vite.",
link: "https://github.com/username/portfolio",
images: ["/1.jpg", "/2.jpg", "/3.jpg"]
},
{
title: "API Hotel Scraper",
desc: "Scraper hotel otomatis menggunakan FastAPI dan PostgreSQL.",
link: "https://github.com/username/hotel-scraper",
images: ["/2.jpg", "/3.jpg"]
},
{
title: "Sistem Autoposting IG/FB",
desc: "Generate konten otomatis dari data scraper menggunakan AI.",
link: "https://github.com/username/auto-post-ai",
images: ["/3.jpg", "/1.jpg"]
}
];


const openViewer = (images, index) => {
setViewerImages(images);
setViewerIndex(index);
setViewerOpen(true);
};


return (
<div className="p-4 animate-fadeIn">
<h2 className="text-3xl font-bold mb-4">Portofolio</h2>
<p className="text-gray-600 mb-6">Kumpulan project kamu ditampilkan di sini.</p>


<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
{projects.map((project, pIndex) => (
<Card key={pIndex} className="shadow-sm hover:shadow-md transition">
<CardHeader>
<CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
</CardHeader>


<CardContent>
<p className="text-gray-600 mb-3">{project.desc}</p>


<div className="grid grid-cols-3 gap-2">
{project.images.slice(0, 3).map((img, i) => (
<img
key={i}
src={img}
className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80"
onClick={() => openViewer(project.images, i)}
/>
))}
</div>
</CardContent>


<CardFooter>
<Button
variant="outline"
className="flex items-center gap-2"
onClick={() => window.open(project.link, "_blank")}
>
<Github className="w-4 h-4" />
Lihat di GitHub
</Button>
</CardFooter>
</Card>
))}
</div>


{viewerOpen && (
<PhotoViewer
images={viewerImages}
initialIndex={viewerIndex}
onClose={() => setViewerOpen(false)}
/>
)}
</div>
);
}