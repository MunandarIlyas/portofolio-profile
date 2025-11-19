// src/pages/Profile.jsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { User, Phone, MapPin, Ruler, Mail, Calendar, GraduationCap } from "lucide-react";


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
                            src="/PasFoto.jpg"
                            alt="Foto Profil"
                            className="w-32 h-32 rounded-full object-cover shadow-md"
                        />
                    </div>
                    <div className="md:col-span-2 space-y-3">
                        <div className="flex items-center gap-3 text-lg font-semibold"><User size={18} /> Nama: <span className="font-normal">Ilyas Munandar</span></div>
                        <div className="flex items-center gap-3 text-lg font-semibold"><Mail size={18} /> Email: <span className="font-normal">ilyas.munandarr@gmail.com</span></div>
                        <div className="flex items-center gap-3 text-lg font-semibold"><Calendar size={18} /> Tanggal Lahir: <span className="font-normal">17 Mei 2001</span></div>
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
                        <span>No HP: 089681208344</span>
                    </div>


                    <div className="flex gap-3 items-center p-3 rounded-xl bg-gray-50 border">
                        <MapPin />
                        <span>Alamat: Surakarta, Indonesia</span>
                    </div>


                    <div className="flex gap-3 items-center p-3 rounded-xl bg-gray-50 border">
                        <Ruler />
                        <span>Tinggi Badan: 175 cm</span>
                    </div>
                </CardContent>
            </Card>

            <Card className="shadow-lg border rounded-2xl">
                <CardHeader>
                    <CardTitle className="text-xl">Pendidikan Formal</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative flex flex-col md:flex-row md:items-start md:justify-between">

                        {/* GARIS VERTIKAL (mobile) */}
                        <div className="absolute left-4 top-0 h-full w-1 bg-gray-300 rounded md:hidden"></div>

                        {/* GARIS HORIZONTAL (desktop) */}
                        <div className="absolute top-4 left-0 w-full h-1 bg-gray-300 rounded hidden md:block"></div>

                        {/* ITEM LIST */}
                        <div className="space-y-8 md:space-y-0 md:flex md:w-full md:justify-between">

                            {/* SD */}
                            <div className="relative flex flex-col md:items-center md:text-center pl-10 md:pl-0 md:w-1/4">
                                {/* DOT */}
                                <div className="absolute left-0 md:static w-5 h-5 bg-blue-500 rounded-full border-2 border-white shadow"></div>

                                <p className="mt-2 md:mt-4 text-lg font-semibold">SD Negeri 02 Gawanan</p>
                                <p className="text-sm text-gray-600">2006 – 2012</p>
                            </div>

                            {/* SMP */}
                            <div className="relative flex flex-col md:items-center md:text-center pl-10 md:pl-0 md:w-1/4">
                                <div className="absolute left-0 md:static w-5 h-5 bg-blue-500 rounded-full border-2 border-white shadow"></div>

                                <p className="mt-2 md:mt-4 text-lg font-semibold">SMP Negeri 01 Colomadu</p>
                                <p className="text-sm text-gray-600">2012 – 2015</p>
                            </div>

                            {/* SMA */}
                            <div className="relative flex flex-col md:items-center md:text-center pl-10 md:pl-0 md:w-1/4">
                                <div className="absolute left-0 md:static w-5 h-5 bg-blue-500 rounded-full border-2 border-white shadow"></div>

                                <p className="mt-2 md:mt-4 text-lg font-semibold">SMK Negeri 05 Surakarta</p>
                                <p className="text-sm text-gray-600">2015 – 2018</p>
                            </div>

                            {/* KULIAH */}
                            <div className="relative flex flex-col md:items-center md:text-center pl-10 md:pl-0 md:w-1/4">
                                <div className="absolute left-0 md:static w-5 h-5 bg-blue-500 rounded-full border-2 border-white shadow"></div>

                                <p className="mt-2 md:mt-4 text-lg font-semibold">Universitas Muhammadiyah Surakarta</p>
                                <p className="text-sm text-gray-600">2019 – 2023</p>
                            </div>

                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="shadow-lg border rounded-2xl">
                <CardHeader>
                    <CardTitle className="text-xl">Pengalaman Kerja</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative flex flex-col md:flex-row md:items-start md:justify-between">

                        {/* GARIS VERTIKAL (mobile) */}
                        <div className="absolute left-4 top-0 h-full w-1 bg-gray-300 rounded md:hidden"></div>

                        {/* GARIS HORIZONTAL (desktop) */}
                        <div className="absolute top-4 left-0 w-full h-1 bg-gray-300 rounded hidden md:block"></div>

                        {/* ITEM LIST */}
                        <div className="space-y-8 md:space-y-0 md:flex md:w-full md:justify-between">

                            {/* SD */}
                            <div className="relative flex flex-col md:items-center md:text-center pl-10 md:pl-0 md:w-1/4">
                                {/* DOT */}
                                <div className="absolute left-0 md:static w-5 h-5 bg-blue-500 rounded-full border-2 border-white shadow"></div>

                                <p className="mt-2 md:mt-4 text-lg font-semibold">PT Surya Sejati Pancamulya</p>
                                <p className="text-sm text-gray-600">2018 - 2019 (Design Grafis)</p>
                            </div>

                            {/* SMP */} 
                            <div className="relative flex flex-col md:items-center md:text-center pl-10 md:pl-0 md:w-1/4">
                                <div className="absolute left-0 md:static w-5 h-5 bg-blue-500 rounded-full border-2 border-white shadow"></div>

                                <p className="mt-2 md:mt-4 text-lg font-semibold">PLN Icon Plus</p>
                                <p className="text-sm text-gray-600">Sep 2023 – Jan 2025 (BE Programmer)</p>
                            </div>

                            {/* SMA */}
                            <div className="relative flex flex-col md:items-center md:text-center pl-10 md:pl-0 md:w-1/4">
                                <div className="absolute left-0 md:static w-5 h-5 bg-blue-500 rounded-full border-2 border-white shadow"></div>

                                <p className="mt-2 md:mt-4 text-lg font-semibold">PT Sakti Pangan Perkasa</p>
                                <p className="text-sm text-gray-600">Feb 2025 – Nov 2025 (Fullstack Developer)</p>
                            </div>

                        </div>
                    </div>
                </CardContent>

            </Card>


        </div>
    );
}