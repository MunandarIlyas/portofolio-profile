// src/pages/Profile.jsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { User, Phone, MapPin, Ruler, Mail, Calendar } from "lucide-react";


export default function Profile() {
return (
<div className="p-4 animate-fadeIn space-y-6">
<h2 className="text-3xl font-bold mb-4">Profil Saya</h2>


{/* FOTO + NAMA */}
<Card className="shadow-lg border rounded-2xl">
<CardHeader>
<CardTitle className="flex items-center gap-3 text-xl">
<User /> Biodata Diri
</CardTitle>
</CardHeader>
<CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
<div className="flex justify-center">
<img
src="https://via.placeholder.com/150"
alt="Foto Profil"
className="w-32 h-32 rounded-full object-cover shadow-md"
/>
</div>
<div className="md:col-span-2 space-y-3">
<div className="flex items-center gap-3 text-lg font-semibold"><User size={18}/> Nama: <span className="font-normal">Nama Kamu</span></div>
<div className="flex items-center gap-3 text-lg font-semibold"><Mail size={18}/> Email: <span className="font-normal">email@example.com</span></div>
<div className="flex items-center gap-3 text-lg font-semibold"><Calendar size={18}/> Tanggal Lahir: <span className="font-normal">01 Januari 2000</span></div>
</div>
</CardContent>
</Card>


{/* DATA LAIN */}
<Card className="shadow-lg border rounded-2xl">
<CardHeader>
<CardTitle className="text-xl">Informasi Tambahan</CardTitle>
</CardHeader>
<CardContent className="grid md:grid-cols-2 gap-6">
<div className="flex gap-3 items-center p-3 rounded-xl bg-gray-50 border">
<Phone />
<span>No HP: 08123456789</span>
</div>


<div className="flex gap-3 items-center p-3 rounded-xl bg-gray-50 border">
<MapPin />
<span>Alamat: Jakarta, Indonesia</span>
</div>


<div className="flex gap-3 items-center p-3 rounded-xl bg-gray-50 border">
<Ruler />
<span>Tinggi Badan: 170 cm</span>
</div>
</CardContent>
</Card>
</div>
);
}