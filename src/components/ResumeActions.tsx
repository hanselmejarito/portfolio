"use client";

import Link from "next/link";

export function ResumeActions() {
  return (
    <div className="no-print fixed right-6 top-6 z-50 flex gap-3">
      <Link
        href="/"
        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
      >
        ← Portfolio
      </Link>
      <button
        type="button"
        onClick={() => window.print()}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
      >
        Save as PDF
      </button>
    </div>
  );
}
