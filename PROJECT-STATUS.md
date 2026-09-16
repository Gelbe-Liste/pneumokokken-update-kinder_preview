## v0.20 – 16.09.2026
- Umsetzung der Pfizer-Feinabstimmung vom 16.09.2026 auf Basis des Arbeitsprotokolls.
- Wording auf „vollständige und frühestmögliche Immunisierung“ geschärft.
- Kapitel 02 auf zwei zentrale KPIs fokussiert (73 % / 52,5 %); 8-%-Kennzahl entfernt.
- IPD beim ersten Auftreten ausgeschrieben und Pneumonie-Kontext ergänzt.
- Kapitel 04 neutralisiert; Serotyp 38 entfernt, Serotyp 3 als Beispiel beibehalten.
- Kapitel 05 neutral auf PCV13/PCV15 und STIKO-Empfehlung ausgerichtet; Quellen [10]/[11] entfernt.
- Risikogruppen-Headline überarbeitet und Referenzdichte reduziert.
- Praktische PCV20-Impfschemata in Kapitel 09 als Praxishinweis hervorgehoben.
- Quellenangaben aus den Praxis-Workflow-Slides entfernt; Grafik und Swipe-Workflow bleiben parallel bestehen.
- Aktualisierte Kapitelgrafiken 02, 04, 05, 08 und 10 sowie editierbare Grafik-PowerPoint v0.20 integriert.
- Offene Pfizer-Zulieferungen (Pyramiden-Darstellung/Pneumonie-Kontext und finale Praxisfälle) im Projektstatus dokumentiert.

## v0.19 – 15.09.2026
- PDF-Export: CME-Hinweisbox sicher innerhalb der Seitenbreite umbrochen.
- CME-Grafik im PDF leicht kompakter, damit Hinweisbox nach Möglichkeit auf derselben Seite verbleibt.
- Literaturverzeichnis blockweise paginiert: Quelle und URL werden nicht mehr auf zwei Seiten getrennt.
- Fortsetzungsseiten der Literatur erhalten eine klare Fortsetzungsüberschrift.

## v0.18 – 15.09.2026
- Austausch der final gelieferten Kapitelgrafiken 02–12 (PNG) in der Anwendung.
- Inhalte/Tracking/Interaktionen aus v0.17 unverändert übernommen.
- Neue Paketversion: v0.18.

# Projektstatus – pneumokokken-update-kinder

## v0.10 – 14.09.2026

- Inhaltliche Änderungs-/Ergänzungswünsche aus `v0.7_Korr` gegen die sponsorneutral überarbeitete v0.9 umgesetzt.
- Keine neuen grundlegenden Layout-, Farb- oder Look-&-Feel-Änderungen.
- Versorgungslücke und zeitgerechter Impfschutz in Einstieg und Kernaussagen stärker priorisiert.
- Praxis-FAQ auf sechs typische Versorgungssituationen erweitert.
- Risikokinder um individuelle Faktoren, Immunsuppression, Asthma-Beispiel und Versorgungsschnittstellen ergänzt.
- Praxisnavigator als Mini-Algorithmus entfernt und durch 7-stufigen Praxisworkflow ersetzt.
- Praxisfälle auf unvollständige Grundimmunisierung, Asthma, Psoriasis und Cochlea-Implantat umgestellt.
- Inhaltlich überholte Fachgrafiken in Kapitel 02, 03, 05, 06, 07, 08, 10 und 11 aktualisiert.
- Nicht mehr verwendete Serotyp-38-/SURV-1-Quelle aus der sichtbaren Quellenliste entfernt.
- Medical Review der FAQ-Details und der finalen Fallauflösungen bleibt vor Go-live erforderlich.

## v0.9 – 14.09.2026

- Basis bewusst **v0.7**; die zwischenzeitliche v0.8 wird wegen nicht gewünschter Layout-/Farbänderungen nicht fortgeführt.
- Keine grundlegenden CSS-, Layout- oder Farbänderungen gegenüber v0.7.
- Pfizer-Daten vom 11.09.2026 redaktionell geprüft und in `docs/CONTENT-CLEARANCE-PFIZER-v0.9.md` dokumentiert.
- Standardimpfung (PCV13/PCV15) und Indikationsimpfung (PCV20, Risikokinder 2–17 Jahre) in der Dramaturgie klarer getrennt.
- Aktuelle deutsche Impfquoten/Versorgungslücken ergänzt.
- Referenzlabor-Daten 2025/26 als **theoretische Serotypenabdeckung** eingeordnet; explizite Abgrenzung zur klinischen Wirksamkeit ergänzt.
- PCV20-Indikationskapitel um STIKO-Begründung ergänzt.
- Direkte PCV20-vs.-PCV15-Überlegenheitsvergleiche, PCV15-kritische Erwachsenendaten, hypothetische PCV20-Standardimpfungs-Szenarien, Adult-Daten und PCV25 bewusst nicht übernommen.
- Sponsortransparenz im Impressum als Arbeitsstand ergänzt.
- Offener Punkt: Rechte-/Nutzungsfreigabe der Referenzlabor-Daten bzw. Visuals vor Go-live.

## In dieser v0.1 umgesetzt

- Mastertemplate v2 als technische Basis übernommen.
- Projektstammdaten auf Pneumokokken-Impfung bei Kindern umgestellt.
- Content aus dem abgestimmten Word-Arbeitspapier in `src/project.js` übertragen.
- 12 fachliche Story-Bausteine plus Quellen, Impressum und finaler CME-CTA angelegt.
- Alle 12 Arbeitsgrafiken eingebunden.
- v2-Grafik-Lightbox auf die eingebetteten Fachgrafiken erweitert.
- Abgeleitete, unscharfe Vollbildhintergründe für eine ruhigere Scrollytelling-Optik erstellt.
- Neuer wiederverwendbarer `cta`-Content-Typ für den CME-Abschluss ergänzt.
- PDF-Engine auf Inline-Fachgrafiken und CTA-Kapitel erweitert.
- Tracking-Fallback von `__MALARIA_TRACKING__` auf `__MEDI_SCROLL_TRACKING__` umbenannt.

## Bewusst noch nicht finalisiert

- Finaler CME-Link: derzeit allgemeiner Gelbe-Liste Campus als Arbeitsziel.
- CME-Punkte: weiterhin nur geplant / vorbehaltlich Zertifizierung.
- Referentennamen im CME-CTA: noch nicht ausgespielt.
- Praxisworkflow Risikokinder: aktuell als 7-stufige Steps-Komponente + Arbeitsgrafik umgesetzt; kein individualisierter Impfalgorithmus.
- Finale Fotowelt / lizenzierte Bildwelt: derzeit ausschließlich Arbeitsgrafiken.
- Piano SDK / produktive Site-Konfiguration: weiterhin offen gemäß Tracking-Abstimmung.
- Medical Review und Sponsor-/Compliance-Review: vor Go-live erforderlich.

## Nächster sinnvoller Arbeitsschritt

Nach inhaltlicher Freigabe der v0.1: visuelles Feintuning in Browser/Mobile, ggf. echter interaktiver Impfnavigator und Austausch des CME-Arbeitslinks gegen die finale Modul-URL.

## Technische Prüfung in dieser Arbeitsumgebung

- `src/project.js`, PDF-Engine, Tracking-Adapter und Vite-Konfiguration wurden per Node-Syntaxcheck geprüft.
- Alle in `project.js` referenzierten lokalen Assets sind vorhanden.
- Ein vollständiger `npm install` / Vite-Build konnte in der Arbeitsumgebung nicht abgeschlossen werden, weil der Zugriff auf das npm-Registry beim Installieren der Dependencies in das Timeout lief. Es lag dabei kein gemeldeter Build- oder Quellcodefehler vor. Vor GitHub/Vercel-Übergabe daher einmal lokal bzw. in Vercel `npm install` + `npm run build` ausführen.

## v0.2 – Responsive Headlines
- Deutsche automatische Silbentrennung (`hyphens: auto`) für Headlines und Untertitel ergänzt.
- Sicheres Umbruchverhalten (`overflow-wrap: break-word`) für lange medizinische Begriffe wie „Pneumokokken“.
- Mobile Headline-Größen unter 640 px leicht reduziert und `max-width: 100%` gesetzt, damit Überschriften nicht aus dem Viewport laufen.
- Desktop-Typografie des v2-Templates bleibt unverändert.

## v0.12 – PDF-Export / offener Analytics-Dokumentationspunkt
- PDF-Export nach Prüfung des generierten v0.11-PDFs korrigiert (Unicode, Umbrüche, Accordion-Inhalte, Workflow-Paginierung, Literatur-Links, Impressum).
- **Späterer To-do nach Abschluss der Konzeption:** saubere Piano-Analytics Event-/Property-Dokumentation für Alex/Emma erstellen. Noch nicht finalisieren, solange Kapitel-/Interaktionskonzept weiter bearbeitet wird.

## v0.17 – 15.09.2026
Ärztliche Finalredaktion auf Basis publizierter und offizieller Quellen. STIKO 2026 auf Version 6 aktualisiert, nummerierte Quellenbelege direkt im Text ergänzt, unveröffentlichte Kongressdaten aus dem Haupttext entfernt und Fachgrafiken 02–12 medizinisch/redaktionell synchronisiert.
