import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Security Status</th>
          </tr>
        </thead>
        <tbody>
            <tr key={"key"}>
              <td>{"Serial Number"}</td>
              <td>{"Serial Status"}</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
