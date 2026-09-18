/**
 * med.i.scroll – Projekt: pneumokokken-update-kinder
 * ------------------------------------------------------------
 * Arbeitsstand auf Basis des med.i.scroll Mastertemplate v2.
 * Inhaltliche Basis: med-i-scroll_Pneumokokken_Inhaltskonzept_Abstimmung_2026-08-28.docx
 * v0.10: Umsetzung der inhaltlichen Änderungs-/Ergänzungswünsche aus v0.7_Korr (04.09.2026)
 *        auf Basis der sponsorneutralen v0.9: Versorgungslücke stärker gewichtet, Praxis-FAQ erweitert,
 *        Risikokinder individualisiert eingeordnet, Praxisnavigator durch 7-Schritte-Workflow ersetzt,
 *        Praxisfälle auf Versorgungssituationen umgestellt.
 * v0.11: Interaktive Kapitelergänzungen: Praxis-FAQ als aufklappbare Antworten, Praxis-Workflow als swipebare
 *        Einzelslides, Praxis-Fälle mit ausklappbaren Antworten, klickbare Literaturhinweise sowie aktualisiertes Impressum.
 * v0.12: PDF-Export korrigiert: Unicode-kompatible PDF-Ausgabe, erhaltene Zeilenumbrüche, Accordion-Inhalte,
 * v0.13: Mobile-Optimierung für Kapitel Praxis-Workflow sowie abgerundete Ecken für Swipe- und Aufklapp-Module.
 * v0.14: Mobile-Fix Praxis-Workflow: harte Breitenbegrenzung für Card, Inline-Grafik und Swipe-Komponenten gegen intrinsischen Horizontal-Overflow.
 * v0.15: Swipe-Richtung Praxis-Workflow auf Standard-Geste umgestellt: links = vorwärts, rechts = rückwärts; Hinweis unterhalb des Grafik-Elements zentriert.
 * v0.17: Ärztliche Finalredaktion mit Fokus auf publizierte/offizielle Quellen, aktualisierte STIKO 2026 Version 6 und nummerierte Quellenbelege im Text.
 * v0.18: Austausch der final freigegebenen Kapitelgrafiken 02–12 auf Basis der neu gelieferten redigierten Visuals.
 * v0.19: PDF-Layout-Fix für CME-Hinweis und saubere, blockweise Quellen-Paginierung.
 * v0.21: Austausch der Grafikbasis auf die feinbearbeitete Look-&-Feel-Version; gewünschte Anpassungen
 *        in den Grafiken 02, 04, 05, 08 und 10 auf Basis des aktualisierten Grafik-Pakets umgesetzt.
 * v0.24: Kapitel 02 vollständig auf die bestehende Visualisierung aus v0.22 zurückgesetzt;
 *        keine strukturellen/visuellen Änderungen an Kacheln oder Grafikrahmen.
 * v0.25: Textkorrektur Kapitel 02: Todesfälle in erste Einordnungs-Kachel integriert;
 *        Bullet-Struktur auf vier bestehende Textblöcke reduziert.
 * v0.23: Korrekturpaket Kapitel 02/08 inkl. neuer Kachelstruktur, bereinigter Unterzeile,
 *        angepasstem Grafikrahmen sowie Austausch der aktualisierten PNG-Grafiken 02, 04, 05, 08 und 10.
 * v0.29: Animierte Kennzahlen im Kapitel Kernaussagen starten bei jedem erneuten Sichtbarwerden auf dem Screen erneut bei 0 und zählen bis zum Zielwert hoch.
 * v0.28: Praxis-FAQ und Praxis-Fälle: aufgeklappte Antworten mit hellgelbem Hintergrund
 *        und schwarzer Schrift zur klareren visuellen Abgrenzung.
 * v0.27: Praxis-Workflow Navigation angepasst: aktive Zurück-/Weiter-Buttons gelb,
 *        deaktivierte Buttons hellgrau; Schriftfarbe durchgehend schwarz.
 * v0.22: Nachkorrekturen umgesetzt: aktualisierte Einstiegs- und Kernaussagen-Texte,
 *        animierte Kennzahlen, hervorgehobene Versorgungslücke, Risikogruppen-Karten,
 *        bereinigter STIKO-Hinweis, runde Workflow-Ziffern sowie Grafik-Update 02/04.
 * v0.20: Umsetzung der Pfizer-Feinabstimmung vom 16.09.2026: Wording zur frühestmöglichen Immunisierung,
 *        KPI-Fokussierung, neutralisierte Serotypen-/Impfstoffdarstellung, Praxis-Hervorhebungen und bereinigte Referenzen.
 *        sauberere Seitenumbrüche, klickbare Quellen und aktualisierte Impressumsdaten im PDF.
 *
 * WICHTIG VOR GO-LIVE:
 * - medizinische Angaben / STIKO-Empfehlungen nochmals gegen aktuelle Primärquellen prüfen
 * - finale CME-Modul-URL einsetzen
 * - CME-Punkte erst nach Zertifizierung verbindlich ausspielen
 * - Referentennamen erst nach verbindlicher Zusage im CTA nennen
 */

export const project = {
  meta: {
    title: "Pneumokokken-Impfung bei Kindern",
    eyebrow: "Pädiatrie · Impfprävention",
    medicalField: "Kinder- und Jugendmedizin",
    indication: "Pneumokokken-Impfung bei Kindern",
    description: "med.i.scroll – Pneumokokken-Impfung bei Kindern: alters- und risikoadaptiert zur passenden Impfstrategie",
    logo: "/assets/images/glo-logo.png",
    logoUrl: "https://www.gelbe-liste.de/",
    moduleId: "pneumokokken-update-kinder", // Legacy-Alias; für neue Analytics projectId verwenden
    analyticsPage: "med-i-scroll-pneumokokken-update-kinder", // Legacy-Alias
    analyticsChapter1: "paediatrie-impfpraevention", // Legacy-Alias
    projectId: "pneumokokken-update-kinder",
    contentVersion: "v0.29",
    analytics: {
      page: "med.i.scroll | Pneumokokken-Impfung bei Kindern",
      pageType: "Microsite",
      visitorType: "Not logged",
      medicalField: "Kinder- und Jugendmedizin",
      indication: "Pneumokokken-Impfung bei Kindern",
      articleCategory: ["MED.I.SCROLL", "IMPFPRÄVENTION"],
      tags: ["med.i.scroll", "Gelbe Liste", "Pneumokokken", "Pädiatrie", "Impfprävention"],
      product: {
        name: "",
        molecules: [],
        titulaire: "",
        atcClassCodes: [],
        atcClassNames: [],
        ucd10Codes: []
      }
    },
    pdfFileName: "Pneumokokken-Update-Kinder_Gelbe-Liste.pdf",
    pdfSubject: "Pneumokokken-Impfung bei Kindern | Gelbe Liste",
    pdfAuthor: "Vidal MMI Germany GmbH",
    // Arbeitsstand: vor Go-live durch die direkte Modul-URL ersetzen.
    cmeUrl: "https://campus.gelbe-liste.de/"
  },

  sources: [
    {
      id: "RKI-1",
      text: "STIKO / Robert Koch-Institut: Beschluss und Wissenschaftliche Begründung zur Aktualisierung der Indikationsimpfung für Kinder und Jugendliche mit Risikofaktoren im Alter von ≥2 bis 17 Jahren gegen Pneumokokken-Erkrankungen. Epidemiologisches Bulletin 2/2026.",
      url: "https://doi.org/10.25646/13603.2"
    },
    {
      id: "RKI-2",
      text: "Robert Koch-Institut: Empfehlungen der Ständigen Impfkommission (STIKO) beim Robert Koch-Institut 2026. Version 6, aktualisiert am 10.09.2026. Epidemiologisches Bulletin 4/2026.",
      url: "https://doi.org/10.25646/13636.6"
    },
    {
      id: "RKI-3",
      text: "STIKO: PCV20 im Säuglings- und Kleinkindalter – erneute Evaluierung unter Berücksichtigung einer dynamischen Transmissionsmodellierung. Epidemiologisches Bulletin 33/2025.",
      url: "https://doi.org/10.25646/13340"
    },
    {
      id: "RKI-4",
      text: "STIKO: Stellungnahme zum Einsatz von Pneumokokken-Konjugatimpfstoffen im Säuglings-, Kindes- und Jugendalter. Epidemiologisches Bulletin 20/2023.",
      url: "https://doi.org/10.25646/11419"
    },
    {
      id: "GBA-1",
      text: "Gemeinsamer Bundesausschuss: Schutzimpfungs-Richtlinie – Umsetzung der STIKO-Indikationsimpfempfehlung für Kinder und Jugendliche mit Risikofaktoren im Alter von ≥2 bis 17 Jahren gegen Pneumokokken-Erkrankungen. Beschluss vom 05.03.2026; Inkrafttreten 14.04.2026.",
      url: "https://www.g-ba.de/beschluesse/7721/"
    },
    {
      id: "VAC-1",
      text: "Rieck T, Steffen A, Lottes M, Badenschier F, Feig M, Rau C: Impfquoten in Deutschland. Epidemiologisches Bulletin 50/2025; aktualisierte Version 2 vom 14.01.2026.",
      url: "https://doi.org/10.25646/13589.2"
    },
    {
      id: "VAC-2",
      text: "Kühne F, von Eiff C, Schiffner-Rohe J et al.: Impact of Revised Vaccination Recommendations for Mature Infants on Premature Infants’ Vaccination Compliance in Germany. Infectious Diseases and Therapy. 2025;14:1867–1882.",
      url: "https://doi.org/10.1007/s40121-025-01173-8"
    },
    {
      id: "SURV-1",
      text: "van der Linden MPG, Pletz MW, Itzek A et al.: Surveillance of invasive pneumococcal disease in Germany: surge in PCV13 serotypes and new challenges, 2017 to 2024. Eurosurveillance. 2026;31(21):2500576.",
      url: "https://doi.org/10.2807/1560-7917.ES.2026.31.21.2500576"
    },
    {
      id: "EMA-1",
      text: "European Medicines Agency: Vaxneuvance – EPAR. Produktinformation, Zusammensetzung, Indikationen und pädiatrische Daten.",
      url: "https://www.ema.europa.eu/en/medicines/human/EPAR/vaxneuvance"
    },
  ],

  imprint: {
    brandHeading: "Gelbe Liste Online",
    editorialHeading: "Corporate Publishing",
    editorialRoleLabel: "Konzeption, Redaktion und Umsetzung",
    editorialName: "Guido Strehlau",
    company: "Vidal MMI Germany GmbH",
    street: "Monzastraße 4",
    city: "63225 Langen",
    phone: "06103 2076-0",
    phoneHref: "+49610320760",
    email: "info@mmi.de",
    editorialEmail: "RedaktionOnline@mmi.de",
    representatives: "Michael Schösser, Vincent Bouvier",
    register: "Amtsgericht Offenbach/Main, HRB 8014",
    vatId: "DE113524692",
    responsibleEditorial: "Michael Schösser, Vincent Bouvier",
    sponsoring: {
      heading: "Sponsoring & redaktionelle Unabhängigkeit",
      text: "Dieses Informationsangebot wird von MSD und Pfizer unterstützt. Auswahl, Bewertung, Gewichtung und redaktionelle Darstellung der Inhalte liegen bei Vidal MMI Germany GmbH.",
    },
    imageCredits: [
      "Die in diesem Informationsangebot verwendeten Hintergrundmotive wurden teilweise KI-gestützt für dieses Projekt erstellt.",
      "Grafiken, Illustrationen und redaktionelle Visualisierungen: Vidal MMI Germany GmbH.",
      "Auswahl, Bearbeitung und Einbindung der Bildmotive erfolgen redaktionell durch Vidal MMI Germany GmbH."
    ]
  },

  pages: [
    {
      id: "intro",
      number: "01",
      nav: "Pneumokokken-Impfung",
      kicker: "Pädiatrie · Impfprävention",
      title: "Pneumokokken-Impfung bei Kindern",
      subtitle: "Vom zeitgerechten Schutz im Säuglingsalter zur alters- und risikoadaptierten Impfstrategie",
      background: "/assets/backgrounds/01_hero_kind-impfung-bg.jpg",
      focal: "right center",
      tone: "dark",
      align: "left",
      kind: "hero",
      quote: "Bei der Pneumokokken-Impfung bestehen weiterhin Lücken hinsichtlich einer vollständigen und möglichst frühzeitigen Immunisierung. [6,7]",
      attribution: "Redaktion Gelbe Liste"
    },
    {
      id: "kernaussagen",
      number: "02",
      nav: "Kernaussagen",
      kicker: "Kernaussagen in 60 Sekunden",
      title: "Vollständige und frühzeitige Immunisierung bleibt zentrales Versorgungsthema",
      subtitle: "Impfquoten, Risikoprofil und Krankheitslast gemeinsam in die Versorgung einordnen.",
      background: "/assets/backgrounds/02_keyfacts_pneumokokken-bg.jpg",
      inlineImage: "/assets/images/02_keyfacts_ipd.png",
      inlineImageAlt: "Arbeitsgrafik zu Versorgungslücken, frühestmöglicher Immunisierung und medizinischer Einordnung invasiver Pneumokokken-Erkrankungen bei Kindern",
      focal: "right center",
      tone: "light",
      align: "left",
      kind: "stats",
      wide: true,
      long: true,
      zoomable: true,
      stats: [
        { value: "73 %", label: "der Kinder waren 2024 im Alter von 24 Monaten vollständig gegen Pneumokokken geimpft [6]" },
        { value: "52,5 %", label: "der Frühgeborenen der Geburtskohorte 2020 hatten bis 24 Monate eine vollständige PCV-Impfserie erhalten [7]" }
      ],
      quote: "Eine vollständige und möglichst frühzeitige Immunisierung bleibt ein zentrales Versorgungsziel. [6,7]",
      bullets: [
        "Zur medizinischen Einordnung: 685 gemeldete Fälle invasiver Pneumokokken-Erkrankungen (Invasive Pneumokokken Disease, IPD) bei 2–17-Jährigen von Januar 2023 bis Mitte Dezember 2025; davon 18 Todesfälle im genannten Meldezeitraum [1]",
        "Pneumokokken-Pneumonien sind in diesen IPD-Zahlen nicht erfasst. Krankenhausdiagnosedaten bilden die tatsächliche Krankheitslast nur unvollständig ab. [4]",
        "Kinder mit definierten Risikofaktoren tragen ein deutlich erhöhtes Risiko für invasive Pneumokokken-Erkrankungen. [1]",
        "Impfstatus, Risikoprofil und nächster fälliger Impftermin gemeinsam prüfen."
      ]
    },
    {
      id: "pneumokokken-verstehen",
      number: "03",
      nav: "Pneumokokken verstehen",
      kicker: "Pneumokokken verstehen",
      title: "Besiedelung ist häufig – Erkrankung seltener, invasive Verläufe potenziell schwer",
      subtitle: "Warum Kinder für Transmission, Erkrankungsspektrum und Prävention eine zentrale Rolle spielen.",
      background: "/assets/backgrounds/03_besiedelung_pneumokokken-bg.jpg",
      focal: "left center",
      inlineImage: "/assets/images/03_reservoir_transmission.png",
      inlineImageAlt: "Arbeitsgrafik zu Reservoir, asymptomatischer Besiedelung und dem Krankheitsspektrum von Otitis media bis zu invasiven Pneumokokken-Erkrankungen",
      tone: "dark",
      align: "right",
      kind: "standard",
      long: true,
      zoomable: true,
      paragraphs: [
        "Streptococcus pneumoniae kann den oberen Respirationstrakt asymptomatisch besiedeln. Kinder unter 5 Jahren sind das wichtigste Reservoir; 40–60 % dieser Altersgruppe sind kolonisiert und tragen damit wesentlich zur Transmission bei. [1]",
        "Das klinische Spektrum reicht von häufigen nichtinvasiven Erkrankungen wie akuter Otitis media und Pneumonie bis zu selteneren, aber potenziell besonders schweren invasiven Pneumokokken-Erkrankungen (Invasive Pneumokokken Disease, IPD) wie Bakteriämie/Sepsis und Meningitis. [1]",
        "Pneumokokken-Pneumonien sind in IPD-Zahlen nicht erfasst; zugleich ist die tatsächliche Krankheitslast nur unvollständig abbildbar. Präventionsentscheidungen orientieren sich daher an Alter, Impfstatus und individuellem Risikoprofil. [1,2,4]"
      ],
      quote: "Von der asymptomatischen Besiedelung bis zur invasiven Erkrankung reicht ein breites klinisches Spektrum – entscheidend sind Prävention und Risikoorientierung. [1,2,4]"
    },
    {
      id: "serotypen-im-wandel",
      number: "04",
      nav: "Serotypen im Wandel",
      kicker: "Serotypen im Wandel",
      title: "Impfstoffe können die Serotypendynamik beeinflussen",
      subtitle: "Warum die aktuelle Epidemiologie kontinuierlich neu bewertet werden muss.",
      background: "/assets/backgrounds/04_serotypenlandschaft_wandel-bg.jpg",
      focal: "right center",
      inlineImage: "/assets/images/04_serotypen_im_wandel.png",
      inlineImageAlt: "Arbeitsgrafik zu Impfprogramm, Serotypenverschiebung und Surveillance",
      tone: "light",
      align: "left",
      kind: "standard",
      long: true,
      zoomable: true,
      paragraphs: [
        "Pneumokokken weisen eine große Serotypenvielfalt auf. Impfprogramme können die Serotypenverteilung beeinflussen: Erkrankungen durch abgedeckte Serotypen können tendenziell zurückgehen, während andere Serotypen relativ an Bedeutung gewinnen. Eine kontinuierliche Surveillance ist deshalb erforderlich. [8]",
        "In den deutschen Meldedaten 2023–2025 lag für 104 Fälle invasiver Pneumokokken-Erkrankungen (Invasive Pneumokokken Disease, IPD) bei 2–17-Jährigen eine Serotypangabe vor. 50 % entfielen auf PCV13-Serotypen; Serotyp 3 war mit 24 % der häufigste einzelne Serotyp. Wegen der kleinen Fallzahlen ist die Interpretation mit Vorsicht vorzunehmen. [1]",
        "Eine 2026 publizierte bundesweite Surveillanceanalyse für 2017–2024 zeigt bei Kindern und Jugendlichen <18 Jahren eine dynamische Serotypenverteilung. Serotyp 3 persistierte über den Beobachtungszeitraum und bleibt damit ein relevantes Beispiel für die Notwendigkeit kontinuierlicher Surveillance. [8]",
        "Serotypenverteilungen und theoretisch impfpräventable Anteile sind epidemiologische Kenngrößen. Sie sind nicht mit klinischer Impfstoffwirksamkeit gleichzusetzen und ersetzen nicht die alters- und indikationsspezifische STIKO-Empfehlung. [1,2,8]"
      ],
      quote: "Serotypenabdeckung ist eine epidemiologische Kenngröße – keine Rangliste der Impfstoffe. [1,8]"
    },
    {
      id: "valenz-evidenz",
      number: "05",
      nav: "Impfstoffe & Serotypen",
      kicker: "Impfstoffe und Serotypendynamik",
      title: "Impfstoffe und Serotypenabdeckung einordnen",
      subtitle: "PCV13 und PCV15 im Kontext ihrer Serotypenzusammensetzung und der STIKO-Empfehlung.",
      background: "/assets/backgrounds/05_pcv15_erweiterung-bg.jpg",
      focal: "left center",
      inlineImage: "/assets/images/05_valenz_evidenz.png",
      inlineImageAlt: "Arbeitsgrafik zur neutralen Einordnung von PCV13 und PCV15, Serotypenabdeckung, Immunogenität, Epidemiologie und klinischem Nutzen",
      tone: "dark",
      align: "right",
      kind: "standard",
      long: true,
      zoomable: true,
      paragraphs: [
        "Für die Standardimpfung gegen Pneumokokken im Säuglingsalter empfiehlt die STIKO einen Pneumokokken-Konjugatimpfstoff und keinen bestimmten Impfstoff; PCV13 und PCV15 können für die Grundimmunisierung eingesetzt werden. [2,4]",
        "PCV13 umfasst die Serotypen 1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 18C, 19A, 19F und 23F. PCV15 enthält diese 13 Serotypen sowie zusätzlich 22F und 33F. [4,9]",
        "Die STIKO bewertet den zusätzlichen Nutzen von PCV15 gegenüber PCV13 unter Berücksichtigung der Serotypenverteilung als gering; für die Standardimpfung werden beide Impfstoffe ohne Produktpräferenz eingesetzt. [4]",
        "Für Kinder und Jugendliche von 2 bis einschließlich 17 Jahren mit definierten Risikofaktoren gilt seit 2026 eine eigene STIKO-Indikationsimpfung mit PCV20. [1,2]"
      ],
      quote: "Serotypenabdeckung ist ein relevanter Aspekt der Impfstoffeinordnung; für die Impfentscheidung bleibt die jeweils aktuelle STIKO-Empfehlung maßgeblich. [1,2,4]"
    },
    {
      id: "standardimpfung",
      number: "06",
      nav: "Standardimpfung",
      kicker: "Standardimpfung",
      title: "Säuglinge zeitgerecht schützen",
      subtitle: "PCV13 oder PCV15 – das Impfschema hängt insbesondere vom Gestationsalter ab.",
      background: "/assets/backgrounds/06_saeuglinge_zeitgerecht-bg.jpg",
      focal: "right center",
      inlineImage: "/assets/images/06_standardimpfung_timeline.png",
      inlineImageAlt: "Arbeitsgrafik zum 2+1- und 3+1-Impfschema bei Pneumokokken",
      tone: "light",
      align: "left",
      kind: "standard",
      long: true,
      zoomable: true,
      paragraphs: [
        "Für die Standardimpfung im Säuglingsalter empfiehlt die STIKO PCV13 oder PCV15. Gesunde reifgeborene Säuglinge werden im 2+1-Schema im Alter von 2, 4 und 11 Monaten geimpft. PCV20 ist derzeit nicht Bestandteil der STIKO-Standardimpfung im Säuglingsalter. [2,3]",
        "Frühgeborene vor vollendeter 37. Schwangerschaftswoche erhalten eine zusätzliche Dosis im Alter von 3 Monaten und werden im 3+1-Schema im Alter von 2, 3, 4 und 11 Monaten geimpft. [2]",
        "Noch nicht gegen Pneumokokken geimpfte Kinder im Alter von ≥12 bis <24 Monaten erhalten zur Nachholimpfung zwei Dosen im Abstand von mindestens 8 Wochen. [2]",
        "Werden Impftermine versäumt oder verschoben, sollte der Impfstatus beim nächsten geeigneten Kontakt geprüft und die fehlende Impfung entsprechend der aktuellen STIKO-Empfehlung nachgeholt werden. [2,6]"
      ],
      highlight: "Die Versorgungslücke bleibt relevant: 2024 waren im Alter von 24 Monaten 73 % der Kinder vollständig gegen Pneumokokken geimpft. In einer retrospektiven InGef-Abrechnungsdatenanalyse lag die vollständige PCV-Impfquote bei Frühgeborenen der Geburtskohorte 2020 bei 52,5 %. [6,7]",
      quote: "Eine vollständige und frühestmögliche Impfserie ist ein zentrales Qualitätsziel der Impfversorgung. [6,7]"
    },
    {
      id: "impfserie-wechsel",
      number: "07",
      nav: "Praxis-FAQ",
      kicker: "Praxis-FAQ",
      title: "Häufige Fragen zur Impfversorgung",
      subtitle: "Vom begonnenen Impfschema bis zur Risikokonstellation: kurze Antworten für typische Situationen im Praxisalltag.",
      background: "/assets/backgrounds/07_impfserie_fortsetzen-bg.jpg",
      focal: "left center",
      inlineImage: "/assets/images/07_impfserie_wechsel.png",
      inlineImageAlt: "Arbeitsgrafik mit sechs häufigen Fragen zur Pneumokokken-Impfversorgung bei Kindern",
      tone: "dark",
      align: "right",
      kind: "standard",
      long: true,
      zoomable: true,
      accordionVariant: "faq",
      accordionItems: [
        {
          id: "faq-1",
          heading: "1 · Mit PCV13 begonnen – kann mit PCV15 weitergeimpft werden?",
          answer: "Ja. Eine mit PCV10 oder PCV13 begonnene Säuglings-Impfserie kann mit PCV15 vervollständigt werden. Zusätzliche Dosen über das altersentsprechende 2+1- beziehungsweise 3+1-Schema hinaus sind nicht erforderlich. [4]"
        },
        {
          id: "faq-2",
          heading: "2 · Was tun, wenn die Grundimmunisierung nicht rechtzeitig abgeschlossen wurde?",
          answer: "Fehlende Impfstoffdosen werden entsprechend Alter und dokumentierten Vorimpfungen nachgeholt; eine bereits begonnene Impfserie muss nicht neu begonnen werden. [2]"
        },
        {
          id: "faq-3",
          heading: "3 · Was verändert sich ab dem Alter von zwei Jahren?",
          answer: "Ab dem Alter von 2 Jahren besteht keine generelle Pneumokokken-Standardimpfung für gesunde Kinder. Bei Kindern und Jugendlichen von 2 bis einschließlich 17 Jahren mit einer definierten STIKO-Indikation wird PCV20 empfohlen. [1,2]"
        },
        {
          id: "faq-4",
          heading: "4 · Wie gehe ich bei unklarem Impfstatus oder unklaren Vorimpfungen vor?",
          answer: "Vorhandene Impfdokumente und ärztliche Unterlagen sollten zunächst geprüft werden. Bei unbekanntem Impfstatus ist von fehlenden Impfungen auszugehen; nicht dokumentierte Impfungen sollen entsprechend den STIKO-Empfehlungen nachgeholt werden. [2]"
        },
        {
          id: "faq-5",
          heading: "5 · Wann verändern Grunderkrankung, Therapie oder Immunsuppression die Impfstrategie?",
          answer: "Zunächst ist zu prüfen, ob eine definierte STIKO-Indikation vorliegt. Für Zeitpunkt und konkrete Umsetzung sind zusätzlich Alter, dokumentierte Vorimpfungen, Grunderkrankung, geplante Interventionen und eine mögliche Immunsuppression zu berücksichtigen. [1,2]"
        },
        {
          id: "faq-6",
          heading: "6 · Wie wird sichergestellt, dass notwendige Risikoimpfungen im Alltag umgesetzt werden?",
          answer: "Risikopatient:innen systematisch identifizieren, Impfstatus dokumentieren, Recall-/Reminder-Funktionen nutzen und Verantwortlichkeiten zwischen den beteiligten Praxen eindeutig festlegen."
        }
      ],
      quote: "Praxisrelevanz entsteht dort, wo aus einer Frage ein klarer nächster Handlungsschritt wird."
    },
    {
      id: "risikogruppen",
      number: "08",
      nav: "Risikogruppen",
      kicker: "Risikogruppen",
      title: "Risikofaktoren erkennen – Impfplanung individuell ausrichten",
      subtitle: "Drei Gruppen strukturieren die Indikationsimpfung – entscheidend ist die konkrete STIKO-Indikation.",
      background: "/assets/backgrounds/08_risikokinder_profile-bg.jpg",
      focal: "right center",
      inlineImage: "/assets/images/08_risikogruppen.png",
      inlineImageAlt: "Arbeitsgrafik zu den drei STIKO-Risikogruppen und zusätzlichen Faktoren der individuellen Risikobewertung",
      tone: "light",
      align: "left",
      kind: "standard",
      long: true,
      zoomable: true,
      paragraphs: [
        "Kinder und Jugendliche mit bestimmten Risikofaktoren tragen ein erhöhtes Risiko für invasive Pneumokokken-Erkrankungen (Invasive Pneumokokken Disease, IPD). Die STIKO unterscheidet drei Gruppen von Risikofaktoren. [1,2]",
        "Für die praktische Impfplanung sind neben der zugrunde liegenden STIKO-Indikation insbesondere Alter, dokumentierter Impfstatus, Therapie beziehungsweise Immunsuppression sowie gegebenenfalls geplante Interventionen zu berücksichtigen."
      ],
      numberedVariant: "cards",
      numbered: [
        "Angeborene oder erworbene Immundefekte beziehungsweise Immunsuppression",
        "Sonstige chronische Krankheiten mit erhöhter Gefährdung für Pneumokokken-Infektionen",
        "Anatomische oder fremdkörperassoziierte Risiken für eine Pneumokokken-Meningitis"
      ],
      paragraphsAfter: [
        "Eine Immunsuppression kann durch die Erkrankung selbst oder durch eine immunsuppressive Therapie bedingt sein. Bei geplanten Interventionen wie Splenektomie oder Cochlea-Implantation soll die Impfung möglichst vor der Intervention erfolgen. Asthma bronchiale ist in der STIKO als Beispiel einer chronischen Erkrankung der Atmungsorgane mit erhöhter gesundheitlicher Gefährdung aufgeführt. [1,2]",
        "Bei gemeinsamer Betreuung durch pädiatrische und weitere fachärztliche Praxen sollten Impfstatus, Zuständigkeit und notwendige Folgetermine transparent dokumentiert und kommuniziert werden."
      ],
      quote: "Zuerst die STIKO-Indikation klären – anschließend Alter, Vorimpfungen, Therapie und Versorgungssituation in die Umsetzung einbeziehen. [1,2]"
    },
    {
      id: "stiko-2026",
      number: "09",
      nav: "STIKO 2026",
      kicker: "STIKO 2026",
      title: "Risikokinder von 2 bis 17 Jahren: STIKO empfiehlt PCV20",
      subtitle: "Die Indikationsimpfung folgt damit bewusst einer anderen Strategie als die Standardimpfung im Säuglingsalter.",
      background: "/assets/backgrounds/09_stiko_pcv20_risikokinder-bg.jpg",
      focal: "left center",
      inlineImage: "/assets/images/09_stiko_2026_pathway.png",
      inlineImageAlt: "Arbeitsgrafik zur Trennung von Standardimpfung und Indikationsimpfung nach STIKO 2026",
      tone: "dark",
      align: "right",
      kind: "standard",
      long: true,
      zoomable: true,
      paragraphs: [
        "Seit Januar 2026 empfiehlt die STIKO für Kinder und Jugendliche im Alter von 2 bis einschließlich 17 Jahren mit definierten Risikofaktoren PCV20 als Indikationsimpfung. Die alleinige Anwendung von PPSV23 beziehungsweise das bisherige sequenzielle Schema wird für diese Gruppe nicht mehr empfohlen. [1,2]",
        "Etwa 70 % der Fälle invasiver Pneumokokken-Erkrankungen (Invasive Pneumokokken Disease, IPD) bei 2- bis 17-jährigen Kindern und Jugendlichen werden Serotypen zugeordnet, die in PCV20 enthalten sind. Die aktualisierte Empfehlung vereinfacht zugleich die bisherige sequenzielle Impfstrategie. [1]"
      ],
      highlight: "Ungeimpfte Risikokinder erhalten PCV20. Nach mindestens einer früheren Dosis PCV13 oder PCV15 soll PCV20 im Abstand von 1 Jahr erfolgen. Nach früherer PPSV23-Impfung beziehungsweise früherem sequenziellen Schema gilt grundsätzlich ein Abstand von 6 Jahren; bei ausgeprägter Immundefizienz kann bereits nach 1 Jahr mit PCV20 geimpft werden. [1,2]",
      paragraphsAfter: [
        "Die Umsetzung der aktualisierten Empfehlung in der Schutzimpfungs-Richtlinie ist seit dem 14.04.2026 in Kraft. [5]"
      ],
      note: "Zur Notwendigkeit von Wiederholungsimpfungen nach PCV20 liegen derzeit keine ausreichenden Daten vor; die STIKO spricht deshalb aktuell keine Empfehlung für Wiederholungsimpfungen aus. [1,2]",
      quote: "PCV20 ist in diesem Kontext die STIKO-empfohlene Indikationsimpfung für eine klar definierte Risikogruppe – nicht die Standardimpfung im Säuglingsalter. [1,2]"
    },
    {
      id: "praxisnavigator",
      number: "10",
      nav: "Praxis-Workflow",
      kicker: "Praxis-Workflow",
      title: "Praxis-Workflow: Risikokinder erkennen – Impfversorgung aktiv steuern",
      subtitle: "Sieben Schritte für eine verlässliche Versorgung im Praxisalltag.",
      background: "/assets/backgrounds/10_praxisnavigator-bg.jpg",
      focal: "right center",
      inlineImage: "/assets/images/10_impfnavigator_wireframe.png",
      inlineImageAlt: "Arbeitsgrafik mit sieben Schritten zur Identifikation und Versorgung von Risikokindern",
      tone: "light",
      align: "left",
      kind: "steps",
      long: true,
      zoomable: true,
      intro: "Der Praxis-Workflow ist keine individuelle Impfentscheidungshilfe, sondern strukturiert organisatorische Schritte zur Identifikation und Impfversorgung von Risikokindern.",
      steps: [
        { title: "Risikokinder identifizieren", items: ["Patientenkollektiv systematisch auf definierte STIKO-Risikofaktoren prüfen."] },
        { title: "Impfstatus kontrollieren", items: ["Dokumentierte Standard- und Indikationsimpfungen sowie relevante Vorimpfungen prüfen."] },
        { title: "Risikokinder dokumentieren", items: ["Geeignete Kodierung bzw. Dokumentation im Praxisverwaltungssystem nutzen."] },
        { title: "Recall-/Reminder-Funktionen einsetzen", items: ["Ausstehende Impfungen im Praxisverwaltungssystem sichtbar machen und Wiedervorlagen nutzen."] },
        { title: "Aktiv einbestellen", items: ["Sorgeberechtigte beziehungsweise Jugendliche gezielt kontaktieren und einen konkreten Impftermin vereinbaren."] },
        { title: "Pädiatrie und Facharzt abstimmen", items: ["Zuständigkeit klären und Impfstatus zwischen den beteiligten Praxen transparent kommunizieren."] },
        { title: "Impfung durchführen", items: ["Indizierte Impfung durchführen oder verlässlich veranlassen; Zuständigkeit und Durchführung dokumentieren."] }
      ],
      quote: "Eine klare Zuständigkeit und dokumentierte Folgetermine unterstützen die verlässliche Impfversorgung von Risikokindern."
    },
    {
      id: "praxisfaelle",
      number: "11",
      nav: "Praxis-Fälle",
      kicker: "Praxis-Fälle",
      title: "Vier Situationen, die die Empfehlung greifbar machen",
      subtitle: "Der Scroll endet mit der Frage – das CME liefert die vertiefte Diskussion.",
      background: "/assets/backgrounds/11_praxisfaelle-bg.jpg",
      focal: "left center",
      inlineImage: "/assets/images/11_praxisfaelle.png",
      inlineImageAlt: "Arbeitsgrafik mit vier pädiatrischen Praxisfällen zur Pneumokokken-Impfung",
      tone: "dark",
      align: "right",
      kind: "standard",
      long: true,
      zoomable: true,
      accordionVariant: "cases",
      accordionItems: [
        {
          id: "case-a",
          heading: "Fall A · Grundimmunisierung verspätet oder unvollständig",
          teaser: [
            "Ausgangssituation: Bei einem Säugling oder Kleinkind fehlen Impfungen beziehungsweise Termine wurden verschoben.",
            "Frage: Welche Dosis fehlt, welches altersgerechte Nachholschema ist relevant und wie wird der nächste Termin verbindlich organisiert?"
          ],
          answer: "Antwort: Fehlende Dosen entsprechend Alter und dokumentierten Vorimpfungen nachholen; eine begonnene Impfserie wird nicht neu begonnen. [2]"
        },
        {
          id: "case-b",
          heading: "Fall B · Kind ≥2 Jahre mit Asthma bronchiale",
          teaser: [
            "Ausgangssituation: Ein Kind im Alter von ≥2 Jahren mit Asthma bronchiale wird in der Praxis betreut.",
            "Frage: Welche Pneumokokken-Impfung ist nach STIKO indiziert und welche Vorimpfungen sind zu berücksichtigen?"
          ],
          answer: "Antwort: Asthma bronchiale ist in der STIKO als Beispiel einer chronischen Erkrankung der Atmungsorgane mit erhöhter gesundheitlicher Gefährdung aufgeführt. Bei Kindern ab 2 Jahren mit dieser Indikation wird PCV20 empfohlen; Vorimpfungen und Impfstatus sind zu berücksichtigen. [1,2]"
        },
        {
          id: "case-c",
          heading: "Fall C · Kind ≥2 Jahre mit Psoriasis unter immunsuppressiver Therapie",
          teaser: [
            "Ausgangssituation: Ein Kind im Alter von ≥2 Jahren mit Psoriasis erhält beziehungsweise beginnt eine immunsuppressive Therapie.",
            "Frage: Welche Bedeutung haben Grunderkrankung, Therapie und daraus resultierende Immunsuppression für die Risikobewertung und die Impfplanung?"
          ],
          answer: "Antwort: Für die STIKO-Indikation ist hier insbesondere die immunsuppressive Therapie relevant. Alter, Impfstatus, Vorimpfungen und der Zeitpunkt der Therapie sind in die Impfplanung einzubeziehen; bei vorliegender Indikation wird ab 2 Jahren PCV20 empfohlen. [1,2]"
        },
        {
          id: "case-d",
          heading: "Fall D · Kind ≥2 Jahre mit Cochlea-Implantat",
          teaser: [
            "Ausgangssituation: Ein Kind im Alter von ≥2 Jahren hat ein Cochlea-Implantat beziehungsweise eine Implantation ist geplant.",
            "Frage: Welche Vorimpfungen sind dokumentiert und welche weiteren Schritte sind nach aktueller STIKO erforderlich?"
          ],
          answer: "Antwort: Ein Cochlea-Implantat gehört zu den anatomischen beziehungsweise fremdkörperassoziierten Risiken für eine Pneumokokken-Meningitis. Bei Personen ab 2 Jahren mit dieser Indikation wird PCV20 empfohlen; die Impfung soll möglichst vor der Intervention erfolgen. Vorimpfungen und Impfabstände sind zu berücksichtigen. [1,2]"
        }
      ],
      quote: "Ausgangssituation, konkrete Frage und nächster Schritt – die Fälle übertragen die Empfehlung in typische Versorgungssituationen."
    },
    {
      id: "cme-vertiefung",
      number: "12",
      nav: "CME vertiefen",
      kicker: "CME vertiefen",
      title: "Pneumokokken-Impfung bei Kindern – Fachwissen vertiefen",
      subtitle: "Zwei Experten, klinische Einordnung, Fallbeispiele und Lernerfolgskontrolle.",
      background: "/assets/backgrounds/12_cme_fachwissen-bg.jpg",
      focal: "right center",
      inlineImage: "/assets/images/12_cme_cta_mockup.png",
      inlineImageAlt: "Arbeitsmockup für den CTA zum CME-Modul Pneumokokken-Impfung bei Kindern",
      tone: "light",
      align: "left",
      kind: "cta",
      long: true,
      paragraphs: [
        "Sie möchten die Einordnung von frühestmöglichem Impfschutz, Serotypen, Impfstoffkonzepten und Risikokonstellationen vertiefen? Im CME-Modul „Pneumokokken-Impfung bei Kindern“ führen zwei pädiatrische Experten von der Evidenz zur konkreten Versorgungssituation.",
        "Die CME verbindet drei Perspektiven: Standardimpfung und frühestmöglicher Schutz im Säuglingsalter, Impfstoffkonzepte und sich wandelnde Serotypen-Epidemiologie sowie Risikokinder, Indikationsimpfung und individuelle Versorgungssituationen. Praxisfälle übertragen diese Themen in den kinderärztlichen Alltag."
      ],
      bullets: [
        "Standardimpfung im Säuglingsalter, frühestmöglicher Impfschutz und Versorgungslücken",
        "Impfstoffkonzepte, Serotypenabdeckung und sich wandelnde Epidemiologie",
        "Risikokinder, Indikationsimpfung und individuelle Versorgungssituationen",
        "aktuelle STIKO 2026, Impfintervalle, Praxisfälle und FAQ [2]",
        "Lernerfolgskontrolle"
      ],
      badges: ["2 Expertenvorträge", "geplant 2–3 CME-Punkte*", "Lernerfolgskontrolle"],
      note: "* Die CME-Punkte sind abhängig vom finalen Vortrags- und Lernumfang und stehen bis zur Zertifizierung unter Vorbehalt. Der Button führt derzeit auf den Gelbe-Liste Campus.",
      primaryCta: {
        label: "Jetzt CME-Fortbildung starten",
        url: "https://campus.gelbe-liste.de/",
        destinationId: "cme-pneumokokken-kinder"
      }
    },
    {
      id: "literatur",
      number: "13",
      nav: "Literatur & Download",
      kicker: "Quellen",
      title: "Literatur & weiterführende Informationen",
      background: "/assets/backgrounds/13_literatur_weiterfuehrend-bg.jpg",
      focal: "right center",
      tone: "light",
      align: "left",
      kind: "sources",
      long: true,
      primaryCta: {
        label: "Aktuelle STIKO-Empfehlungen öffnen",
        url: "https://www.rki.de/DE/Themen/Infektionskrankheiten/Impfen/Staendige-Impfkommission/Empfehlungen/empfehlungen-node.html"
      },
      pdfCtaLabel: "Inhalte als PDF erstellen"
    },
    {
      id: "impressum",
      number: "14",
      nav: "Impressum",
      kicker: "Rechtliche Angaben",
      title: "Impressum",
      background: "/assets/backgrounds/14_impressum_gelbe_liste-bg.jpg",
      focal: "right center",
      tone: "light",
      align: "left",
      kind: "imprint",
      long: true
    }
  ]
};

export const pages = project.pages;
