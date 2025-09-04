import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Courses from './pages/Courses';
import Instructors from './pages/Instructors';
import Classes from './pages/Classes';
import Grades from './pages/Grades';
import Finance from './pages/Finance';
import Settings from './pages/Settings';
import Login from './pages/Login';

export default function App(): React.ReactElement {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="students" element={<Students />} />
        <Route path="courses" element={<Courses />} />
        <Route path="instructors" element={<Instructors />} />
        <Route path="classes" element={<Classes />} />
        <Route path="grades" element={<Grades />} />
        <Route path="finance" element={<Finance />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

