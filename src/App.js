import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import CreateNewFlashcard from "./Components/CreateNew/CreateNewFlashcard";
import MyFlashcards from "./Components/MyFlashcards/MyFlashcards";
import FlashCardDetails from "./Components/FlashCardDetails/FlashCardDetails";
import TermCard from "./Components/FlashCardDetails/TermCard";
import PageNotFound from "./Components/Page404/PageNotFound";

function App() {
  return (
    // Loads the Navbar and the all the routes component
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<CreateNewFlashcard />} />
        <Route path="/dashboard" element={<CreateNewFlashcard />} />
        <Route path="/home" element={<CreateNewFlashcard />} />
        <Route path="/myflashcard" element={<MyFlashcards />} />
        <Route path="/flashcard/:slug/" element={<FlashCardDetails />}>
          <Route path=":id" element={<TermCard />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
