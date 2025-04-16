// meetingGptContent.js - alternative Inhaltsdaten für einen Meeting-Optimierungs-GPT

const meetingGptContent = {
    id: "meeting-optimization",
    title: "Erstellung eines GPTs für Meeting-Optimierung",
    
    // Abschnitte mit Aufgaben - angepasst für den Meeting-Optimierungs-Anwendungsfall
    sections: [
      {
        id: "preparation",
        title: "Vorbereitung",
        tasks: [
          { id: "prep1", text: "ChatGPT-Konto mit Plus-Abonnement sicherstellen" },
          { id: "prep2", text: "Typische Meeting-Agenden und Protokolle sammeln" },
          { id: "prep3", text: "Meeting-Schmerzpunkte im Team identifizieren" },
          { id: "prep4", text: "Bestehende Meeting-Workflows dokumentieren" }
        ]
      },
      {
        id: "step1",
        title: "Schritt 1: GPT-Editor öffnen",
        tasks: [
          { id: "s1t1", text: "Bei ChatGPT einloggen" },
          { id: "s1t2", text: "\"GPTs erstellen\" auswählen" },
          { id: "s1t3", text: "\"Neuer GPT\" anklicken" }
        ]
      },
      {
        id: "step2",
        title: "Schritt 2: Grundlegende GPT-Konfiguration",
        tasks: [
          { id: "ms2t1", text: "Namen eingeben: \"Meeting-Optimierer\"" },
          { id: "ms2t2", text: "Beschreibung eingeben: \"Hilft bei der Vorbereitung, Durchführung und Nachbereitung effektiver Meetings.\"" },
          { id: "ms2t3", text: "Gesprächsaufhänger eingeben: \"Ich benötige Hilfe mit einem Meeting.\"" }
        ]
      },
      {
        id: "step3",
        title: "Schritt 3: Funktionen aktivieren",
        tasks: [
          { id: "s3t1", text: "Internetsuche aktivieren ✓" },
          { id: "s3t2", text: "Code-Interpreter und Datenanalyse aktivieren ✓" },
          { id: "s3t3", text: "DALL-E Bildgenerierung aktivieren ✓ (für Visualisierung von Meeting-Strukturen)" },
          { id: "s3t4", text: "Canvas aktivieren ✓ (für Meeting-Boards)" }
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
          { id: "s5t2", text: "Meeting-Vorlagen und Best Practices hochladen" },
          { id: "s5t3", text: "Unternehmensspezifische Meeting-Richtlinien hochladen" }
        ]
      },
      {
        id: "step6",
        title: "Schritt 6: GPT testen",
        tasks: [
          { id: "s6t1", text: "\"Vorschau erstellen\" anklicken" },
          { id: "s6t2", text: "Standardeinstieg verwenden: \"Ich brauche Hilfe bei der Vorbereitung eines wichtigen Team-Meetings.\"" },
          { id: "s6t3", text: "Test-Agenda erstellen lassen" },
          { id: "s6t4", text: "Test-Protokollvorlage generieren lassen" },
          { id: "s6t5", text: "Follow-up-Emails generieren lassen" }
        ]
      },
      {
        id: "step7",
        title: "Schritt 7: GPT optimieren",
        tasks: [
          { id: "s7t1", text: "Bei Bedarf zu \"Anweisungen\" zurückkehren und Anpassungen vornehmen" },
          { id: "s7t2", text: "GPT mit verschiedenen Meeting-Typen testen (Brainstorming, Status-Update, Entscheidungsfindung)" },
          { id: "s7t3", text: "Anweisungen für spezifische Meeting-Szenarien erweitern" }
        ]
      },
      {
        id: "step8",
        title: "Schritt 8: GPT veröffentlichen & teilen",
        tasks: [
          { id: "s8t1", text: "\"Erstellen\" anklicken" },
          { id: "s8t2", text: "Zugriffseinstellungen anpassen (privat oder für Team freigeben)" },
          { id: "s8t3", text: "Link zum GPT mit dem Team teilen" }
        ]
      },
      {
        id: "step9",
        title: "Schritt 9: Meeting-Workflow einrichten",
        tasks: [
          { id: "s9t1", text: "Standardablauf für Meetingvorbereitung mit GPT definieren" },
          { id: "s9t2", text: "Prozess für Nachbereitung und Verteilung der Ergebnisse festlegen" },
          { id: "s9t3", text: "Integration in bestehende Kalender- und Projektmanagement-Tools prüfen" }
        ]
      },
      {
        id: "step10",
        title: "Schritt 10: Schulung & Dokumentation",
        tasks: [
          { id: "s10t1", text: "Anleitung für Team-Mitglieder erstellen" },
          { id: "s10t2", text: "Best Practices für die Nutzung des Meeting-GPTs dokumentieren" },
          { id: "s10t3", text: "Feedback-Prozess für kontinuierliche Verbesserung einrichten" },
          { id: "s10t4", text: "Erfolgsmetriken für Meeting-Optimierung definieren" }
        ]
      }
    ],
    
    // Hilfreiche Prompts
    prompts: {
      gptHints: "Dieser GPT hilft dir, Meetings effizienter zu gestalten...",
      gptInstructions: "Du bist ein Assistent zur Optimierung von Meetings...",
      agendaPrompt: "Erstelle eine Agenda für ein [Meeting-Typ] Meeting zum Thema [Thema]..."
    },
    
    // Herausforderungen bei Meetings
    challenges: {
      title: "Typische Herausforderungen bei Meetings",
      items: [
        {
          icon: "⏳",
          title: "Zeitverschwendung",
          color: "red",
          description: "Meetings dauern oft zu lange..."
        },
        {
          icon: "🎯",
          title: "Mangel an klaren Zielen und Struktur",
          color: "orange",
          description: "<strong>Nur 37% der Meetings</strong> haben eine klare Agenda und definierte Ziele. Unstrukturierte Meetings führen zu Abschweifungen, wiederholten Diskussionen und fehlender Fokussierung. Teilnehmer verlassen <strong>46% der Meetings ohne klares Verständnis</strong> der nächsten Schritte."
        },
        {
          icon: "🧠",
          title: "Kognitive Überlastung und Meeting-Fatigue",
          color: "yellow",
          description: "Die Zunahme virtueller Meetings hat zu dem Phänomen der <strong>\"Zoom-Fatigue\"</strong> geführt. Nach vier aufeinanderfolgenden Videomeetings sinkt die Konzentrationsfähigkeit um <strong>bis zu 41%</strong>. Dies führt zu verminderter Kreativität, schlechteren Entscheidungen und erhöhtem Stress."
        },
        {
          icon: "👥",
          title: "Ungleiche Beteiligung und dominante Sprecher",
          color: "blue",
          description: "In typischen Meetings sprechen <strong>3-4 Personen 70% der Zeit</strong>, während viele Teilnehmer kaum zu Wort kommen. Diese Dynamik führt zu ungenutztem Potenzial, da wertvolle Perspektiven verloren gehen und <strong>diverse Sichtweisen</strong> nicht berücksichtigt werden."
        }
      ],
      statistics: {
        headers: ["Meeting-Aspekt", "Traditionelle Meetings", "Optimierte Meetings", "Verbesserungspotenzial"],
        rows: [
          ["Durchschnittliche Dauer", "60 Minuten", "30-45 Minuten", "-25-50%"],
          ["Teilnehmer mit aktivem Beitrag", "30-40%", "80-90%", "+125%"],
          ["Entscheidungen pro Meeting", "1-2", "3-5", "+150%"],
          ["Follow-up-Quote", "20-30%", "90-95%", "+217%"],
          ["Zufriedenheit der Teilnehmer", "45%", "85%", "+89%"]
        ]
      },
      centralProblems: [
        "<strong>Zeitproblem:</strong> Zu viele, zu lange Meetings mit zu vielen Teilnehmern",
        "<strong>Strukturproblem:</strong> Fehlende Agenda, unklare Ziele und mangelnde Moderation",
        "<strong>Nachbereitungsproblem:</strong> Unzureichende Dokumentation und fehlendes Follow-up",
        "<strong>Beteiligungsproblem:</strong> Unausgewogene Redeanteile und fehlende Inklusion",
        "<strong>Kulturproblem:</strong> Meetings als Standardlösung statt als gezielte Maßnahme"
      ]
    },
    
    // Vorteile des GPT-gestützten Ansatzes
    benefits: {
      strategic: [
        {
          icon: "✅",
          title: "Bessere Entscheidungen",
          color: "green",
          description: "Strukturierte Meetings führen zu..."
        },
        {
          icon: "🔄",
          title: "Konsistente Meeting-Qualität",
          color: "green",
          description: "Unabhängig vom Meeting-Moderator sorgt der GPT für <strong>gleichbleibend hohe Standards</strong> bei der Durchführung. Besonders vorteilhaft in Organisationen mit unterschiedlichen Teams und Führungsstilen, da er <strong>Best Practices</strong> systematisch in jeden Meeting-Prozess integriert."
        },
        {
          icon: "🧠",
          title: "Bessere Entscheidungsfindung",
          color: "purple",
          description: "Durch strukturierte Vorlagen für Entscheidungsprozesse und <strong>transparente Dokumentation</strong> von Entscheidungsgrundlagen verbessert der GPT die Qualität der Meeting-Ergebnisse. Studien zeigen, dass gut strukturierte Meetings zu <strong>32% besseren Entscheidungen</strong> führen."
        }
      ],
      operational: [
        {
          icon: "⏱️",
          title: "Kürzere Meetingdauer",
          color: "blue",
          description: "Der GPT hilft, Agenden zu straffen..."
        },
        {
          icon: "📋",
          title: "Lückenlose Dokumentation",
          color: "red",
          description: "Der GPT erzeugt <strong>strukturierte Protokollvorlagen</strong>, die eine konsistente Erfassung aller relevanten Informationen sicherstellen. Die Qualität der Dokumentation steigt erheblich, während der Zeitaufwand für die Nachbereitung um <strong>70%</strong> sinkt."
        },
        {
          icon: "🔍",
          title: "Verbesserte Nachverfolgung",
          color: "teal",
          description: "Durch die Erstellung klarer <strong>Aktionspunkte mit Verantwortlichkeiten</strong> und die Generierung von Follow-up-Emails steigt die Umsetzungsquote nach Meetings von durchschnittlich 30% auf über <strong>85%</strong>. Die strukturierte Nachverfolgung verhindert, dass Beschlüsse im Sande verlaufen."
        }
      ],
      scalability: {
        headers: ["Szenario", "Traditioneller Ansatz", "Mit Meeting-GPT", "Steigerung"],
        rows: [
          ["Vorbereitungszeit pro Meeting", "45-60 Min", "5-10 Min", "-83%"],
          ["Nachbereitungszeit pro Meeting", "30-45 Min", "5-10 Min", "-78%"],
          ["Durchschnittliche Meeting-Dauer", "60 Min", "30-45 Min", "-25-50%"],
          ["Umsetzungsquote von Beschlüssen", "30-40%", "80-90%", "+150%"]
        ]
      },
      testimonial: "Seit der Einführung des Meeting-GPTs hat sich unsere Meeting-Kultur <strong>fundamental verbessert</strong>. Wir sparen pro Woche und Mitarbeiter durchschnittlich <strong>5-7 Stunden</strong>, die vorher in ineffizienten Besprechungen verloren gingen. Die Qualität unserer Entscheidungen hat sich merklich verbessert, und die Mitarbeiterzufriedenheit ist deutlich gestiegen. Der GPT hat nicht nur unsere Prozesse optimiert, sondern <strong>unsere gesamte Arbeitsweise</strong> positiv verändert."
    },
    
    // ROI-Berechnung
    roi: {
      timeComparison: {
        headers: ["Prozessschritt", "Traditioneller Ansatz (Min/Meeting)", "Mit GPT (Min/Meeting)", "Zeitersparnis (%)"],
        rows: [
          ["Agendaerstellung", "20", "3", "85%"],
          ["Erstellung der Unterlagen", "30", "5", "83%"],
          ["Protokollvorbereitung", "15", "2", "87%"],
          ["Nachbereitung & Follow-up", "25", "5", "80%"],
          ["Gesamtzeit pro Meeting", "90 Min", "15 Min", "83%"]
        ]
      },
      costCalculation: {
        headers: ["Kennzahl", "Traditioneller Ansatz", "Mit Meeting-GPT", "Differenz"],
        rows: [
          ["Zeitaufwand für 100 Meetings", "150 Stunden", "25 Stunden", "125 Stunden gespart"],
          ["Arbeitskosten (bei 60€/Stunde)", "9.000€", "1.500€", "7.500€ gespart"],
          ["GPT-Tool Kosten (ca.)", "0€", "500€", "500€ Mehrkosten"],
          ["Netto-Kosteneinsparung", "-", "-", "7.000€"]
        ]
      },
      additionalBenefits: [
        "<span class=\"font-semibold\">Reduzierte Meeting-Anzahl:</span> Durch bessere Vorbereitung und Dokumentation werden 15-20% der Meetings überflüssig",
        "<span class=\"font-semibold\">Höhere Mitarbeiterzufriedenheit:</span> Reduktion von Meeting-Frustration führt zu messbarer Motivationssteigerung",
        "<span class=\"font-semibold\">Verbesserte Entscheidungsqualität:</span> Strukturierte Prozesse führen zu 25-35% besseren Entscheidungen",
        "<span class=\"font-semibold\">Beschleunigte Umsetzung:</span> Klare Aktionspunkte und Verantwortlichkeiten verkürzen Implementierungszeiten",
        "<span class=\"font-semibold\">Verbesserte Zusammenarbeit:</span> Transparente Prozesse und inklusive Strukturen fördern Teamarbeit",
        "<span class=\"font-semibold\">Organisatorisches Lernen:</span> Bessere Dokumentation fördert Wissenstransfer und kontinuierliche Verbesserung"
      ],
      conclusion: "Bei 100 durchgeführten Meetings spart der Einsatz des Meeting-GPTs ca. <strong>83%</strong> der administrativen Zeit ein, was einer Netto-Kosteneinsparung von etwa <strong>7.000€</strong> entspricht. Diese Berechnung berücksichtigt noch nicht die eingesparte Meeting-Zeit der Teilnehmer durch kürzere, fokussiertere Meetings, was die tatsächliche Einsparung <strong>deutlich erhöht</strong>. Die Investition in den Meeting-GPT amortisiert sich bereits nach <strong>wenigen Wochen</strong>."
    }
  };
  
  export default meetingGptContent;