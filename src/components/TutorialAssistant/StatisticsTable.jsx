import React from 'react';

// Vollständige Implementierung der Statistik-Tabelle
const StatisticsTable = ({ headers, rows, highlightLastRow = false }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {headers.map((header, idx) => (
            <th 
              key={idx} 
              scope="col" 
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {rows.map((row, rowIdx) => (
          <tr 
            key={rowIdx} 
            className={highlightLastRow && rowIdx === rows.length - 1 ? "bg-green-50" : ""}
          >
            {row.map((cell, cellIdx) => (
              <td 
                key={cellIdx} 
                className={`px-6 py-4 whitespace-nowrap text-sm ${
                  cellIdx === 0 ? "font-medium text-gray-900" : 
                  highlightLastRow && rowIdx === rows.length - 1 ? "font-bold text-green-700" : "text-gray-500"
                }`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default StatisticsTable; 