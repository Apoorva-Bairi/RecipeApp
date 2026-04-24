
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import RecipeDetails from "./pages/RecipeDetails";
// import Favorites from "./pages/Favorites";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/recipe/:id" element={<RecipeDetails />} />
//         <Route path="/favorites" element={<Favorites />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-6">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
