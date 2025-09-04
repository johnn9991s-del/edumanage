import React from 'react';

export default function Grades(): React.ReactElement {
  return (
    <section>
      <h1 className="mb-4 text-xl font-semibold">Grades</h1>
      <div className="overflow-x-auto rounded-lg border bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Student</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Course</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Grade</th>
            </tr>
          </thead>
          <tbody>
            {['A', 'B', 'A-', 'B+', 'C+'].map((grade, i) => (
              <tr key={i} className="odd:bg-white even:bg-gray-50">
                <td className="px-4 py-2">Student {i + 1}</td>
                <td className="px-4 py-2">Course {i + 1}</td>
                <td className="px-4 py-2">{grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

import React from 'react';

export default function Courses(): React.ReactElement {
  return (
    <section className="space-y-4">
      <h1 className="text-xl font-semibold">Courses</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-lg border bg-white p-4">
            <p className="text-sm text-gray-500">CSE{100 + i}</p>
            <p className="mt-1 text-base font-semibold">Course {i + 1}</p>
            <p className="mt-2 text-sm text-gray-600">
              Introductory course covering fundamentals and best practices.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

