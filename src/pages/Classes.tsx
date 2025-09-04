import React from 'react';

export default function Classes(): React.ReactElement {
  return (
    <section>
      <h1 className="mb-4 text-xl font-semibold">Classes</h1>
      <div className="overflow-hidden rounded-lg border bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Class</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Course</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Instructor</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Schedule</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, i) => (
              <tr key={i} className="odd:bg-white even:bg-gray-50">
                <td className="px-4 py-2">CLS-{200 + i}</td>
                <td className="px-4 py-2">Course {i + 1}</td>
                <td className="px-4 py-2">Instructor {i + 1}</td>
                <td className="px-4 py-2">Mon/Wed 10:00 - 11:30</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

