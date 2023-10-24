import { useState } from "react";
import Header from "../public/components/Header";
import Journal from "../public/components/Journal";

function App() {
  return (
    <div className="wrapper">
      <section>
        <Header />
        <Journal />
      </section>
    </div>
  );
}

export default App;
