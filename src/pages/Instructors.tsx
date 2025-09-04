import React from 'react';

export default function Instructors(): React.ReactElement {
  return (
    <section>
      <h1 className="mb-4 text-xl font-semibold">Instructors</h1>
      <ul className="space-y-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <li key={i} className="flex items-center justify-between rounded-lg border bg-white p-3">
            <div>
              <p className="font-medium">Instructor {i + 1}</p>
              <p className="text-sm text-gray-600">instructor{i + 1}@school.edu</p>
            </div>
            <span className="rounded bg-blue-100 px-2 py-0.5 text-blue-700">Full-time</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

