import React from 'react';

export default function Settings(): React.ReactElement {
  return (
    <section className="space-y-4">
      <h1 className="text-xl font-semibold">Settings</h1>
      <div className="rounded-lg border bg-white p-4">
        <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-gray-600">School Name</span>
            <input className="rounded-md border px-3 py-2" defaultValue="My School" />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-gray-600">Academic Year</span>
            <input className="rounded-md border px-3 py-2" defaultValue="2025-2026" />
          </label>
          <label className="flex flex-col gap-1 text-sm md:col-span-2">
            <span className="text-gray-600">Address</span>
            <input className="rounded-md border px-3 py-2" defaultValue="123 Main St" />
          </label>
          <div className="md:col-span-2">
            <button type="button" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

