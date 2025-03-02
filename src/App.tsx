import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Home from "./components/home";
import About from "./components/about";
import Service from "./components/service";
import Projects from "./components/projects";
import SingleProject from "./components/single-project";
import Blog from "./components/blog";
import Contact from "./components/contact";
import BlogDetails from "./components/blog-details";

// Import new feature components
import WeaponDetection from "./components/features/WeaponDetection";
import HelmetDetection from "./components/features/HelmetDetection";
import SmokeDetection from "./components/features/SmokeDetection";
import ReportIncident from "./components/features/ReportIncident";
import ChatBot from "./components/features/ChatBot";

const router = createBrowserRouter([
  { path: "/", element: <Home /> }, 
  { path: "/about", element: <About /> }, 
  { path: "/service", element: <Service /> }, 
  { path: "/projects", element: <Projects /> }, 
  { path: "/single-project", element: <SingleProject /> }, 
  { path: "/blog", element: <Blog /> }, 
  { path: "/blog-details", element: <BlogDetails /> }, 
  { path: "/contact", element: <Contact /> },
  
  // Feature routes
  { path: "/weapon-detection", element: <WeaponDetection /> },
  { path: "/helmet-detection", element: <HelmetDetection /> },
  { path: "/smoke-detection", element: <SmokeDetection /> },
  { path: "/chatbot", element: <ChatBot /> },
  { path: "/report-incident", element: <ReportIncident /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
