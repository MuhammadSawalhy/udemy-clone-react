import Home from "@components/pages/Home";
import Course from "@components/pages/Course";
import NotFoundPage from "@components/pages/404"; // Import the 404 page component
import { Routes, Route } from "react-router-dom";

const index = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="search" element={<Home />}>
          <Route path=":query" />
        </Route>
        <Route path="course/:courseId" element={<Course />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route for 404 */}
    </Routes>
  );
};

export default index;

