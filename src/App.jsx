import { useState } from "react";
import Header from "../public/components/Header";
import Journal from "../public/components/Journal";
import data from "../data";

function App() {
  
  const journalData = data.map((item) => {
    return (
      <Journal 
        key = {item.id}
        item = {item}
      />
    )
  })

  return (
    <div className="wrapper">
        <Header />
      <section>
        {journalData}
      </section>
    </div>
  );
}

export default App;
