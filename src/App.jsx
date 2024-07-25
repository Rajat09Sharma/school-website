
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./pages/RootLayout"
import HomePage from "./pages/HomePage"
import AboutusPage from "./pages/AboutusPage"
import PrincipalPage from "./pages/PrincipalPage"
import AchivementPage from "./pages/AchivementPage"
import GalleryPage from "./pages/GalleryPage"
import FacultyPage from "./pages/FacultyPage"
import PrimaryCurriculumPage from "./pages/PrimaryCurriculumPage"
import SecondaryCurriculumPage from "./pages/SecondaryCurriculumPage"
import SeniorCurriculumPage from "./pages/SeniorCurriculumPage"
import MethodologPage from "./pages/MethodologPage"
import AdmissionProcessPage from "./pages/AdmissionProcessPage"
import AdmissionCriteriaPage from "./pages/AdmissionCriteriaPage"
import StudentLifePage from "./pages/StudentLifePage"
import StudentCouncilPage from "./pages/StudentCouncilPage"
import ContactusPage from "./pages/ContactusPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/about-us",
        element: <AboutusPage />
      },
      {
        path: "/principal-message",
        element: <PrincipalPage />
      },
      {
        path: "/achievements",
        element: <AchivementPage />
      },
      {
        path: "/faculty",
        element: <FacultyPage />
      },
      {
        path: "/gallery",
        element: <GalleryPage />
      },
      {
        path: "/primary-curriculum",
        element: <PrimaryCurriculumPage />
      },
      {
        path: "/secondary-curriculum",
        element: <SecondaryCurriculumPage />
      },
      {
        path: "/Senior-curriculum",
        element: <SeniorCurriculumPage />
      },
      {
        path: "/methodolog",
        element: <MethodologPage />
      },
      {
        path: "/process",
        element: <AdmissionProcessPage />
      },
      {
        path: "/criteria",
        element: <AdmissionCriteriaPage />
      },
      {
        path: "sps-life",
        element: <StudentLifePage />
      },
      {
        path: "/student-council",
        element: <StudentCouncilPage />
      },
      {
        path: "/contact-us",
        element: <ContactusPage />
      }

    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}
