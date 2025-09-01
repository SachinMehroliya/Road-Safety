function Results() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">Your Results</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="p-6 bg-gray-100 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Graph</h2>
          <div className="h-40 bg-gray-300">[Graph Placeholder]</div>
        </div>
        <div className="p-6 bg-gray-100 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Table</h2>
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200"><th>Parameter</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Speed</td><td>50 km/h</td></tr>
              <tr><td>Cracks Detected</td><td>12</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-10 p-6 bg-blue-100 rounded-xl">
        <h2 className="text-xl font-semibold">Suggestions</h2>
        <p>⚠️ Fix potholes immediately to prevent accidents.</p>
        <p>✅ Improve street lighting in low-visibility zones.</p>
      </div>
    </div>
  );
}

export default Results;
