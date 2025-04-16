import React, { useState } from 'react';
import TutorialAssistant from './components/TutorialAssistant';
import tutorialContentB2B from './data/tutorialContent'; // B2B Inhalte
import meetingGptContent from './data/meetingGptContent'; // Meeting Inhalte
// Kommentieren Sie temporär den Import aus
// import meetingGptContent from './data/meetingGptContent';
import './App.css';

/**
 * Hauptkomponente der Anwendung
 * Integriert den Tutorial-Assistenten und zeigt Beispielinhalte an
 */
function App() {
  // const [showTutorial, setShowTutorial] = useState(true); // Zustand nicht mehr benötigt
  const [selectedTutorial, setSelectedTutorial] = useState('b2b');
  const tutorials = {
    b2b: tutorialContentB2B,
    meeting: meetingGptContent
  };

  // Für Debugging: Überprüfen der Struktur
  // console.log("Tutorial Content:", tutorialContentB2B); // Kann entfernt werden
  // console.log("Tutorial Content Title:", tutorialContentB2B.title); // Kann entfernt werden
  // console.log("Tutorial Content Sections:", tutorialContentB2B.sections); // Kann entfernt werden

  // --- Debugging Logs ---
  // console.log("App.js: showTutorial =", showTutorial); // Zustand entfernt
  const currentContent = tutorials[selectedTutorial];
  console.log("App.js: selectedTutorial =", selectedTutorial);
  console.log("App.js: currentContent =", currentContent); // Überprüfen, ob die Daten geladen werden

  return (
    <div className="min-h-screen bg-gray-100"> {/* Hauptcontainer */}

      {/* --- DIESER TEIL IST VERMUTLICH FÜR DIE FUNKTIONS-KARTEN VERANTWORTLICH --- */}
      <header className="bg-white shadow p-4 mb-6"> {/* Beispiel Header */}
        <h1 className="text-xl font-semibold text-center text-gray-700">GPT Tutorial Assistent</h1> {/* App Titel */}
      </header>

      <main className="container mx-auto px-4"> {/* Hauptinhalt Container */}

        {/* --- NEU: Einführung zum Tutorial --- */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">
            {currentContent?.title || "Wähle ein Tutorial"} {/* Zeige den Titel des aktuellen Tutorials */}
          </h2>
          <p className="text-gray-600">
            {/* Kurze Beschreibung basierend auf Auswahl */}
            {selectedTutorial === 'b2b' && "Lerne Schritt für Schritt, wie du einen spezialisierten GPT für die Erstellung von B2B-Kaltakquise-Emails konfigurierst und nutzt."}
            {selectedTutorial === 'meeting' && "Entdecke, wie du einen GPT erstellst, der dir hilft, Meetings effizienter vorzubereiten, durchzuführen und nachzubereiten."}
          </p>
        </div>
        {/* --- ENDE DES FUNKTIONS-KARTEN BEREICHS --- */}


        {/* Tutorial Auswahl Dropdown */}
        <div className="mb-6 flex justify-center">
          <select
            value={selectedTutorial}
            onChange={(e) => setSelectedTutorial(e.target.value)}
            className="p-2 border rounded-md shadow-sm"
          >
            <option value="b2b">B2B Kaltakquise GPT</option>
            <option value="meeting">Meeting Optimierung GPT</option>
          </select>
          {/* Optional: Button zum Ein-/Ausblenden */}
          {/* <button onClick={() => setShowTutorial(!showTutorial)} className="ml-4 p-2 border rounded">
            {showTutorial ? 'Tutorial ausblenden' : 'Tutorial anzeigen'}
          </button> */}
        </div>

        {/* Tutorial Assistant Komponente */}
        {/* Zeige das Tutorial immer an, wenn currentContent vorhanden ist */}
        {currentContent && (
          <div className="mt-8"> {/* Abstand nach oben */}
            {/* --- NEU: Key hinzugefügt, um Komponente bei Tutorial-Wechsel neu zu mounten --- */}
            <TutorialAssistant key={currentContent.id} content={currentContent} />
          </div>
        )}

      </main>

      <footer className="text-center p-4 mt-8 text-gray-500 text-sm"> {/* Beispiel Footer */}
        <p>Entwickelt mit React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;