import SignUpPage from "./pages/sign-up-page/index.jsx";
import PostManage from "./components/post-manage/posts/index.jsx";
import PostDetailsPage from "./pages/post-datails/index.jsx";
import PostAddNew from "./components/form/addnew-form/index.jsx";
import NotFoundPage from "./pages/not-found/index.jsx";
import ManageCategory from "./components/post-manage/category/index.jsx";
import LoginPage from "./pages/sign-in-page/index.jsx";
import LayoutDashboard from "./components/layout-dashboard/index.jsx";
import Layout from "./components/layout/index.jsx";
import HomePage from "./pages/home/index.jsx";
import DashboardPage from "./pages/dashboard/index.jsx";
import CategoryAddNew from "./components/form/addnew-category-form/index.jsx";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./contexts/auth-context/auth-context.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";
import CategoryUpdate from "./components/form/update-category-form/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:slug",
        element: <PostDetailsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/sign-in",
    element: <LoginPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/dashboard",
    element: <LayoutDashboard />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "manage/post",
        element: <PostManage />,
      },
      {
        path: "manage/add-post",
        element: <PostAddNew />,
      },
      {
        path: "manage/category",
        element: <ManageCategory />,
      },
      {
        path: "manage/add-category",
        element: <CategoryAddNew />,
      },
      {
        path: "manage/update-category",
        element: <CategoryUpdate />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <ToastContainer theme="colored" />
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthContextProvider>
  </StrictMode>
);
