import React from "react";
import { Navigate, Route, Routes } from "react-router";

import MainPage from "./MainPage";
import AccountPage from "./AccountPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
