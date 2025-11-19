// src/components/PhotoViewer.jsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";


export default function PhotoViewer({ photos = [] }) {
const [index, setIndex] = useState(0);
const [zoom, setZoom] = useState(1);


const next = () => setIndex((prev) => (prev + 1) % photos.length);
const prev = () => setIndex((prev) => (prev - 1 + photos.length) % photos.length);


const zoomIn = () => setZoom((z) => Math.min(z + 0.2, 3));
const zoomOut = () => setZoom((z) => Math.max(z - 0.2, 0.5));


return (
<div className="space-y-2">
<div className="relative w-full h-48 overflow-hidden rounded-lg border">
<img
src={photos[index]}
className="object-contain w-full h-full transition-transform"
style={{ transform: `scale(${zoom})` }}
/>


{/* Left Arrow */}
<button
onClick={prev}
className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1"
>
<ChevronLeft />
</button>


{/* Right Arrow */}
<button
onClick={next}
className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1"
>
<ChevronRight />
</button>
</div>


<div className="flex items-center gap-2 justify-center">
<Button variant="outline" size="icon" onClick={zoomOut}>
<ZoomOut className="h-4 w-4" />
</Button>
<Button variant="outline" size="icon" onClick={zoomIn}>
<ZoomIn className="h-4 w-4" />
</Button>
</div>
</div>
);
}