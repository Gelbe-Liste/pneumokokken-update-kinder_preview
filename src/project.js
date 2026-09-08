/**
 * med.i.scroll – Projekt: pneumokokken-update-kinder
 * ------------------------------------------------------------
 * Version v0.8: Umsetzung der konsolidierten Korrekturfassung v0.7_Korr
 * auf Basis der Pfizer-/MSD-Vorabstimmungen.
 *
 * WICHTIG VOR GO-LIVE:
 * - medizinische Angaben / STIKO-Empfehlungen nochmals gegen aktuelle Primärquellen prüfen
 * - ausstehende Daten/Quellen des Referenzzentrums, aktuelle RKI-Daten zu Impfzeitpunkten,
 *   ggf. ISPPD-/Real-World-Material nach Eingang einarbeiten
 * - finale CME-Modul-URL einsetzen
 * - CME-Punkte erst nach Zertifizierung verbindlich ausspielen
 * - Referentennamen erst nach verbindlicher Zusage in CTA/Grafik nennen
 * - Pfizer-Praxisfälle nach Eingang der Rohfassungen medizinisch finalisieren
 */

export const project = {
  meta: {
    title: "Pneumokokken-Impfung bei Kindern",
    eyebrow: "Pädiatrie · Impfprävention",
    medicalField: "Kinder- und Jugendmedizin",
    indication: "Pneumokokken-Impfung bei Kindern",
    description: "med.i.scroll – Pneumokokken-Impfung bei Kindern: vom zeitgerechten Schutz im Säuglingsalter zur individuellen Impfentscheidung bei Risikokindern",
    logo: "/assets/images/glo-logo.png",
    logoUrl: "https://www.gelbe-liste.de/",
    moduleId: "pneumokokken-update-kinder",
    analyticsPage: "med-i-scroll-pneumokokken-update-kinder",
    analyticsChapter1: "paediatrie-impfpraevention",
    projectId: "pneumokokken-update-kinder",
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
    pdfFileName: "Pneumokokken-Update-Kinder_Gelbe-Liste_v0.8.pdf",
    pdfSubject: "Pneumokokken-Impfung bei Kindern | Gelbe Liste",
    pdfAuthor: "Vidal MMI Germany GmbH",
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
      text: "Robert Koch-Institut: Empfehlungen der Ständigen Impfkommission (STIKO) 2026, aktuelle Version 5 (09.07.2026).",
      url: "https://edoc.rki.de/handle/176904/13181.5"
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
      id: "EMA-1",
      text: "European Medicines Agency: Vaxneuvance EPAR – Zusammensetzung, Indikation und pädiatrische Studien.",
      url: "https://www.ema.europa.eu/en/medicines/human/EPAR/vaxneuvance"
    },
    {
      id: "SR-1",
      text: "Wagner G et al. Immunogenicity and safety of the 15-valent pneumococcal conjugate vaccine, a systematic review and meta-analysis. NPJ Vaccines. 2024;9:257.",
      url: "https://pubmed.ncbi.nlm.nih.gov/39738219/"
    },
    {
      id: "SR-2",
      text: "Abo Zeid M et al. Comparative immunogenicity and safety of PCV15 versus PCV13 for pneumococcal serotypes 22F and 33F: systematic review and meta-analysis. Infection. 2026.",
      url: "https://pubmed.ncbi.nlm.nih.gov/42467175/"
    },
    {
      id: "SURV-1",
      text: "Arbeitsstand / fachlich erneut zu prüfen: Deutschland/Polen/Niederlande Surveillance zu Serotyp 38. Sichtbare Hervorhebung erst nach aktueller Bewertung der deutschen Datenlage.",
      url: "https://pubmed.ncbi.nlm.nih.gov/40436150/"
    }
  ],

  pendingSources: [
    "Aktuelle Daten bzw. Website des Referenzzentrums / Mark van der Linden zur Serotypenverteilung und epidemiologischen Einordnung.",
    "Aktuelle RKI-Daten zur zeitgerechten Pneumokokken-Impfung bzw. zum rechtzeitigen Abschluss der Grundimmunisierung.",
    "Geeignetes aktuelles ISPPD-Poster und weitere Quellen mit erkennbarem News-Wert, sofern von Pfizer bereitgestellt und für die Zielgruppe relevant.",
    "Gegebenenfalls aktuelle Real-World-Daten, sofern neutral einzuordnen und für die Story relevant."
  ],

  imprint: {
    editorialHeading: "Corporate Publishing",
    editorialName: "Guido Strehlau",
    company: "Vidal MMI Germany GmbH",
    street: "Monzastraße 4",
    city: "63225 Langen",
    phone: "06103 2076-0",
    phoneHref: "+49610320760",
    email: "info@mmi.de",
    representatives: "Michael Schösser, Vincent Bouvier",
    register: "Amtsgericht Offenbach/Main, HRB 8014",
    vatId: "DE113524692",
    responsibleEditorial: "Michael Schösser, Vincent Bouvier",
    imageCredits: [
      "Arbeitsgrafiken / Visualisierung: Vidal MMI Germany GmbH – redaktioneller Konzeptstand v0.8.",
      "Vor Veröffentlichung finale Bild- und Grafiknachweise ergänzen."
    ]
  },

  pages: [
    {
      id: "intro",
      number: "01",
      nav: "Pneumokokken-Impfung",
      kicker: "Pädiatrie · Impfprävention",
      title: "Pneumokokken-Impfung bei Kindern",
      subtitle: "Vom zeitgerechten Schutz im Säuglingsalter zur individuellen Impfentscheidung bei Risikokindern",
      background: "/assets/backgrounds/01_hero_pneumokokken-bg.jpg",
      focal: "center center",
      tone: "light",
      align: "left",
      kind: "hero",
      quote: "Zu viele Kinder bleiben ohne vollständigen Impfschutz.",
      attribution: "Redaktioneller Arbeitsstand aus der Pfizer-/MSD-Abstimmung"
    },
    {
      id: "kernaussagen",
      number: "02",
      nav: "Kernaussagen",
      kicker: "Kernaussagen in 60 Sekunden",
      title: "Zu viele Kinder bleiben ohne vollständigen Impfschutz",
      subtitle: "Versorgungslücke zuerst sichtbar machen – epidemiologische IPD-Daten anschließend kompakt einordnen.",
      background: "/assets/backgrounds/02_keyfacts_ipd-bg.jpg",
      inlineImage: "/assets/images/02_keyfacts_ipd.png",
      inlineImageAlt: "Arbeitsgrafik zur Versorgungslücke und zu deutschen IPD-Kennzahlen bei Kindern und Jugendlichen",
      focal: "center center",
      tone: "light",
      align: "left",
      kind: "stats",
      wide: true,
      long: true,
      zoomable: true,
      stats: [
        { value: "Priorität", label: "Zeitgerechter Abschluss der Grundimmunisierung; aktuelle RKI-Daten zur Versorgungslücke werden nach finaler Quellenprüfung ergänzt." },
        { value: "685", label: "gemeldete IPD-Fälle bei 2–17-Jährigen von Januar 2023 bis Mitte Dezember 2025" },
        { value: "1,8", label: "Fälle pro 100.000 pro Jahr im Durchschnitt" },
        { value: "5,0", label: "Fälle pro 100.000 pro Jahr bei 2-Jährigen" }
      ],
      quote: "Die aktuelle und möglichst neutrale deutsche Datenbasis wird vor der nächsten Freigabefassung nochmals konsolidiert.",
      bullets: [
        "18 Todesfälle im genannten Meldezeitraum",
        "Altersangabe beachten: die bisherigen RKI-Meldedaten beziehen sich hier auf 2–17-Jährige",
        "ESPED-/Registerdaten bleiben Arbeitsstand und werden hinsichtlich Aktualität, Vollständigkeit und Relevanz geprüft",
        "Nach Eingang priorisieren: Referenzzentrum / Mark van der Linden, aktuelle RKI-Daten, ggf. ISPPD- und neutrale Real-World-Daten"
      ]
    },
    {
      id: "pneumokokken-verstehen",
      number: "03",
      nav: "Pneumokokken verstehen",
      kicker: "Pneumokokken verstehen",
      title: "Besiedelung, Transmission und Disease Burden trennen",
      subtitle: "Pneumonie ist häufig; invasive Manifestationen wie Sepsis und Meningitis sind seltener, können aber besonders schwer verlaufen.",
      background: "/assets/backgrounds/03_reservoir_transmission-bg.jpg",
      inlineImage: "/assets/images/03_reservoir_transmission.png",
      inlineImageAlt: "Arbeitsgrafik zu Besiedelung und Transmission sowie einer qualitativen Häufigkeit-Schweregrad-Einordnung klinischer Manifestationen",
      tone: "light",
      align: "left",
      kind: "standard",
      long: true,
      zoomable: true,
      paragraphs: [
        "Streptococcus pneumoniae kann den oberen Respirationstrakt asymptomatisch besiedeln. Kinder unter 5 Jahren sind das Hauptreservoir: Im Durchschnitt sind 40–60 % dieser Altersgruppe besiedelt. Damit spielen Kinder eine wichtige Rolle bei der Weitergabe des Erregers.",
        "Die klinischen Manifestationen werden in der überarbeiteten Darstellung nicht mehr gleichgewichtet. Pneumonie wird aufgrund ihrer Häufigkeit visuell stärker hervorgehoben; invasive Verläufe wie Sepsis und Meningitis werden als seltener, aber potenziell besonders schwer eingeordnet.",
        "Besiedelung/Transmission und Disease Burden werden als zwei getrennte Ebenen dargestellt, damit Reservoirfunktion und klinische Relevanz nicht vermischt werden."
      ],
      quote: "Häufigkeit und Schwere sind unterschiedliche Dimensionen – beide müssen in der klinischen Einordnung sichtbar sein."
    },
    {
      id: "serotypen-im-wandel",
      number: "04",
      nav: "Serotypen im Wandel",
      kicker: "Serotypen im Wandel",
      title: "Serotypenlandschaft ist dynamisch",
      subtitle: "Deutschland im Mittelpunkt: Impfprogramme, Serotypen-Replacement und laufende Surveillance gemeinsam betrachten.",
      background: "/assets/backgrounds/04_serotypen_im_wandel-bg.jpg",
      inlineImage: "/assets/images/04_serotypen_im_wandel.png",
      inlineImageAlt: "Arbeitsgrafik mit sequenzieller Darstellung von Impfprogramm, Serotypenverschiebung und Surveillance",
      tone: "light",
      align: "left",
      kind: "standard",
      long: true,
      zoomable: true,
      paragraphs: [
        "Pneumokokken umfassen mehr als 100 bekannte Serotypen. Impfprogramme reduzieren Erkrankungen durch abgedeckte Serotypen – gleichzeitig kann sich die relative Bedeutung anderer Serotypen verändern. Dieses Serotypen-Replacement macht eine kontinuierliche Surveillance erforderlich.",
        "Für die sichtbare Story werden aktuelle Trends und die grundsätzliche Dynamik stärker gewichtet als einzelne punktuelle Beobachtungen. Deutschland bleibt der primäre Versorgungsbezug; internationale Daten werden nur ergänzend genutzt, wenn sie einen unmittelbaren Mehrwert für die medizinische Einordnung bieten.",
        "Die bisherige Aussage zu Serotyp 38 wird in v0.8 nicht mehr als prominenter Key Fact ausgespielt. Sie bleibt im Quellenbereich als Arbeitsstand zur erneuten fachlichen Prüfung dokumentiert."
      ],
      note: "Aktualisierung vorgesehen: aktuelle Serotypenverteilung nach Möglichkeit mit Daten des Referenzzentrums / Mark van der Linden und weiteren aktuellen deutschen Quellen.",
      quote: "Serotypenabdeckung ist keine statische Größe – sie muss zur aktuellen Epidemiologie passen."
    },
    {
      id: "valenz-evidenz",
      number: "05",
      nav: "Impfstoffkonzepte & Evidenz",
      kicker: "Impfstoffkonzepte & Evidenz",
      title: "Impfstoffkonzepte, Valenz & Serotypenabdeckung einordnen",
      subtitle: "Serotypenabdeckung, Immunogenität, aktuelle Epidemiologie und klinischer Nutzen gemeinsam betrachten.",
      background: "/assets/backgrounds/05_valenz_evidenz-bg.jpg",
      inlineImage: "/assets/images/05_valenz_evidenz.png",
      inlineImageAlt: "Arbeitsgrafik zu vier Einordnungsdimensionen von Impfstoffkonzepten und Serotypenabdeckung",
      tone: "light",
      align: "left",
      kind: "standard",
      long: true,
      zoomable: true,
      paragraphs: [
        "Die Einordnung unterschiedlicher Impfstoffkonzepte erfolgt medizinisch und nicht als unmittelbarer Produktvergleich. Entscheidend ist die gemeinsame Betrachtung von Serotypenabdeckung, Immunogenität, aktueller Epidemiologie und klinischem Nutzen in der jeweiligen Versorgungssituation.",
        "Als Evidenzbeispiel bleibt bestehen: PCV15 enthält die 13 Serotypen von PCV13 und zusätzlich die Serotypen 22F und 33F. In pädiatrischen Studien war die Antikörperantwort für die 13 gemeinsamen Serotypen insgesamt mit PCV13 vergleichbar.",
        "Systematische Reviews zeigen für 22F und 33F stärkere Immunantworten unter PCV15. Gleichzeitig betonen die Autoren, dass klinische Effektivitätsdaten erforderlich sind, um zu klären, in welchem Umfang immunologische Unterschiede tatsächlich zu weniger Pneumokokken-Erkrankungen führen."
      ],
      quote: "Mehr Serotypen bedeutet breitere potenzielle Abdeckung – aber nicht automatisch einen größeren klinischen Nutzen in jeder Versorgungssituation."
    },
    {
      id: "standardimpfung",
      number: "06",
      nav: "Standardimpfung",
      kicker: "Standardimpfung",
      title: "Säuglinge frühzeitig und zeitgerecht schützen",
      subtitle: "Nicht nur Impfstoffwahl und Schema zählen – entscheidend ist ein vollständiger und rechtzeitiger Abschluss der Grundimmunisierung.",
      background: "/assets/backgrounds/06_standardimpfung_timeline-bg.jpg",
      inlineImage: "/assets/images/06_standardimpfung_timeline.png",
      inlineImageAlt: "Arbeitsgrafik zum 2+1- und 3+1-Impfschema mit zusätzlicher Praxislogik zur Erkennung von Impflücken",
      tone: "light",
      align: "left",
      kind: "standard",
      long: true,
      zoomable: true,
      paragraphs: [
        "Die STIKO hält auch 2026 an PCV13 oder PCV15 für die Grundimmunisierung fest. Gesunde reifgeborene Säuglinge erhalten die Pneumokokken-Impfung im 2+1-Schema im Alter von 2, 4 und 11 Monaten.",
        "Frühgeborene – Geburt vor vollendeter 37. Schwangerschaftswoche – erhalten eine zusätzliche Dosis im Alter von 3 Monaten und werden im 3+1-Schema mit 2, 3, 4 und 11 Monaten geimpft.",
        "Eine Nachholimpfung wird bis zum Alter von unter 24 Monaten empfohlen. Bei Kindern ab 12 Monaten sind für die Nachholimpfung zwei Dosen im Abstand von mindestens 8 Wochen ausreichend.",
        "Praxisrealität: Erkrankungen im Säuglingsalter können geplante Impftermine verschieben. Deshalb wird die Darstellung um eine Frage-Handlungs-Logik ergänzt: Impfstatus prüfen → fehlende Impfung erkennen → nächsten Schritt bzw. Nachholtermin veranlassen."
      ],
      note: "Aktuelle RKI-Daten zur ersten/zweiten Impfung und zum tatsächlichen Zeitpunkt des Abschlusses der Impfserie werden ergänzt, sobald die final zu verwendende Quelle feststeht.",
      quote: "Für die Prävention zählt vor allem eine vollständige und zeitgerechte Grundimmunisierung."
    },
    {
      id: "praxis-faq",
      number: "07",
      nav: "Praxis-FAQ",
      kicker: "Praxis-FAQ",
      title: "Sechs Fragen aus der Versorgungspraxis",
      subtitle: "PCV13 → PCV15 bleibt relevant – aber als eine von mehreren kurzen, handlungsorientierten FAQ.",
      background: "/assets/backgrounds/07_impfserie_wechsel-bg.jpg",
      inlineImage: "/assets/images/07_impfserie_wechsel.png",
      inlineImageAlt: "Arbeitsgrafik mit sechs typischen FAQ zur Pneumokokken-Impfung bei Kindern",
      tone: "light",
      align: "left",
      kind: "standard",
      long: true,
      zoomable: true,
      faq: [
        {
          question: "Mit PCV13 begonnen – kann mit PCV15 weitergeimpft werden?",
          answer: "Ja. Nach der STIKO-Stellungnahme 2023 können mit PCV10 oder PCV13 begonnene Säuglings-Impfserien mit PCV15 vervollständigt werden; zusätzliche Dosen über das altersentsprechende Schema hinaus sind dafür nicht erforderlich."
        },
        {
          question: "Was ist zu tun, wenn die Grundimmunisierung nicht rechtzeitig abgeschlossen wurde?",
          answer: "Impfstatus prüfen, fehlende Dosen identifizieren und die Nachholung nach aktueller STIKO-Empfehlung veranlassen. Eine Nachholimpfung wird bis unter 24 Monate empfohlen; ab 12 Monaten sind zwei Dosen im Abstand von mindestens 8 Wochen ausreichend."
        },
        {
          question: "Was verändert sich ab dem Alter von zwei Jahren?",
          answer: "Ab zwei Jahren wird bei definierten Risikofaktoren die Indikationsimpfung relevant. Die konkrete Strategie richtet sich nach Risikoprofil und Vorimpfungen."
        },
        {
          question: "Wie gehe ich bei unklarem Impfstatus bzw. unklaren Vorimpfungen vor?",
          answer: "Vorimpfungen soweit möglich klären und die nächste Handlung anhand der aktuellen STIKO-Empfehlung patientenbezogen ableiten; die Fortbildung ersetzt keinen vollständigen Impfalgorithmus."
        },
        {
          question: "Wann verändern Grunderkrankung, Therapie oder Immunsuppression die Impfstrategie?",
          answer: "Nicht die Diagnose allein entscheidet. Grunderkrankung, Krankheitsausmaß, Therapie, Immunsuppression, Alter und bisheriger Impfstatus müssen gemeinsam betrachtet werden."
        },
        {
          question: "Wie wird sichergestellt, dass notwendige Risikoimpfungen im Praxisalltag tatsächlich umgesetzt werden?",
          answer: "Risikokinder aktiv identifizieren, Impfstatus kontrollieren, dokumentieren, Reminder einsetzen, aktiv einbestellen, Pädiatrie und Facharzt abstimmen und die Impfung durchführen."
        }
      ],
      note: "Arbeitsstand: Medizinische Detailantworten vor Go-live gegen die dann aktuelle STIKO-Empfehlung und Fachinformationen prüfen.",
      quote: "Kurze Antwort, klare nächste Handlung – das Praxis-FAQ soll Orientierung geben, nicht die Leitlinie ersetzen."
    },
    {
      id: "risikogruppen",
      number: "08",
      nav: "Risikokinder",
      kicker: "Risikokinder",
      title: "Nicht nur die Diagnose entscheidet",
      subtitle: "STIKO-Risikogruppen strukturieren – individuelles Risiko und konkrete Versorgungssituation zusätzlich bewerten.",
      background: "/assets/backgrounds/08_risikogruppen-bg.jpg",
      inlineImage: "/assets/images/08_risikogruppen.png",
      inlineImageAlt: "Arbeitsgrafik zu STIKO-Risikogruppen und einer zweiten Ebene der individuellen Risikobewertung",
      tone: "light",
      align: "left",
      kind: "standard",
      long: true,
      zoomable: true,
      paragraphs: [
        "Kinder und Jugendliche mit bestimmten Grunderkrankungen tragen ein erhöhtes Risiko für schwere Pneumokokken-Erkrankungen. Die STIKO fasst die relevanten Konstellationen in drei Gruppen zusammen:"
      ],
      numbered: [
        "Angeborene oder erworbene Immundefekte.",
        "Sonstige chronische Krankheiten mit erhöhter Gefährdung für Pneumokokken-Infektionen.",
        "Anatomische oder fremdkörperassoziierte Risiken für eine Pneumokokken-Meningitis."
      ],
      blocks: [
        {
          heading: "Individuelles Risiko zusätzlich bewerten",
          text: "Neben der Diagnose sind Grunderkrankung, Ausmaß bzw. Schwere der Erkrankung, Therapie, Immunsuppression, Alter, bisheriger Impfstatus und die individuelle Risikokonstellation zu berücksichtigen. Der Zusammenhang Grunderkrankung → Immunsuppression → erhöhtes Infektionsrisiko wird niedrigschwellig erläutert."
        },
        {
          heading: "Chronische Erkrankungen nach Praxisrelevanz",
          text: "Asthma wird als häufiges praxisnahes erstes Beispiel priorisiert. Weitere Erkrankungen und Risikosituationen folgen nach Häufigkeit und Relevanz. Die vollständige STIKO-Liste bleibt verlinkte Referenz."
        },
        {
          heading: "Versorgungslücke schließen",
          text: "Fachärzt:innen kennen häufig die Grunderkrankung, haben aber nicht immer den vollständigen Impfstatus. Pädiater:innen sehen das Kind teils erst im akuten Krankheitsfall. Deshalb müssen Impfstatus, Verantwortlichkeiten und nächste Schritte zwischen den Versorgungsbereichen aktiv abgestimmt werden."
        }
      ],
      quote: "Die zentrale Praxisfrage lautet: Verändert die individuelle Situation dieses Kindes die Impfstrategie – und wie stellen wir die Umsetzung sicher?"
    },
    {
      id: "stiko-2026",
      number: "09",
      nav: "STIKO 2026",
      kicker: "STIKO 2026",
      title: "Was ändert sich ab zwei Jahren?",
      subtitle: "Standardimpfung im Säuglingsalter und Indikationsimpfung bei definierten Risikofaktoren klar trennen.",
      background: "/assets/backgrounds/09_stiko_2026_pathway-bg.jpg",
      inlineImage: "/assets/images/09_stiko_2026_pathway.png",
      inlineImageAlt: "Arbeitsgrafik zum Übergang von Standardimpfung zu Indikationsimpfung ab zwei Jahren bei definierten Risikofaktoren",
      tone: "light",
      align: "left",
      kind: "standard",
      long: true,
      zoomable: true,
      paragraphs: [
        "Seit Januar 2026 empfiehlt die STIKO für Kinder und Jugendliche im Alter von 2 bis einschließlich 17 Jahren mit definierten Risikofaktoren die Verwendung von PCV20. Die alleinige Anwendung von PPSV23 beziehungsweise das bisherige sequenzielle Schema wird für diese Gruppe nicht mehr empfohlen.",
        "Die Übergangsfrage wird in v0.8 bewusst hervorgehoben: Ab zwei Jahren verändert nicht das Alter allein die Strategie, sondern das Zusammenspiel aus Alter, definiertem Risikofaktor und bisherigen Impfungen.",
        "Anwendungshinweise: Ungeimpfte Risikokinder erhalten PCV20. Wurde zuvor mindestens eine Dosis PCV13 oder PCV15 gegeben, wird PCV20 im Abstand von 1 Jahr empfohlen. Nach früherer PPSV23-Impfung beziehungsweise früherem sequenziellen Schema gilt grundsätzlich ein Abstand von 6 Jahren; bei ausgeprägter Immundefizienz ist 1 Jahr möglich."
      ],
      note: "Für Wiederholungsimpfungen nach PCV20 spricht die STIKO derzeit keine Empfehlung aus, da entsprechende Daten fehlen.",
      quote: "Alter + Risikoprofil + Vorimpfung bestimmen die nächste Handlung."
    },
    {
      id: "praxisworkflow",
      number: "10",
      nav: "Praxis-Workflow",
      kicker: "Praxis-Workflow",
      title: "Risikokinder aktiv versorgen",
      subtitle: "Kein Mini-Algorithmus – stattdessen eine konkrete 7-stufige Handlungshilfe für den Praxisalltag.",
      background: "/assets/backgrounds/10_impfnavigator_wireframe-bg.jpg",
      inlineImage: "/assets/images/10_impfnavigator_wireframe.png",
      inlineImageAlt: "Arbeitsgrafik eines siebenstufigen Praxis-Workflows zur Versorgung von Risikokindern",
      tone: "light",
      align: "left",
      kind: "steps",
      long: true,
      zoomable: true,
      intro: "Der bisherige Praxisnavigator wird nicht als individueller Impfalgorithmus weiterentwickelt. Im Vordergrund steht die Frage, wie Risikokinder im Versorgungssystem zuverlässig identifiziert, erinnert, einbestellt und geimpft werden.",
      steps: [
        { title: "Risikokinder identifizieren", items: ["Patientenkollektiv aktiv auf chronische Erkrankungen und Risikokonstellationen prüfen."] },
        { title: "Impfstatus kontrollieren", items: ["Prüfen, ob notwendige Standard- und Risikoimpfungen vollständig sind."] },
        { title: "Risikokinder dokumentieren", items: ["Geeignete Kodierung bzw. Dokumentation im Praxisverwaltungssystem nutzen."] },
        { title: "Reminder einsetzen", items: ["Vorhandene Reminder-Funktionen des Praxisverwaltungssystems verwenden."] },
        { title: "Aktiv einbestellen", items: ["Eltern bzw. Patient:innen gezielt kontaktieren und einen Impftermin vereinbaren."] },
        { title: "Pädiater und Facharzt abstimmen", items: ["Verantwortlichkeiten klären und Informationen zum Impfstatus austauschen."] },
        { title: "Impfung durchführen", items: ["Nicht ausschließlich auf den Pädiater verweisen: Auch Fachärzt:innen können impfen."] }
      ],
      bestPractice: "Arbeitsstand: Dr. Horn soll als möglicher Best-Practice-Geber zu Identifikation, Dokumentation, Reminder, aktiver Einbestellung, Verantwortlichkeiten und Elternansprache eingebunden werden.",
      quote: "Die Handlungshilfe übersetzt medizinische Empfehlungen in konkrete Versorgungsschritte."
    },
    {
      id: "praxisfaelle",
      number: "11",
      nav: "Praxisfälle",
      kicker: "Praxisfälle",
      title: "Vier typische Impfpass- und Versorgungssituationen",
      subtitle: "Ausgangssituation → konkrete Frage → nächster Schritt. Finale Falltexte nach Eingang der Pfizer-Rohfassungen und Medical Review.",
      background: "/assets/backgrounds/11_praxisfaelle-bg.jpg",
      inlineImage: "/assets/images/11_praxisfaelle.png",
      inlineImageAlt: "Arbeitsgrafik mit vier aktualisierten Praxisfällen zu Impflücke, Asthma, Psoriasis und Cochlea-Implantat",
      tone: "light",
      align: "left",
      kind: "standard",
      long: true,
      zoomable: true,
      blocks: [
        {
          heading: "Fall A · Säugling / Kleinkind · Grundimmunisierung verspätet oder unvollständig",
          text: "Ausgangssituation: Impfstatus ist nicht vollständig bzw. die vorgesehenen Impfzeitpunkte wurden nicht eingehalten. Frage: Welche Dosis fehlt und wie wird die Nachholung zeitnah organisiert? Nächster Schritt: Impfstatus mit der aktuellen STIKO-Empfehlung abgleichen und Nachholtermin veranlassen."
        },
        {
          heading: "Fall B · Kind mit Asthma",
          text: "Ausgangssituation: häufige chronische Erkrankung. Frage: Wie werden Risikokonstellation und bisheriger Impfstatus gemeinsam bewertet? Nächster Schritt: konkrete STIKO-Indikation und Impfstrategie patientenbezogen prüfen."
        },
        {
          heading: "Fall C · Kind mit Psoriasis",
          text: "Ausgangssituation: Grunderkrankung und gegebenenfalls immunsuppressive Therapie. Frage: Wie beeinflussen Erkrankung und Therapie die individuelle Risikobewertung? Nächster Schritt: Immunsuppression, Impfstatus und aktuelle STIKO-Empfehlung gemeinsam prüfen."
        },
        {
          heading: "Fall D · Kind mit Cochlea-Implantat",
          text: "Ausgangssituation: anatomische bzw. fremdkörperassoziierte Risikosituation. Frage: Welche Vorimpfungen liegen vor und welche weiteren Schritte sind erforderlich? Nächster Schritt: Risikokonstellation, Vorimpfungen und aktuelle STIKO-Empfehlung strukturiert zusammenführen."
        }
      ],
      note: "Arbeitsstand: Pfizer hat Fälle zu Asthma, Psoriasis und Cochlea-Implantat angekündigt. Finale Falltexte und medizinische Auflösungen erst nach Eingang der Rohfassungen und Medical Review festlegen.",
      quote: "Die Praxisfälle wenden den zuvor vermittelten Stoff an und führen anschließend bewusst in die CME-Vertiefung."
    },
    {
      id: "cme-vertiefung",
      number: "12",
      nav: "CME vertiefen",
      kicker: "CME vertiefen",
      title: "Pneumokokkenimpfung bei Kindern – Fachwissen vertiefen",
      subtitle: "Drei Perspektiven verbinden Standardimpfung, Impfstoffkonzepte und Risikokinder.",
      background: "/assets/backgrounds/12_cme_cta_mockup-bg.jpg",
      inlineImage: "/assets/images/12_cme_cta_mockup.png",
      inlineImageAlt: "Helles Arbeitsmockup mit drei fachlichen Perspektiven für das CME-Modul",
      tone: "light",
      align: "left",
      kind: "cta",
      long: true,
      paragraphs: [
        "Die CME soll drei Perspektiven verbinden: 1) Standardimpfung im Säuglingsalter und zeitgerechter Impfschutz, 2) Impfstoffkonzepte, Serotypenabdeckung und sich wandelnde Epidemiologie, 3) Risikokinder, Indikationsimpfung und individuelle Versorgungssituationen.",
        "med.i.scroll und CME bleiben eigenständige Formate, werden aber wechselseitig verknüpft: Der med.i.scroll führt zur CME zur Vertiefung; die CME verweist zurück auf den med.i.scroll als kompakte Zusammenfassung und Nachschlageformat."
      ],
      bullets: [
        "Standardimpfung im Säuglingsalter und zeitgerechter Impfschutz",
        "Impfstoffkonzepte, Serotypenabdeckung und dynamische Epidemiologie",
        "Risikokinder, Indikationsimpfung und konkrete Versorgungssituationen",
        "Praxisfälle und FAQ",
        "Lernerfolgskontrolle"
      ],
      badges: ["2 Expertenvorträge", "geplant 2–3 CME-Punkte*", "Lernerfolgskontrolle"],
      note: "Arbeitsstand Referenten: Prof. Hamelmann und Dr. med. Michael Horn wurden in den Vorabstimmungen priorisiert. Weitere Optionen aus dem MSD-Termin: Prof. Rose, Prof. Baumann, Prof. Gosch, Dr. Westerhold und Frau Prelok. Expertennamen/-rollen werden erst nach finaler Bestätigung verbindlich in CTA und Grafik übernommen. * CME-Punkte abhängig vom finalen Vortrags- und Lernumfang und bis zur Zertifizierung unter Vorbehalt.",
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
      tone: "light",
      align: "left",
      kind: "sources",
      long: true,
      pendingHeading: "Noch zu ergänzen bzw. zu prüfen",
      note: "Nur aktuelle, belastbare und für die Zielgruppe unmittelbar relevante Quellen werden in der sichtbaren Story hervorgehoben. Alle finalen medizinischen Aussagen sind vor Go-live erneut gegen aktuelle STIKO-Empfehlungen, Primärquellen und Fachinformationen zu prüfen.",
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
      tone: "light",
      align: "left",
      kind: "imprint",
      long: true
    }
  ]
};

export const pages = project.pages;
