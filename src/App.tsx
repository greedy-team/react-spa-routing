import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Header/Header";
import { Routes, Route } from "react-router-dom";

import NewsDisplay from "./components/NewsDisplay";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col items-center justify-start min-h-screen">
        <Header />
        <div className="w-full max-w-6xl">
          <main className="p-4">
            <Routes>
              <Route path="/:category?" element={<NewsDisplay />} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
