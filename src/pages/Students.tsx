import React from 'react';

export default function Students(): React.ReactElement {
  return (
    <section>
      <h1 className="mb-4 text-xl font-semibold">Students</h1>
      <div className="overflow-hidden rounded-lg border bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-600">ID</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Name</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Email</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, i) => (
              <tr key={i} className="odd:bg-white even:bg-gray-50">
                <td className="px-4 py-2">STU-{1000 + i}</td>
                <td className="px-4 py-2">Student {i + 1}</td>
                <td className="px-4 py-2">student{i + 1}@school.edu</td>
                <td className="px-4 py-2">
                  <span className="rounded bg-green-100 px-2 py-0.5 text-green-700">Active</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

