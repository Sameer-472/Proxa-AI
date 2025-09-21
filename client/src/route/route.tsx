import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "@/page/Home";
import Dashboard from "@/page/Dashboard";
import AppHome from "@/page/AppHome";
import ArticlePage from "@/page/ArticlePage";
import BlogPage from "@/page/BlogPage";
import GImagePage from "@/page/GImagePage";
import RBackground from "@/page/RBackground";
import RObject from "@/page/RObject";
import ResumePage from "@/page/ResumePage";
import AdminPage from "@/page/Admin/AdminPage";
import AdminDashboard from "@/page/Admin/AdminDashboard";
import CreatePlan from "@/page/Admin/CreatePlan";
import FeedBackFormPage from "@/page/Admin/FeedBackFormPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <AppHome />,
      },
    ],
  },
  {
    path: "ai-prod-app/v1/admin-route",
    element: <AdminPage />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "create-plan",
        element: <CreatePlan />
      },
      {
        path: "feedback-form",
        element: <FeedBackFormPage />
      }
    ]
  },
  {
    path: "home",
    element: <Home />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "article",
        element: <ArticlePage />
      },
      {
        path: "blog",
        element: <BlogPage />
      },
      {
        path: "g-image",
        element: <GImagePage />
      },
      {
        path: "r-background",
        element: <RBackground />
      },
      {
        path: "r-object",
        element: <RObject />
      },
      {
        path: "resume",
        element: <ResumePage />
      },
    ],
  },
]);

export default routes;
