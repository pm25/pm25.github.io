import { HashRouter as Router, Routes, Route } from "react-router";

import Layout from "@/layout";
import { loadLazy } from "@/lib/loadComponent";
import { ThemeProvider } from "@/components/theme-provider";

const About = loadLazy(() => import("@/pages/about"));
const Movies = loadLazy(() => import("@/pages/movies"));
const Music = loadLazy(() => import("@/pages/music"));
const Projects = loadLazy(() => import("@/pages/projects"));
const Articles = loadLazy(() => import("@/pages/articles"));
const ArticlePage = loadLazy(() => import("@/pages/articles/page"));

export default function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<About />} />
                        <Route path="movies" element={<Movies />} />
                        <Route path="music" element={<Music />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="articles" element={<Articles />} />
                        <Route path="/articles/:slug" element={<ArticlePage />} />
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}
