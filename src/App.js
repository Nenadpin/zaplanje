import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [order, setOrder] = useState(false);
  return (
    <div className="App">
      <Header order={order} setOrder={setOrder} />
      <Main order={order} setOrder={setOrder} />
      <Footer />
    </div>
  );
}

export default App;
