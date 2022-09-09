import React from "react";
import Home from "../../pages/Home";
import Course from "../../pages/Course";
import { Routes, Route } from "react-router-dom";

const index = () => {
  return (
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="course/:courseId" element={<Course />} />
        </Route>
      </Routes>
  );
};

export default index;
