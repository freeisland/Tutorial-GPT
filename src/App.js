import React, { useState } from 'react';
import TutorialAssistant from './components/TutorialAssistant';
import tutorialContentB2B from './data/tutorialContent'; // B2B Inhalte
import meetingGptContent from './data/meetingGptContent'; // Meeting Inhalte
import ReactPlayer from 'react-player/lazy'; // Import react-player (lazy load für bessere Performance)
import './App.css';

/**
 * Hauptkomponente der Anwendung
 * Integriert den Tutorial-Assistenten und zeigt Beispielinhalte an
 */
function App() {
  // const [showTutorial, setShowTutorial] = useState(true); // Zustand nicht mehr benötigt
  // --- NEU: State für die Sichtbarkeit des Video-Modals ---
  const [showVideo, setShowVideo] = useState(false);
  // --- NEU: State für ReactPlayer Modal ---
  const [showReactPlayer, setShowReactPlayer] = useState(false);
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
            <TutorialAssistant
              key={currentContent.id}
              content={currentContent}
              onShowVideoClick={() => setShowVideo(true)}
              // --- NEU: Prop für ReactPlayer Modal übergeben ---
              onShowReactPlayerClick={() => setShowReactPlayer(true)}
            />
          </div>
        )}

      </main>

      {/* --- NEU: Video Modal --- */}
      {showVideo && (
        // Overlay für den Hintergrund
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setShowVideo(false)} // Schließt Modal bei Klick auf Overlay
        >
          {/* Modal-Inhalt (verhindert Schließen bei Klick auf Video) */}
          <div
            className="bg-white p-4 rounded-lg shadow-xl relative max-w-4xl w-full" // Größere max-width
            onClick={(e) => e.stopPropagation()} // Verhindert, dass Klick auf Modal das Overlay schließt
          >
            {/* Schließen-Button (oben rechts) */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-3xl font-bold leading-none"
              aria-label="Video schließen" // Für Barrierefreiheit
            >
              &times; {/* HTML-Entität für 'X' */}
            </button>

            {/* --- NEU: YouTube Iframe Embed --- */}
            {/* Container für responsives Seitenverhältnis (16:9) mit Tailwind */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%" // Nimmt volle Breite des Containers
                height="100%" // Nimmt volle Höhe des Containers
                // Beispiel YouTube Video ID (Rick Astley)
                // ?autoplay=1&mute=1 -> Versucht Autoplay (stummgeschaltet, da oft blockiert)
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                title="YouTube video player" // Wichtig für Barrierefreiheit
                frameBorder="0" // frameBorder statt frameborder in React
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen // allowFullScreen statt allowfullscreen in React
                className="rounded" // Optional: Ecken abrunden
              ></iframe>
            </div>
            {/* Hinweis: Die onEnded-Funktion vom <video>-Tag funktioniert hier nicht direkt. */}
            {/* Das Schließen bei Videoende müsste über die YouTube API implementiert werden. */}

          </div>
        </div>
      )}

      {/* --- NEU: ReactPlayer Modal --- */}
      {showReactPlayer && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" // Etwas weniger Opazität
          onClick={() => setShowReactPlayer(false)}
        >
          <div
            className="bg-gray-900 p-4 rounded-lg shadow-xl relative max-w-3xl w-full" // Dunkler Hintergrund
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowReactPlayer(false)}
              className="absolute -top-2 -right-2 text-white bg-gray-700 rounded-full h-8 w-8 flex items-center justify-center text-lg font-bold leading-none hover:bg-gray-600"
              aria-label="Player schließen"
            >
              &times;
            </button>

            {/* ReactPlayer Komponente */}
            <div className="aspect-w-16 aspect-h-9"> {/* Seitenverhältnis */}
              <ReactPlayer
                url='/videos/intro.mp4' // Pfad zur lokalen Datei (muss in public/videos existieren!)
                // Alternativ: url='https://www.youtube.com/watch?v=your_video_id'
                controls={true}       // Zeigt die Player-eigenen Controls an
                playing={true}        // Versucht Autoplay (kann blockiert sein)
                width='100%'
                height='100%'
                // Weitere Optionen: loop, muted, volume, onEnded, onProgress etc.
                // config={{ file: { attributes: { controlsList: 'nodownload' } } }} // Beispiel Konfiguration
              />
            </div>
             {/* Hinweis: Stelle sicher, dass die Datei /videos/intro.mp4 im public Ordner existiert! */}
          </div>
        </div>
      )}

      <footer className="text-center p-4 mt-8 text-gray-500 text-sm"> {/* Beispiel Footer */}
        <p>Entwickelt mit React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;