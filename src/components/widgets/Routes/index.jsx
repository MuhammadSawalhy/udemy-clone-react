import React from "react";
import Home from "@components/pages/Home";
import Course from "@components/pages/Course";
import { Routes, Route } from "react-router-dom";

const index = () => {
  // TODO: build 404 page
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="search" element={<Home />}>
          <Route path=":query" />
        </Route>
        <Route path="course/:courseId" element={<Course />} />
      </Route>
    </Routes>
  );
};

export default index;
