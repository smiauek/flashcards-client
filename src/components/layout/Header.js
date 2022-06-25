import React from "react";

function Header() {
  return (
    <header className="bg-dark pb-2 pt-2" style={{ height: 110 }}>
      <div className="container text-white">
        <h1 className="text-center" style={{ fontSize: 60 }}>
          Flashcards
        </h1>
      </div>
    </header>
  );
}

export default Header;
