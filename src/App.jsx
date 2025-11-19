// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import Profile from "@/pages/Profile";
import Portfolio from "@/pages/Portofolio";


export default function App() {
return (
<Router>
<MainLayout>
<Routes>
<Route path="/" element={<Profile />} />
<Route path="/portfolio" element={<Portfolio />} />
</Routes>
</MainLayout>
</Router>
);
}