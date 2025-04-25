// tutorialContent.js - Inhaltsdaten für den B2B-Kaltakquise-GPT-Assistenten

const tutorialContent = {
  id: "b2b-cold-email",
  title: "Erstellung eines GPTs für B2B-Kaltakquise-Emails",

  // Abschnitte mit Aufgaben (ohne description und prompts innerhalb der sections)
  sections: [
    {
      id: "preparation",
      title: "Vorbereitung",
      tasks: [
        { id: "prep1", text: "ChatGPT-Konto mit Plus-Abonnement sicherstellen" },
        { id: "prep2", text: "Perplexity-Konto für die Recherche einrichten" },
        { id: "prep3", text: "Unternehmensinformationen zusammenstellen (Digitale Beschreibungen, Marketingmaterial, etc.)" },
        { id: "prep4", text: "Beispiel-Zielunternehmen für Tests auswählen (muss eine Website haben)" }
      ]
    },
    {
      id: "step1",
      title: "Schritt 1: GPT-Editor öffnen",
      tasks: [
        { id: "s1t1", text: "Bei ChatGPT-Konto einloggen" },
        { id: "s1t2", text: "Links im Menübaum \"GPTs erkunden\" auswählen" },
        { id: "s1t3", text: "Oben rechts \"+ Erstellen\" anklicken um den GPT erstmals zu sichern" }
      ]
    },
    {
      id: "step2",
      title: "Schritt 2: Grundlegende GPT-Konfiguration",
      tasks: [
        { id: "s2t1", text: "Namen eingeben: z.B. \"B2B Kaltakquise Profi\"" },
        { id: "s2t2", text: "Beschreibung eingeben: z.B. \"Erstellt hochpersonalisierte B2B-Kaltakquise-Emails für Unternehmen jeder Branche basierend auf detaillierten Recherchen zu Zielunternehmen und eigenen Dienstleistungen.\"" },
        { id: "s2t3", text: "Hinweise eingeben (siehe Abschnitt \"Hilfreiche Prompts\")" },
        { id: "s2t4", text: "Gesprächsaufhänger eingeben: z.B. \"Ich möchte eine personalisierte Kaltakquise-Email erstellen. Hier sind Informationen über mein Unternehmen und das Zielunternehmen.\"" }
      ]
    },
    {
      id: "step3",
      title: "Schritt 3: Funktionen aktivieren (Stand 04/25)",
      tasks: [
        { id: "s3t1", text: "Internetsuche aktivieren ✓" },
        { id: "s3t2", text: "Canvas aktivieren ✓" },
        { id: "s3t3", text: "DALL-E Bildgenerierung deaktivieren ✗" },
        { id: "s3t4", text: "Code-Interpreter und Datenanalyse deaktivieren ✗" },
        { id: "s3t5", text: "Oben rechts \"Aktualisieren \" anklicken um den GPT zu sichern" }
      ]
    },
    {
      id: "step4",
      title: "Schritt 4: GPT-Anweisungen eingeben",
      tasks: [
        { id: "s4t1", text: "Anweisungen für den GPT eingeben (siehe Abschnitt \"Hilfreiche Prompts\")" },
        { id: "s4t2", text: "Anweisungen auf Vollständigkeit prüfen" }
      ]
    },
    {
      id: "step5",
      title: "Schritt 5: GPT-Wissen hochladen (optional)",
      tasks: [
        { id: "s5t1", text: "\"Datei hochladen\" wählen" },
        { id: "s5t2", text: "Unternehmensprofil als Markdown-Datei hochladen" },
        { id: "s5t3", text: "Bei Bedarf weitere Dokumente hochladen (Produktkataloge, Referenzen, etc.)" }
      ]
    },
    {
      id: "step6",
      title: "Schritt 6: GPT testen",
      tasks: [
        { id: "s6t1", text: "\"Vorschau erstellen\" anklicken" },
        { id: "s6t2", text: "Standardeinstieg verwenden: \"Ich möchte eine personalisierte Kaltakquise-Email erstellen.\"" },
        { id: "s6t3", text: "Beispiel-Informationen für eigenes Unternehmen bereitstellen" },
        { id: "s6t4", text: "Perplexity-Recherche für Test-Zielunternehmen einfügen" },
        { id: "s6t5", text: "Erstellte Email auf Qualität und Personalisierung prüfen" }
      ]
    },
    {
      id: "step7",
      title: "Schritt 7: GPT optimieren",
      tasks: [
        { id: "s7t1", text: "Bei Bedarf zu \"Anweisungen\" zurückkehren und Anpassungen vornehmen" },
        { id: "s7t2", text: "GPT erneut testen mit unterschiedlichen Unternehmen" },
        { id: "s7t3", text: "Feintuning basierend auf Testergebnissen" }
      ]
    },
    {
      id: "step8",
      title: "Schritt 8: GPT veröffentlichen & teilen",
      tasks: [
        { id: "s8t1", text: "\"Erstellen\" anklicken" },
        { id: "s8t2", text: "Zugriffseinstellungen anpassen (privat oder für Team freigeben)" },
        { id: "s8t3", text: "Link zum GPT kopieren und für das Team bereitstellen" }
      ]
    },
    {
      id: "step9",
      title: "Schritt 9: Perplexity-Recherche-Workflow einrichten",
      tasks: [
        { id: "s9t1", text: "Perplexity-Recherchetemplate erstellen (siehe Abschnitt \"Hilfreiche Prompts\")" },
        { id: "s9t2", text: "Template im Team teilen" },
        { id: "s9t3", text: "Test-Recherche durchführen" }
      ]
    },
    {
      id: "step10",
      title: "Schritt 10: Schulung & Dokumentation",
      tasks: [
        { id: "s10t1", text: "Anleitung für Team-Mitglieder erstellen" },
        { id: "s10t2", text: "Best Practices für Kaltakquise-Emails dokumentieren" },
        { id: "s10t3", text: "Schulungssitzung für das Team durchführen" },
        { id: "s10t4", text: "Feedback-Prozess einrichten" }
      ]
    }
  ],

  // --- NEU: Top-Level-Objekte hinzugefügt ---

  // Hilfreiche Prompts
  prompts: {
    gptHints: `Dieser GPT hilft dir, hochpersonalisierte Kaltakquise-Emails für B2B-Leads zu erstellen, unabhängig von deiner Branche.
1. Sammeln wir Informationen über dein eigenes Unternehmen und deine Dienstleistungen/Produkte uns speichern diese in diesem UseCase ab.
2. Wir machen eine Recherche über das Zielunternehmen (z.B. aus Perplexity) und verwenden diese Informationen um eine hochpersonalisierte Email zu erstellen.

Der GPT analysiert beide Informationsquellen und erstellt eine überzeugende, personalisierte Email, die auf spezifische Bedürfnisse, Herausforderungen und Möglichkeiten des Zielunternehmens eingeht.

Für die besten Ergebnisse solltest du:
- Detaillierte Informationen über dein Unternehmen bereitstellen
- Gründliche Recherchen zum Zielunternehmen hochladen
- Spezifische Anpassungswünsche für die Email angeben`,

    gptInstructions: `Du bist ein spezialisierter B2B-Kaltakquise-Email-Generator für Unternehmen aller Branchen. Deine Aufgabe ist es, hochpersonalisierte Emails zu erstellen, die auf detaillierten Recherchen über das Zielunternehmen und das anbietende Unternehmen basieren.

# ARBEITSWEISE

1. Du beginnst jedes Gespräch, indem du dem Nutzer sagst, welches Unternehmen du repräsentierst (also das aus deiner Wissensdatenbank) und nach wichtigen Informationsbereichen fragst:
   - Sind die Informationen über das eigene Unternehmen (Branche, Produkte, Dienstleistungen, USPs) die im GPT gespeichert sind noch aktuell oder sind neue Informationen verfügbar
   - Welche Rechercheergebnisse über das Zielunternehmen vorhanden sind.

2. Du analysierst die bereitgestellten Informationen sorgfältig und identifizierst:
   - Die wichtigsten Dienstleistungen/Produkte des eigenen Unternehmens
   - Die Herausforderungen, Bedürfnisse und Schmerzpunkte des Zielunternehmens
   - Die wichtigsten Entscheidungsträger (insbesondere CEO/Geschäftsführer)
   - Potenzielle Überschneidungen und Synergien zwischen beiden Unternehmen
   - Aktuelle Entwicklungen oder strategische Ziele des Zielunternehmens
   - Branchenspezifische Probleme und Lösungsansätze

3. Du erstellst eine Email mit folgenden Eigenschaften:
   - Persönliche Ansprache des Entscheidungsträgers (vorzugsweise CEO/Geschäftsführer)
   - Kurze, prägnante Form (max. 250-300 Wörter)
   - Klarer Bezug zu aktuellen Herausforderungen oder Zielen des Zielunternehmens
   - Spezifische Vorschläge, wie die Produkte/Dienstleistungen des eigenen Unternehmens helfen können
   - Konkreter Mehrwert und messbare Vorteile
   - Klarer Call-to-Action für ein Erstgespräch

# FORMAT DER EMAIL

Die Email soll folgende Struktur haben:
1. Betreffzeile: Prägnant, personalisiert und Interesse weckend
2. Anrede: Persönlich und korrekt
3. Eröffnung: Bezug zu einer aktuellen Entwicklung/Herausforderung des Zielunternehmens
4. Brücke: Verbindung zwischen Herausforderung und eigener Lösung
5. Wertversprechen: Spezifischer Mehrwert und potenzielle Ergebnisse
6. Referenz/Glaubwürdigkeit: Kurzer Verweis auf relevante Erfolge/Erfahrung
7. Call-to-Action: Konkrete, niedrigschwellige Anfrage für nächsten Schritt
8. Signatur: Professionell mit vollständigen Kontaktdaten

# TONALITÄT

- Professionell aber nicht steif
- Persönlich aber nicht aufdringlich
- Selbstbewusst aber nicht überheblich
- Wertorientiert aber nicht verkäuferisch
- Auf Augenhöhe mit dem Entscheidungsträger
- An die jeweilige Branche angepasst (z.B. kreativer für Werbeagenturen, technischer für Industrieunternehmen)

# WICHTIGE HINWEISE

- Nutze nur Fakten und Informationen, die in den bereitgestellten Unterlagen enthalten sind
- Vermeide inhaltsleere Floskeln und generische Aussagen
- Keine Übertreibungen oder unglaubwürdige Versprechen
- Kommuniziere von Entscheider zu Entscheider
- Die Email muss in deutscher Sprache verfasst werden
- Passe Sprache und Beispiele an die Branche des anbietenden Unternehmens an
- Stelle eine klare Verbindung zwischen den Bedürfnissen des Zielunternehmens und den Angeboten des eigenen Unternehmens her

Wenn der Nutzer unzureichende Informationen bereitstellt, frage gezielt nach, um eine bessere Personalisierung zu ermöglichen.

# BEISPIEL-SZENARIEN (zur Orientierung)

1. Tischlerei → Innenarchitekturbüro
2. IT-Dienstleister → Produktionsbetrieb
3. Werbeagentur → Einzelhandelsunternehmen
4. Finanzberater → Wachstumsorientiertes StartUp
5. Unternehmensberater → Familienunternehmen im Generationswechsel

Für jedes Szenario passt du Tonalität, Fachbegriffe und Wertversprechen entsprechend an.`,

    perplexityResearch: `Recherchiere umfassend folgendes Unternehmen anhand der Website-URL: [WEBSITE-URL EINFÜGEN]

Erstelle einen detaillierten Bericht mit folgenden Informationen:

1. Unternehmensprofil & Marktposition
   - Vollständiger Name, Gründungsjahr, Standorte
   - Kernprodukte und -dienstleistungen
   - Hauptzielgruppen und Marktsegmente
   - Marktpositionierung und USPs
   - Größe (Mitarbeiterzahl, falls verfügbar)

2. Geschäftsführung & Entscheidungsträger
   - Name und Position des CEO/Geschäftsführers
   - Führungsteam mit vollständigen Namen und Funktionen
   - Hintergrundinformationen zu Schlüsselpersonen (Ausbildung, Werdegang)
   - LinkedIn-Profile und andere öffentliche Präsenzen der Führungskräfte

3. Aktuelle Entwicklungen & Neuigkeiten
   - Jüngste Pressemitteilungen und Unternehmensnachrichten
   - Aktuelle Projekte und Produkteinführungen
   - Erwähnungen in Branchenpublikationen oder Nachrichtenquellen
   - Teilnahme an Messen, Konferenzen oder Branchenevents

4. Herausforderungen & Schmerzpunkte
   - Erkennbare Probleme oder Herausforderungen des Unternehmens
   - Branchenspezifische Schwierigkeiten
   - Wettbewerbsdruck und Marktveränderungen
   - Kundenrezensionen oder -feedback, die auf Probleme hindeuten könnten

5. Technologie & Digitalisierungsgrad
   - Vorhandene technologische Infrastruktur
   - Digitalisierungsstand (Website, Online-Präsenz, E-Commerce)
   - Verwendete Software oder Plattformen
   - IT-Partner oder bekannte Technologieanbieter

6. Unternehmenskultur & Werte
   - Kommunizierte Unternehmenswerte und -vision
   - Nachhaltigkeits- und CSR-Initiativen
   - Firmenkultur und Arbeitgeberimage
   - Social-Media-Präsenz und -Aktivität (insbesondere LinkedIn, Instagram, Facebook)

7. Wachstumsstrategie & Zukunftspläne
   - Erkennbare Expansionspläne oder Wachstumsstrategien
   - Investitionen oder Finanzierungsrunden
   - Internationale Ausrichtung oder neue Märkte
   - Ankündigungen zu strategischen Zielen

8. Wettbewerber & Marktumfeld
   - Hauptkonkurrenten und deren Positionierung
   - Markttrends und Branchenentwicklungen
   - Wettbewerbsvorteile und -nachteile

Bitte berücksichtige alle öffentlich zugänglichen Quellen, einschließlich:
- Die offizielle Unternehmenswebsite
- Social-Media-Profile (LinkedIn, Instagram, Facebook, Twitter, YouTube)
- Branchenpublikationen und Nachrichtenquellen
- Wirtschaftsdatenbanken und Unternehmensregister
- Stellenausschreibungen des Unternehmens
- Kundenrezensionen und -bewertungen
- Interviews oder Vorträge von Führungskräften

Falls verfügbar, füge Links zu den wichtigsten Quellen bei.`
  },

  // Herausforderungen der B2B-Kaltakquise
  challenges: {
    title: "Typische Herausforderungen bei der B2B-Kaltakquise",
    items: [
      {
        icon: "🔒",
        title: "Zugangshürden zu Entscheidern",
        color: "red",
        description: "<strong>93% der Entscheider</strong> öffnen keine generischen Kaltakquise-Emails. Die größte Herausforderung besteht darin, überhaupt durch den Spam-Filter zu kommen und gelesen zu werden. <strong>Personalisierung ist entscheidend</strong>, aber traditionell sehr zeitaufwändig."
      },
      {
        icon: "⏱️",
        title: "Hoher Zeitaufwand für Recherche",
        color: "orange",
        description: "Für eine wirklich personalisierte Email benötigt ein Vertriebsmitarbeiter <strong>durchschnittlich 45-60 Minuten</strong> allein für die Recherche. Bei größeren Kampagnen ist dieser Aufwand <strong>kaum skalierbar</strong>, was zu qualitativ minderwertigen Massen-Emails führt."
      },
      {
        icon: "🎯",
        title: "Relevanz und Timing",
        color: "yellow",
        description: "<strong>Nur 13% der traditionellen Kaltakquise-Emails</strong> treffen einen aktuellen Schmerzpunkt des Empfängers. Die Identifikation der <strong>richtigen Herausforderungen zum richtigen Zeitpunkt</strong> erfordert tiefgehende Recherche, die manuell oft oberflächlich bleibt."
      },
      {
        icon: "📊",
        title: "Wissens- und Skill-Gap",
        color: "blue",
        description: "Die Qualität der Kaltakquise variiert stark innerhalb des Teams. <strong>Erfahrene Vertriebsmitarbeiter</strong> erzielen oft 3-5x bessere Ergebnisse als Neulinge. Dieses <strong>implizite Wissen</strong> ist schwer zu übertragen und standardisieren."
      }
    ],
    statistics: {
      headers: ["Email-Typ", "Öffnungsrate", "Antwortquote", "Terminvereinbarungen"],
      rows: [
        ["Generische Massen-Emails", "10-15%", "0.5-2%", "0.1-0.5%"],
        ["Oberflächlich personalisiert", "15-25%", "2-5%", "0.5-1.5%"],
        ["Tiefgehend personalisiert (traditionell)", "30-45%", "8-15%", "3-7%"],
        ["KI-gestützt personalisiert", "40-60%", "10-25%", "5-12%"]
      ]
    },
    centralProblems: [
      "<strong>Skalierungsproblem:</strong> Hohe Qualität und hohe Quantität scheinen unvereinbar",
      "<strong>Ressourcenproblem:</strong> Der Zeit- und Personalaufwand für hochwertige Kaltakquise ist enorm",
      "<strong>Informationsproblem:</strong> Die Erfassung und Analyse relevanter Daten zu Zielunternehmen ist komplex",
      "<strong>Konsistenzproblem:</strong> Die Qualität schwankt stark je nach Mitarbeiter und Zeitdruck",
      "<strong>Anpassungsproblem:</strong> Branchenspezifische Sprache und Verständnis erfordern Spezialwissen"
    ]
  },

  // Vorteile des GPT-gestützten Ansatzes
  benefits: {
    strategic: [
      {
        icon: "🎯",
        title: "Höhere Relevanz & Personalisierung",
        color: "blue",
        description: "Der GPT analysiert umfangreiche Daten zu Zielunternehmen und identifiziert <strong>spezifische Schmerzpunkte</strong>, Bedürfnisse und Opportunitäten. Dies ermöglicht eine <strong>tiefere Personalisierung</strong> als bei manuellen Methoden, da Verbindungen hergestellt werden können, die menschlichen Researchern möglicherweise entgehen."
      },
      {
        icon: "📈",
        title: "Höhere Conversion-Raten",
        color: "green",
        description: "Durch die verbesserte Personalisierung und Relevanz steigen typischerweise die Öffnungsraten um <strong>30-40%</strong> und die Antwortquoten um <strong>25-35%</strong> im Vergleich zu generischen Ansätzen. Dies führt zu <strong>mehr Erstgesprächen</strong> und letztendlich zu mehr Abschlüssen."
      },
      {
        icon: "🔄",
        title: "Konsistente Markensprache",
        color: "purple",
        description: "Der GPT sorgt für eine <strong>einheitliche Kommunikation</strong>, die zur Unternehmensstimme passt - unabhängig davon, wer die Emails erstellt. Dies stärkt die <strong>Markenwahrnehmung</strong> und verhindert qualitative Schwankungen zwischen verschiedenen Vertriebsmitarbeitern."
      }
    ],
    operational: [
      {
        icon: "⚡",
        title: "Drastische Effizienzsteigerung",
        color: "amber",
        description: "Was früher 2+ Stunden pro qualitativ hochwertiger Email in Anspruch nahm, kann jetzt in etwa <strong>10 Minuten</strong> erledigt werden. Dies ermöglicht eine <strong>mehr als 10-fache</strong> Steigerung der Outreach-Kapazität und eine signifikant schnellere Marktbearbeitung."
      },
      {
        icon: "🧠",
        title: "Verringerung des Skill-Gaps",
        color: "red",
        description: "Auch <strong>weniger erfahrene Vertriebsmitarbeiter</strong> können mit Hilfe des GPTs hochwertige Kaltakquise betreiben. Der GPT fungiert als <strong>eingebauter Coach</strong>, der Best Practices anwendet und das kollektive Wissen des Unternehmens nutzbar macht."
      },
      {
        icon: "🔍",
        title: "Tiefere Markteinblicke",
        color: "teal",
        description: "Die systematische Recherche mit Perplexity liefert <strong>umfassendere Einblicke</strong> in Zielunternehmen, Wettbewerber und Markttrends. Diese Informationen können über die Kaltakquise hinaus für <strong>strategische Entscheidungen</strong> genutzt werden und bereichern die Marktintelligenz des Unternehmens."
      }
    ],
    scalability: {
      headers: ["Szenario", "Traditioneller Ansatz", "Mit GPT & Perplexity", "Steigerung"],
      rows: [
        ["Emails pro Mitarbeiter pro Woche", "15-20", "120-150", "+750%"],
        ["Zielgenauigkeit bei Ansprache", "Mittel", "Hoch", "+65%"],
        ["Erschließung neuer Märkte (Zeit)", "4-6 Wochen", "1-2 Wochen", "-75%"],
        ["Onboarding neuer Vertriebsmitarbeiter", "3-4 Monate", "1 Monat", "-70%"]
      ]
    },
    testimonial: "Unser Team konnte die Anzahl der qualifizierten Leads um <strong>720%</strong> steigern, ohne zusätzliches Personal einzustellen. Die Kombination aus ChatGPT und Perplexity hat nicht nur die Effizienz <strong>dramatisch verbessert</strong>, sondern auch die Qualität der Erstgespräche. Prospects kommen jetzt bereits besser informiert und mit konkreteren Vorstellungen in die Gespräche, was die Conversion-Rate im weiteren Verkaufsprozess <strong>deutlich erhöht</strong> hat."
  },

  // ROI-Berechnung
  roi: {
    timeComparison: {
      headers: ["Prozessschritt", "Traditioneller Ansatz (Min/Email)", "Mit KI-Tools (Min/Email)", "Zeitersparnis (%)"],
      rows: [
        ["Recherche zum Zielunternehmen", "45", "5", "89%"],
        ["Analyse der Bedürfnisse/Schmerzpunkte", "30", "2", "93%"],
        ["Emailerstellung und Personalisierung", "35", "2", "94%"],
        ["Überprüfung und Optimierung", "15", "1", "93%"],
        ["Gesamtzeit pro Email", "125 Min", "10 Min", "92%"]
      ]
    },
    costCalculation: {
      headers: ["Kennzahl", "Traditioneller Ansatz", "Mit KI-Tools", "Differenz"],
      rows: [
        ["Zeitaufwand für 100 Emails", "208,3 Stunden", "16,7 Stunden", "191,6 Stunden gespart"],
        ["Arbeitskosten (bei 60€/Stunde)", "12.500€", "1.000€", "11.500€ gespart"],
        ["KI-Tool Kosten (ca.)", "0€", "500€", "500€ Mehrkosten"],
        ["Netto-Kosteneinsparung", "-", "-", "11.000€"]
      ]
    },
    additionalBenefits: [
      "<span class=\"font-semibold\">Höhere Qualität:</span> Durch bessere Personalisierung potentiell höhere Öffnungs- und Antwortrate",
      "<span class=\"font-semibold\">Konsistente Qualität:</span> Gleichbleibend hohe Qualität auch bei großen Volumina",
      "<span class=\"font-semibold\">Skalierbarkeit:</span> Einfache Skalierung auf größere Emailmengen möglich",
      "<span class=\"font-semibold\">Schnellere Marktbearbeitung:</span> Mehr Leads in kürzerer Zeit ansprechen",
      "<span class=\"font-semibold\">Mitarbeiterentlastung:</span> Fokus auf höherwertige Aufgaben statt repetitive Recherche",
      "<span class=\"font-semibold\">Wissenstransfer:</span> KI-Tools können von weniger erfahrenen Mitarbeitern genutzt werden"
    ],
    conclusion: "Bei 100 personalisierten Kaltakquise-Emails spart der Einsatz der KI-Tools ca. <strong>92%</strong> der Arbeitszeit ein, was einer Netto-Kosteneinsparung von etwa <strong>11.000€</strong> entspricht. Die Investition in die KI-Tools amortisiert sich bereits nach <strong>wenigen Emails</strong>."
  }
};

export default tutorialContent;