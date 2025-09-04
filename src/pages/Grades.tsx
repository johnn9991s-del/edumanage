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

