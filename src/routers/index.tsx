import { createBrowserRouter, Navigate } from "react-router-dom";
import  { Suspense, lazy } from "react";
import MainLayout from "../containers/layouts/MainLayout";
import { CameraDetailPage } from "../pages/cameras/detail";
import { FullScreenPage } from "../pages/cameras/detail/fullScreenPage";
import UsersPage from "../pages/users";
import TimelapsPage from "../pages/timelaps";

// Lazy Load Components
const AuthPage = lazy(() => import("../pages/auth"));
const ProjectPage = lazy(() => import("../pages/projects"));
const CompanyPage = lazy(() => import("../pages/companies"));
const CamerPage = lazy(() => import("../pages/cameras"));
// const CameraLogPage = lazy(() => import("../pages/cameras/logs"));
const SystemSettings = lazy(() => import("../pages/cameras/system-settings"));

const CloudSettingsPage = lazy(() => import("../pages/cameras/cloud-settings"));

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = !!localStorage.getItem("agent"); // Example authentication logic

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" />;
  }

  return <>{children}</>; // Render the children if authenticated
};

// Main Router Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AuthPage />
          </Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute>
              <ProjectPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },

      {
        path: "projects/folder-cameras/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute>
              <ProjectPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },

      {
        path: "companies",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute>
              <CompanyPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "timelaps",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute>
              <TimelapsPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "cameras",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute>
              <CamerPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      // {
      //   path: "cameras/logs",
      //   element: (
      //     <Suspense fallback={<div>Loading...</div>}>
      //       <ProtectedRoute>
      //         <CameraLogPage />
      //       </ProtectedRoute>
      //     </Suspense>
      //   ),
      // },
      {
        path: "cameras/system-settings",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute>
              <SystemSettings />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "cameras/cloud-settings",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute>
              <CloudSettingsPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "cameras/detail/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute>
              <CameraDetailPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "cameras/detail/full-screen/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute>
              <FullScreenPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },

      {
        path: "users",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <UsersPage />
          </Suspense>
        ),
      },
    ],
  },

  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AuthPage />

      </Suspense>
    ),
  },
]);

export default router;
