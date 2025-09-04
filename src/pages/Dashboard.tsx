import React from 'react';

export default function Dashboard(): React.ReactElement {
  return (
    <section className="space-y-4">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-gray-500">Total Students</p>
          <p className="mt-2 text-2xl font-bold">1,284</p>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-gray-500">Active Courses</p>
          <p className="mt-2 text-2xl font-bold">42</p>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-gray-500">Instructors</p>
          <p className="mt-2 text-2xl font-bold">31</p>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-gray-500">Revenue (M)</p>
          <p className="mt-2 text-2xl font-bold">$1.2</p>
        </div>
      </div>
    </section>
  );
}

