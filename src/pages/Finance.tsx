import React from 'react';

export default function Finance(): React.ReactElement {
  return (
    <section className="space-y-4">
      <h1 className="text-xl font-semibold">Finance</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-gray-500">Current Balance</p>
          <p className="mt-2 text-2xl font-bold">$120,450</p>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-gray-500">Monthly Revenue</p>
          <p className="mt-2 text-2xl font-bold">$24,900</p>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <p className="text-sm text-gray-500">Outstanding Invoices</p>
          <p className="mt-2 text-2xl font-bold">$8,300</p>
        </div>
      </div>
      <div className="rounded-lg border bg-white p-4">
        <p className="text-sm text-gray-600">Recent transactions (mock)</p>
        <ul className="mt-2 divide-y">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i} className="flex items-center justify-between py-2 text-sm">
              <span>Invoice {1000 + i}</span>
              <span className="font-medium">$ {(200 + i * 35).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

