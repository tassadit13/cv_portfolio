import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import Contact from "./pages/Contact";
import NoteFound from "./pages/NoteFound";
import Portfolio from "./pages/Portfolio";

const App = () => {
  console.log(Knowledges);
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/competences" component={Knowledges} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route component={NoteFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
