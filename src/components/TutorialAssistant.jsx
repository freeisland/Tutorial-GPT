// TutorialAssistant.jsx
import React, { useState, useEffect } from 'react';
// CSS-Import entfernen, wenn die Datei leer ist
// import './TutorialAssistant.css';
// import TaskItem from './TutorialAssistant/TaskItem';
// ProgressBar kann wieder importiert werden, wenn wir es mit Tailwind stylen
// import ProgressBar from './TutorialAssistant/ProgressBar';

const TutorialAssistant = ({ content, onShowVideoClick, onShowReactPlayerClick }) => {
  // --- NEU: Destrukturierung der Props gemäß neuer Datenstruktur ---
  const {
    id: tutorialId,
    title = "Kein Titel verfügbar",
    sections: initialSections = [],
    prompts, // Optional: Kann undefined sein
    challenges, // Optional
    benefits, // Optional
    roi // Optional
  } = content || {}; // Fallback, falls content undefined ist

  // --- NEU: State für die Task-Abschnitte (mit expanded und completed Flags) ---
  const [sections, setSections] = useState(
    initialSections.map((section, index) => ({
      ...section,
      // Ersten Abschnitt standardmäßig öffnen (oder keinen, wenn gewünscht)
      expanded: index === 0,
      tasks: section.tasks.map(task => ({ ...task, completed: false })) // Initialisiere Tasks als nicht erledigt
    }))
  );

  // --- NEU: State für die zusätzlichen, aufklappbaren Blöcke ---
  const [extraSectionsState, setExtraSectionsState] = useState({
    prompts: false,
    challenges: false,
    benefits: false,
    roi: false,
  });

  // --- NEU: State für Feedback beim Kopieren (nur für Prompts) ---
  const [copiedItemId, setCopiedItemId] = useState(null);

  // --- NEU: Funktion für dynamischen Storage Key ---
  const getStorageKey = (id) => `tutorialProgress_${id || 'default'}`;

  // --- NEU: Effekt zum Initialisieren/Zurücksetzen des States bei Content-Wechsel ---
  useEffect(() => {
    // Nur ausführen, wenn initialSections vorhanden sind
    if (!initialSections || initialSections.length === 0) {
      setSections([]); // Setze auf leeres Array, wenn keine Sections da sind
      return;
    }

    const storageKey = getStorageKey(tutorialId); // Dynamischen Key holen
    try {
      const savedStateJSON = localStorage.getItem(storageKey);
      let savedProgress = null;
      if (savedStateJSON) {
        savedProgress = JSON.parse(savedStateJSON);
      }

      // Initialisiere Sections basierend auf initialSections und geladenem Fortschritt
      setSections(
        initialSections.map((section, index) => ({
          ...section,
          expanded: index === 0, // Ersten Abschnitt standardmäßig öffnen
          tasks: section.tasks.map(task => {
            // Finde gespeicherten Task-Status (falls vorhanden)
            const savedTask = savedProgress?.find(s => s.id === section.id)
                                         ?.tasks.find(t => t.id === task.id);
            return {
              ...task,
              completed: savedTask ? !!savedTask.completed : false // Gespeicherten Status oder false
            };
          })
        }))
      );

      // Optional: Lade auch den Zustand der extraSectionsState, falls gespeichert
      // const savedExtraState = localStorage.getItem(`extraSectionsState_${tutorialId}`);
      // if (savedExtraState) {
      //   setExtraSectionsState(JSON.parse(savedExtraState));
      // } else {
      //   // Reset auf Standard, wenn nichts gespeichert ist
      //   setExtraSectionsState({ prompts: false, challenges: false, benefits: false, roi: false });
      // }

    } catch (error) {
      console.error(`Fehler beim Laden des Fortschritts für Tutorial ${tutorialId}:`, error);
      // Fallback: Initialisiere ohne gespeicherten Fortschritt
      setSections(
        initialSections.map((section, index) => ({
          ...section,
          expanded: index === 0,
          tasks: section.tasks.map(task => ({ ...task, completed: false }))
        }))
      );
    }
    // Dieser Effekt soll laufen, wenn sich der *Inhalt* des Tutorials ändert
  }, [content, tutorialId, initialSections]); // <-- initialSections hinzugefügt

  // --- Angepasster Effekt zum Speichern ---
  useEffect(() => {
    // Nur speichern, wenn sections initialisiert wurde und eine tutorialId vorhanden ist
    if (!sections || sections.length === 0 || !tutorialId) {
      return;
    }

    const storageKey = getStorageKey(tutorialId); // Dynamischen Key holen
    try {
      const stateToSave = sections.map(section => ({
        id: section.id,
        tasks: section.tasks.map(task => ({ id: task.id, completed: task.completed }))
      }));
      localStorage.setItem(storageKey, JSON.stringify(stateToSave));

      // Optional: Speichere auch den Zustand der extraSectionsState
      // localStorage.setItem(`extraSectionsState_${tutorialId}`, JSON.stringify(extraSectionsState));

    } catch (error) {
      console.error(`Fehler beim Speichern des Fortschritts für Tutorial ${tutorialId}:`, error);
    }
    // Speichern, wenn sich sections oder extraSectionsState ändern (und tutorialId bekannt ist)
  }, [sections, extraSectionsState, tutorialId]);

  // Standardwerte für den Fall, dass content nicht verfügbar ist
  if (!content) {
    // Tailwind Klassen für Fehlermeldung
    return <div className="max-w-3xl mx-auto p-4 my-5 bg-red-100 text-red-700 border border-red-300 rounded-md text-center">Fehler: Keine Inhalte verfügbar.</div>;
  }

  // --- NEU: Angepasste Toggle-Funktion für Task-Abschnitte ---
  const toggleSection = (index) => {
    setSections(currentSections =>
      currentSections.map((section, i) =>
        i === index ? { ...section, expanded: !section.expanded } : section
      )
    );
  };

  // --- NEU: Toggle-Funktion für die zusätzlichen Blöcke ---
  const toggleExtraSection = (sectionKey) => {
    setExtraSectionsState(prevState => ({
      ...prevState,
      [sectionKey]: !prevState[sectionKey]
    }));
  };

  // --- NEU: Angepasste Toggle-Funktion für Tasks ---
  const toggleTask = (sectionIndex, taskId) => {
    setSections(currentSections =>
      currentSections.map((section, i) =>
        i === sectionIndex
          ? {
              ...section,
              tasks: section.tasks.map(task =>
                task.id === taskId
                  ? { ...task, completed: !task.completed }
                  : task
              )
            }
          : section
      )
    );
  };

  // --- NEU: Funktion zum Kopieren von Text (nur für Prompts) ---
  const handleCopy = (textToCopy, itemId) => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      // Erfolg: Zeige Feedback an
      setCopiedItemId(itemId);
      // Setze Feedback nach kurzer Zeit zurück
      setTimeout(() => {
        setCopiedItemId(null);
      }, 1500); // 1.5 Sekunden
    }).catch(err => {
      console.error('Fehler beim Kopieren in die Zwischenablage:', err);
      alert('Konnte den Text nicht kopieren.'); // Einfaches Fehlerfeedback
    });
  };

  // Berechnen des Fortschritts pro Sektion
  const calculateSectionProgress = (section) => {
    if (!section || !Array.isArray(section.tasks) || section.tasks.length === 0) return 0;
    const completedTasks = section.tasks.filter(task => task.completed).length;
    return (completedTasks / section.tasks.length) * 100;
  };

  // Gesamtfortschritt berechnen
  const calculateTotalProgress = () => {
    const allTasks = sections.reduce((acc, section) => acc.concat(section.tasks), []);
    if (allTasks.length === 0) return 0;
    const completedTasks = allTasks.filter(task => task.completed).length;
    return (completedTasks / allTasks.length) * 100;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
        {title}
      </h1>

      {/* Gesamtfortschritt */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">Gesamtfortschritt (Aufgaben)</h2>
          <span className="text-lg font-semibold">{Math.round(calculateTotalProgress())}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-600 h-4 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${calculateTotalProgress()}%` }}
          ></div>
        </div>
      </div>

      {/* Abschnitte */}
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={section.id || index} className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Section Header */}
            <div
              className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection(index)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && toggleSection(index)}
              aria-expanded={section.expanded}
              aria-controls={`section-content-${index}`}
            >
              <h3 className="text-lg font-semibold flex items-center text-gray-800">
                {/* Pfeil-Icon (vereinfacht) */}
                <span className={`mr-2 transition-transform duration-200 ${section.expanded ? 'rotate-90' : 'rotate-0'}`}>►</span>
                {section.title}
              </h3>

              {/* --- NEU: Container für Button und Fortschrittsbalken --- */}
              <div className="flex items-center space-x-4"> {/* space-x-4 für Abstand */}

                {/* --- NEU: Bedingter Video-Button (nur für Vorbereitung) --- */}
                {/* --- Geändert: Video-Button wird jetzt für jede Sektion angezeigt, wenn onShowVideoClick existiert --- */}
                {onShowVideoClick && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Verhindert das Auf-/Zuklappen der Sektion
                      onShowVideoClick();  // Ruft die Funktion aus App.js auf
                    }}
                    className="px-2 py-1 bg-purple-600 text-white text-xs font-semibold rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1 transition-colors shadow-sm"
                    title="Intro-Video ansehen"
                  >
                    🎬 Video {/* Kürzerer Text */}
                  </button>
                )}

                {/* --- NEU: Button für ReactPlayer --- */}
                {onShowReactPlayerClick && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Verhindert das Auf-/Zuklappen der Sektion
                      onShowReactPlayerClick(); // Ruft die Funktion aus App.js auf
                    }}
                    className="px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors shadow-sm"
                    title="Video mit ReactPlayer öffnen"
                  >
                    ▶️ Player {/* Anderes Icon/Text */}
                  </button>
                )}

                {/* Fortschrittsanzeige pro Sektion (jetzt innerhalb des Containers) */}
                <div className="flex items-center"> {/* Gruppe für Balken und Prozent */}
                  <div className="w-32 bg-gray-200 rounded-full h-3 mr-3">
                    <div
                      className="bg-green-500 h-3 rounded-full transition-all duration-300 ease-in-out"
                      style={{ width: `${calculateSectionProgress(section)}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">{Math.round(calculateSectionProgress(section))}%</span>
                </div>
              </div>
            </div>

            {/* Section Content (Tasks) */}
            {section.expanded && (
              <div className="p-5 border-t border-gray-200 bg-white"> {/* Mehr Padding */}
                {Array.isArray(section.tasks) && section.tasks.length > 0 ? (
                  <ul className="space-y-3"> {/* Zurück zu space-y-3 */}
                    {section.tasks.map((task) => (
                      <li key={task.id} className="flex items-start">
                        <input
                          type="checkbox"
                          id={`task-${section.id}-${task.id}`} // Eindeutige ID für Label-Verknüpfung
                          checked={task.completed}
                          onChange={() => toggleTask(index, task.id)}
                          // Styling für die Checkbox
                          className="mt-1 mr-3 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                        />
                        {/* Label für bessere Zugänglichkeit und Klickbarkeit */}
                        <label
                          htmlFor={`task-${section.id}-${task.id}`}
                          // Styling für den Text, durchgestrichen wenn erledigt
                          className={`text-sm ${
                            task.completed
                              ? "line-through text-gray-500"
                              : "text-gray-800"
                          } cursor-pointer`}
                        >
                          {task.text}
                        </label>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-500 italic">Keine Aufgaben in diesem Abschnitt.</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* --- NEU: Platzhalter für die zusätzlichen Blöcke --- */}
      {/* Prompts Section */}
      {prompts && (
        <div className="border border-gray-200 rounded-lg overflow-hidden mt-6">
           <div
             className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
             onClick={() => toggleExtraSection('prompts')}
           >
             <h3 className="text-lg font-semibold flex items-center text-gray-800">
               <span className={`mr-2 transition-transform duration-200 ${extraSectionsState.prompts ? 'rotate-90' : 'rotate-0'}`}>►</span>
               Hilfreiche Prompts
             </h3>
           </div>
           {extraSectionsState.prompts && (
             <div className="p-6 border-t border-gray-200 bg-white space-y-6">
               {/* GPT Hints */}
               {prompts.gptHints && (
                 <div>
                   {/* --- NEU: Flex Container für Titel und Button --- */}
                   <div className="flex justify-between items-center mb-2">
                     <h4 className="text-md font-semibold text-gray-700">GPT Hints</h4>
                     <button
                       onClick={() => handleCopy(prompts.gptHints, 'gptHints')} // Eindeutige ID 'gptHints'
                       className={`px-2 py-1 text-xs rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                         copiedItemId === 'gptHints'
                           ? 'bg-green-500 text-white focus:ring-green-400' // Feedback
                           : 'bg-blue-100 text-blue-700 hover:bg-blue-200 focus:ring-blue-400' // Normal (Blau wie im Screenshot)
                       }`}
                     >
                       {copiedItemId === 'gptHints' ? 'Kopiert!' : 'Kopieren'}
                     </button>
                   </div>
                   <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-800 whitespace-pre-wrap font-sans">
                     {prompts.gptHints}
                   </pre>
                 </div>
               )}
               {/* GPT Instructions */}
               {prompts.gptInstructions && (
                 <div className="mt-4"> {/* Behält Abstand bei */}
                   {/* --- NEU: Flex Container für Titel und Button --- */}
                   <div className="flex justify-between items-center mb-2">
                     <h4 className="text-md font-semibold text-gray-700">GPT Instructions</h4>
                     <button
                       onClick={() => handleCopy(prompts.gptInstructions, 'gptInstructions')} // Eindeutige ID 'gptInstructions'
                       className={`px-2 py-1 text-xs rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                         copiedItemId === 'gptInstructions'
                           ? 'bg-green-500 text-white focus:ring-green-400' // Feedback
                           : 'bg-blue-100 text-blue-700 hover:bg-blue-200 focus:ring-blue-400' // Normal
                       }`}
                     >
                       {copiedItemId === 'gptInstructions' ? 'Kopiert!' : 'Kopieren'}
                     </button>
                   </div>
                   <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-800 whitespace-pre-wrap font-sans">
                     {prompts.gptInstructions}
                   </pre>
                 </div>
               )}
               {/* Perplexity Prompt */}
               {prompts.perplexityPrompt && (
                 <div className="mt-4"> {/* Behält Abstand bei */}
                   {/* --- NEU: Flex Container für Titel und Button --- */}
                   <div className="flex justify-between items-center mb-2">
                     <h4 className="text-md font-semibold text-gray-700">Perplexity Recherche Prompt</h4>
                     <button
                       onClick={() => handleCopy(prompts.perplexityPrompt, 'perplexityPrompt')} // Eindeutige ID 'perplexityPrompt'
                       className={`px-2 py-1 text-xs rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                         copiedItemId === 'perplexityPrompt'
                           ? 'bg-green-500 text-white focus:ring-green-400' // Feedback
                           : 'bg-blue-100 text-blue-700 hover:bg-blue-200 focus:ring-blue-400' // Normal
                       }`}
                     >
                       {copiedItemId === 'perplexityPrompt' ? 'Kopiert!' : 'Kopieren'}
                     </button>
                   </div>
                   <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-800 whitespace-pre-wrap font-sans">
                     {prompts.perplexityPrompt}
                   </pre>
                 </div>
               )}
             </div>
           )}
        </div>
      )}

      {/* Challenges Section */}
      {challenges && (
         <div className="border border-gray-200 rounded-lg overflow-hidden mt-6">
           <div
             className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
             onClick={() => toggleExtraSection('challenges')}
           >
             <h3 className="text-lg font-semibold flex items-center text-gray-800">
               <span className={`mr-2 transition-transform duration-200 ${extraSectionsState.challenges ? 'rotate-90' : 'rotate-0'}`}>►</span>
               Herausforderungen
             </h3>
           </div>
           {extraSectionsState.challenges && (
             <div className="p-6 border-t border-gray-200 bg-white space-y-6">
               {/* 1. Haupttitel der Herausforderungen */}
               {challenges.title && (
                 <h4 className="text-xl font-semibold text-red-800 mb-4">{challenges.title}</h4>
               )}

               {/* 2. Grid für die einzelnen Herausforderungs-Items */}
               {Array.isArray(challenges.items) && challenges.items.length > 0 && (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                   {challenges.items.map((item, idx) => (
                     // Card für jedes Item
                     // Hinweis: Tailwind unterstützt standardmäßig keine dynamischen Klassennamen wie `bg-${item.color}-50`.
                     // Für volle Farbunterstützung müsstest du die Farben im tailwind.config.js safelisten
                     // oder spezifische Klassen für jede erwartete Farbe definieren.
                     // Hier verwenden wir vorerst generische Grautöne oder eine feste Farbe.
                     <div key={idx} className={`bg-red-50 rounded-lg p-4 border border-red-100 shadow-sm`}>
                       <h5 className="font-bold text-lg mb-2 flex items-center text-red-700">
                         {item.icon && <span className="mr-2 text-xl">{item.icon}</span>}
                         {item.title}
                       </h5>
                       {/* Verwende dangerouslySetInnerHTML für HTML-Tags in der Beschreibung */}
                       <p
                         className="text-sm text-gray-700"
                         dangerouslySetInnerHTML={{ __html: item.description }}
                       ></p>
                     </div>
                   ))}
                 </div>
               )}

               {/* 3. Statistiktabelle (falls vorhanden) */}
               {challenges.statistics && Array.isArray(challenges.statistics.headers) && Array.isArray(challenges.statistics.rows) && (
                 <div className="mt-6">
                   <h4 className="text-lg font-semibold text-gray-800 mb-3">Typische Antwortquoten im B2B-Bereich:</h4>
                   <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                     <table className="min-w-full divide-y divide-gray-200">
                       <thead className="bg-gray-100">
                         <tr>
                           {challenges.statistics.headers.map((header, idx) => (
                             <th key={idx} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                               {header}
                             </th>
                           ))}
                         </tr>
                       </thead>
                       <tbody className="bg-white divide-y divide-gray-200">
                         {challenges.statistics.rows.map((row, rowIdx) => (
                           // Beispielhafte Hervorhebung der letzten Zeile (KI-gestützt)
                           <tr key={rowIdx} className={rowIdx === challenges.statistics.rows.length - 1 ? "bg-green-50" : ""}>
                             {row.map((cell, cellIdx) => (
                               <td
                                 key={cellIdx}
                                 className={`px-6 py-4 whitespace-nowrap text-sm ${
                                   cellIdx === 0 ? "font-medium text-gray-900" : "text-gray-600"
                                 } ${rowIdx === challenges.statistics.rows.length - 1 ? "font-semibold text-green-700" : ""}`}
                               >
                                 {cell}
                               </td>
                             ))}
                           </tr>
                         ))}
                       </tbody>
                     </table>
                   </div>
                 </div>
               )}

               {/* 4. Zentrale Probleme (falls vorhanden) */}
               {Array.isArray(challenges.centralProblems) && challenges.centralProblems.length > 0 && (
                 <div className="bg-gray-100 p-4 rounded-lg mt-6 border border-gray-200">
                   <h5 className="text-lg font-semibold text-gray-800 mb-2">Die zentralen Probleme:</h5>
                   {/* Geordnete Liste für die Probleme */}
                   <ol className="list-decimal pl-5 space-y-2">
                     {challenges.centralProblems.map((problem, idx) => (
                       <li
                         key={idx}
                         className="text-sm text-gray-700"
                         dangerouslySetInnerHTML={{ __html: problem }} // Erlaube HTML-Tags
                       ></li>
                     ))}
                   </ol>
                 </div>
               )}

               {/* Fallback, falls keine Inhalte in challenges vorhanden sind */}
               {!challenges.title && (!challenges.items || challenges.items.length === 0) && !challenges.statistics && (!challenges.centralProblems || challenges.centralProblems.length === 0) && (
                  <p className="text-gray-500 italic text-sm">Keine Herausforderungen definiert.</p>
               )}
             </div>
           )}
         </div>
      )}

       {/* Benefits Section */}
      {benefits && (
         <div className="border border-gray-200 rounded-lg overflow-hidden mt-6">
           <div
             className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
             onClick={() => toggleExtraSection('benefits')}
           >
             <h3 className="text-lg font-semibold flex items-center text-gray-800">
               <span className={`mr-2 transition-transform duration-200 ${extraSectionsState.benefits ? 'rotate-90' : 'rotate-0'}`}>►</span>
               Vorteile
             </h3>
           </div>
           {extraSectionsState.benefits && (
             <div className="p-6 border-t border-gray-200 bg-white space-y-8">

               {/* 1. Grid für Strategische und Operative Vorteile */}
               {(Array.isArray(benefits.strategic) && benefits.strategic.length > 0) || (Array.isArray(benefits.operational) && benefits.operational.length > 0) ? (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {/* Strategische Vorteile */}
                   {Array.isArray(benefits.strategic) && benefits.strategic.length > 0 && (
                     <div className="space-y-4">
                       <h4 className="text-xl font-semibold text-blue-800 mb-3">Strategische Vorteile</h4>
                       {benefits.strategic.map((benefit, idx) => (
                         // Card für jeden strategischen Vorteil
                         // Wieder der Hinweis zur dynamischen Farbe mit Tailwind
                         <div key={`strategic-${idx}`} className={`bg-blue-50 rounded-lg p-4 border border-blue-100 shadow-sm`}>
                           <h5 className="font-bold text-lg mb-2 flex items-center text-blue-700">
                             {benefit.icon && <span className="mr-2 text-xl">{benefit.icon}</span>}
                             {benefit.title}
                           </h5>
                           <p
                             className="text-sm text-gray-700"
                             dangerouslySetInnerHTML={{ __html: benefit.description }}
                           ></p>
                         </div>
                       ))}
                     </div>
                   )}

                   {/* Operative Vorteile */}
                   {Array.isArray(benefits.operational) && benefits.operational.length > 0 && (
                     <div className="space-y-4">
                       <h4 className="text-xl font-semibold text-amber-800 mb-3">Operative Vorteile</h4>
                       {benefits.operational.map((benefit, idx) => (
                         // Card für jeden operativen Vorteil
                         <div key={`operational-${idx}`} className={`bg-amber-50 rounded-lg p-4 border border-amber-100 shadow-sm`}>
                           <h5 className="font-bold text-lg mb-2 flex items-center text-amber-700">
                             {benefit.icon && <span className="mr-2 text-xl">{benefit.icon}</span>}
                             {benefit.title}
                           </h5>
                           <p
                             className="text-sm text-gray-700"
                             dangerouslySetInnerHTML={{ __html: benefit.description }}
                           ></p>
                         </div>
                       ))}
                     </div>
                   )}
                 </div>
               ) : null /* Ende Grid für Vorteile */}

               {/* 2. Skalierbarkeitstabelle (falls vorhanden) */}
               {benefits.scalability && Array.isArray(benefits.scalability.headers) && Array.isArray(benefits.scalability.rows) && (
                 <div className="mt-8 border-t border-gray-200 pt-6"> {/* Abstand und Trennlinie */}
                   <h4 className="text-lg font-semibold text-gray-800 mb-3">Verbesserung der Skalierbarkeit</h4>
                   <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                     <table className="min-w-full divide-y divide-gray-200">
                       <thead className="bg-gray-100">
                         <tr>
                           {benefits.scalability.headers.map((header, idx) => (
                             <th key={idx} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                               {header}
                             </th>
                           ))}
                         </tr>
                       </thead>
                       <tbody className="bg-white divide-y divide-gray-200">
                         {benefits.scalability.rows.map((row, rowIdx) => (
                           <tr key={rowIdx}>
                             {row.map((cell, cellIdx) => (
                               <td
                                 key={cellIdx}
                                 className={`px-6 py-4 whitespace-nowrap text-sm ${
                                   cellIdx === 0 ? "font-medium text-gray-900" : "text-gray-600"
                                 } ${
                                   // Hebe die letzte Spalte (Steigerung) hervor
                                   cellIdx === row.length - 1 ? "font-semibold text-green-700" : ""
                                 }`}
                               >
                                 {cell}
                               </td>
                             ))}
                           </tr>
                         ))}
                       </tbody>
                     </table>
                   </div>
                 </div>
               )}

               {/* 3. Testimonial (falls vorhanden) */}
               {benefits.testimonial && (
                 <div className="mt-8 border-t border-gray-200 pt-6"> {/* Abstand und Trennlinie */}
                    <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 shadow-sm flex items-start space-x-4">
                       <div className="text-indigo-600 text-3xl mt-1">💡</div> {/* Icon */}
                       <div>
                         <h5 className="font-bold text-lg text-indigo-800 mb-1">Erfahrungsbericht:</h5>
                         <p
                           className="text-sm text-indigo-900 italic"
                           dangerouslySetInnerHTML={{ __html: benefits.testimonial }}
                         ></p>
                       </div>
                    </div>
                 </div>
               )}

               {/* Fallback, falls keine Inhalte in benefits vorhanden sind */}
               {(!benefits.strategic || benefits.strategic.length === 0) && (!benefits.operational || benefits.operational.length === 0) && !benefits.scalability && !benefits.testimonial && (
                  <p className="text-gray-500 italic text-sm">Keine Vorteile definiert.</p>
               )}
             </div>
           )}
         </div>
      )}

       {/* ROI Section */}
      {roi && (
         <div className="border border-gray-200 rounded-lg overflow-hidden mt-6">
           <div
             className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
             onClick={() => toggleExtraSection('roi')}
           >
             <h3 className="text-lg font-semibold flex items-center text-gray-800">
               <span className={`mr-2 transition-transform duration-200 ${extraSectionsState.roi ? 'rotate-90' : 'rotate-0'}`}>►</span>
               ROI Berechnung
             </h3>
           </div>
           {extraSectionsState.roi && (
             <div className="p-6 border-t border-gray-200 bg-white space-y-8"> {/* Mehr Padding und Abstand */}

               {/* 1. Zeitvergleich-Tabelle (falls vorhanden) */}
               {roi.timeComparison && Array.isArray(roi.timeComparison.headers) && Array.isArray(roi.timeComparison.rows) && (
                 <div>
                   <h4 className="text-lg font-semibold text-gray-800 mb-3">Zeitvergleich pro Email</h4>
                   <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                     <table className="min-w-full divide-y divide-gray-200">
                       <thead className="bg-gray-100">
                         <tr>
                           {roi.timeComparison.headers.map((header, idx) => (
                             <th key={idx} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                               {header}
                             </th>
                           ))}
                         </tr>
                       </thead>
                       <tbody className="bg-white divide-y divide-gray-200">
                         {roi.timeComparison.rows.map((row, rowIdx) => (
                           // Hebe die letzte Zeile (Gesamtzeit) hervor
                           <tr key={rowIdx} className={rowIdx === roi.timeComparison.rows.length - 1 ? "bg-blue-50 font-semibold" : ""}>
                             {row.map((cell, cellIdx) => (
                               <td
                                 key={cellIdx}
                                 className={`px-6 py-4 whitespace-nowrap text-sm ${
                                   cellIdx === 0 ? "text-gray-900" : "text-gray-600"
                                 } ${
                                   // Hebe die letzte Spalte (Zeitersparnis) hervor
                                   cellIdx === row.length - 1 ? "text-green-700" : ""
                                 } ${
                                   rowIdx === roi.timeComparison.rows.length - 1 ? (cellIdx === 0 ? "text-blue-800" : "text-blue-700") : ""
                                 }`}
                               >
                                 {cell}
                               </td>
                             ))}
                           </tr>
                         ))}
                       </tbody>
                     </table>
                   </div>
                 </div>
               )}

               {/* 2. Kostenkalkulation-Tabelle (falls vorhanden) */}
               {roi.costCalculation && Array.isArray(roi.costCalculation.headers) && Array.isArray(roi.costCalculation.rows) && (
                 <div className="mt-8 border-t border-gray-200 pt-6"> {/* Abstand und Trennlinie */}
                   <h4 className="text-lg font-semibold text-gray-800 mb-3">Kostenkalkulation (Beispiel für 100 Emails)</h4>
                   <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                     <table className="min-w-full divide-y divide-gray-200">
                       <thead className="bg-gray-100">
                         <tr>
                           {roi.costCalculation.headers.map((header, idx) => (
                             <th key={idx} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                               {header}
                             </th>
                           ))}
                         </tr>
                       </thead>
                       <tbody className="bg-white divide-y divide-gray-200">
                         {roi.costCalculation.rows.map((row, rowIdx) => (
                            // Hebe die letzte Zeile (Netto-Einsparung) hervor
                           <tr key={rowIdx} className={rowIdx === roi.costCalculation.rows.length - 1 ? "bg-green-50 font-semibold" : ""}>
                             {row.map((cell, cellIdx) => (
                               <td
                                 key={cellIdx}
                                 className={`px-6 py-4 whitespace-nowrap text-sm ${
                                   cellIdx === 0 ? "font-medium text-gray-900" : "text-gray-600"
                                 } ${
                                   // Hebe die letzte Spalte (Differenz/Einsparung) hervor
                                   cellIdx === row.length - 1 ? "text-green-700" : ""
                                 } ${
                                    rowIdx === roi.costCalculation.rows.length - 1 ? (cellIdx === 0 ? "text-green-800" : "text-green-700") : ""
                                 }`}
                               >
                                 {cell}
                               </td>
                             ))}
                           </tr>
                         ))}
                       </tbody>
                     </table>
                   </div>
                 </div>
               )}

               {/* 3. Zusätzliche Vorteile (falls vorhanden) */}
               {Array.isArray(roi.additionalBenefits) && roi.additionalBenefits.length > 0 && (
                 <div className="mt-8 border-t border-gray-200 pt-6"> {/* Abstand und Trennlinie */}
                   <h5 className="text-lg font-semibold text-gray-800 mb-2">Zusätzliche ROI-Treiber:</h5>
                   <ul className="list-disc pl-5 space-y-1">
                     {roi.additionalBenefits.map((benefit, idx) => (
                       <li
                         key={idx}
                         className="text-sm text-gray-700"
                         dangerouslySetInnerHTML={{ __html: benefit }} // Erlaube HTML-Tags
                       ></li>
                     ))}
                   </ul>
                 </div>
               )}

               {/* 4. Fazit (falls vorhanden) */}
               {roi.conclusion && (
                  <div className="mt-8 border-t border-gray-200 pt-6"> {/* Abstand und Trennlinie */}
                    <div className="bg-gray-100 p-5 rounded-lg border border-gray-200 shadow-sm">
                       <h5 className="text-lg font-semibold text-gray-800 mb-2">Fazit:</h5>
                       <p
                         className="text-sm text-gray-700"
                         dangerouslySetInnerHTML={{ __html: roi.conclusion }}
                       ></p>
                    </div>
                  </div>
               )}

               {/* Fallback, falls keine Inhalte in roi vorhanden sind */}
               {!roi.timeComparison && !roi.costCalculation && (!roi.additionalBenefits || roi.additionalBenefits.length === 0) && !roi.conclusion && (
                  <p className="text-gray-500 italic text-sm">Keine ROI-Berechnung definiert.</p>
               )}
             </div>
           )}
         </div>
      )}

      {/* Export Button */}
      <div className="mt-8 text-center">
          <button
            onClick={() => {
              const data = {
                title: title,
                progress: Math.round(calculateTotalProgress()),
                // --- NEU: Exportiere den aktuellen sections-State ---
                state: sections.map(s => ({
                  id: s.id,
                  title: s.title,
                  tasks: s.tasks.map(t => ({ id: t.id, text: t.text, completed: t.completed }))
                }))
              };
              console.log("Export Data:", data);
              alert(`Fortschritt exportiert! (Siehe Konsole für Details)`);
            }}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Fortschritt exportieren
          </button>
       </div>

       {/* --- Footer (aus deinem Original) --- */}
       <div className="mt-8 text-center text-sm text-gray-500">
         <p>© {new Date().getFullYear()} Tutorial Assistant - Alle Rechte vorbehalten</p>
       </div>
    </div>
  );
};

export default TutorialAssistant;