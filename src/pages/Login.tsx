import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(): React.ReactElement {
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    navigate('/');
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg border bg-white p-6 shadow-sm">
        <h1 className="mb-6 text-center text-xl font-semibold">Sign in to EduAdmin</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-gray-600">Email</span>
            <input className="rounded-md border px-3 py-2" type="email" required defaultValue="admin@school.edu" />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-gray-600">Password</span>
            <input className="rounded-md border px-3 py-2" type="password" required defaultValue="admin123" />
          </label>
          <button type="submit" className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

