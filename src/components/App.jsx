import React, { useState } from "react";

function App() {
  setInterval(now, 1000);
  var a = new Date().toLocaleTimeString();
  const [time, change] = useState(a);
  function now() {
    var b = new Date().toLocaleTimeString();
    return change(b);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={now}>Get Time</button>
    </div>
  );
}

export default App;
