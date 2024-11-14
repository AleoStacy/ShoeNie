import React from "react";
import SearchBar from "./component/SearchBar";
import ContactPage from "./component/ContactPage";
import AuthForm  from "./component/AuthenForm";
import Footer from "./component/Footer";



function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-center mb-8">
          <SearchBar />
        </div>
        
        <div className="mb-8">
          <AuthForm />
        </div>

        <ContactPage />
      </div>
      <div>
      <Footer />
      </div>
      </div>
  )
}

        

export default App;