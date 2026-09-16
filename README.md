# med.i.scroll – pneumokokken-update-kinder

Arbeitsprojekt für das Scrollytelling **„Pneumokokken-Impfung bei Kindern“** auf Basis des **med.i.scroll Mastertemplate v2 (React/Vite)**.

## Projektstatus

- Arbeitstitel / Repository-Name: `pneumokokken-update-kinder`
- Basis: med.i.scroll Mastertemplate v2
- Content-Stand: 14.09.2026 · v0.9
- 14 Scroll-Kapitel inkl. Quellen, Impressum, Sponsortransparenz und CME-CTA
- echte clientseitige PDF-Erstellung über jsPDF
- mobile Navigation, Kapitelmenü, Fortschrittsanzeige und Grafik-Lightbox aus v2 übernommen
- Piano Analytics auf den Stand des med.i.scroll-Mastertemplates v5 (08.09.2026) aktualisiert
- Vidal-/Gelbe-Liste-Semantik: `page.display`, `click.action`, `pop_in.display`; Custom Events `chapter.display`, `page.scroll`, `video.*`
- Debug-Fallback-Queue generisch über `window.__MEDI_SCROLL_TRACKING__`; produktive Aktivierung weiterhin bewusst über `VITE_PIANO_ENABLED` gesteuert

## Inhaltsdramaturgie

1. Einstieg
2. Kernaussagen
3. Pneumokokken verstehen
4. Serotypen im Wandel
5. Valenz & Evidenz
6. Standardimpfung
7. Praxis-FAQ / Impfserie
8. Risikogruppen
9. STIKO 2026 / PCV20-Indikationsimpfung
10. Praxisnavigator
11. Praxisfälle
12. CME-Vertiefung / CTA
13. Literatur & Download
14. Impressum

Die redaktionelle Story folgt der vereinbarten Logik:

**Relevanz → medizinisches Verständnis → Serotypen/Evidenz → Standardimpfung (PCV13/PCV15) → Risikostratifizierung → Indikationsimpfung (PCV20) → Praxis → CME-Vertiefung**

## Wichtige Dateien

- `src/project.js` – alle Projektdaten, Texte, Kapitel, Quellen, CTA und Medienpfade
- `public/assets/images/` – Arbeitsgrafiken
- `public/assets/backgrounds/` – abgeleitete Hintergrundflächen für die v2-Vollbilddramaturgie
- `docs/med-i-scroll_Pneumokokken_Inhaltskonzept_Abstimmung_2026-08-28.docx` – inhaltliche Arbeitsgrundlage
- `docs/ASSET-MAPPING-PNEUMOKOKKEN.md` – ursprüngliches Asset-Mapping
- `docs/CONTENT-CLEARANCE-PFIZER-v0.9.md` – redaktionelle Einordnung der am 11.09.2026 angelieferten Pfizer-Daten
- `PROJECT-STATUS.md` – offene Punkte bis zur nächsten Version

## Lokal starten

```bash
npm install
npm run dev
```

Build prüfen:

```bash
npm run build
```

## Deployment auf Vercel

- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Node.js: 22.x

Das Projekt kann in ein eigenes GitHub-Repository mit dem Arbeitstitel `pneumokokken-update-kinder` übernommen und anschließend als neues Vercel-Projekt importiert werden.

## Vor Go-live zwingend offen

1. Direkte URL des CME-Moduls in `src/project.js` einsetzen. Aktuell führt der CTA als Arbeitsziel auf den allgemeinen Gelbe-Liste Campus.
2. Verbindliche CME-Punkte erst nach Zertifizierung ausspielen; bis dahin „geplant 2–3 CME-Punkte*“.
3. Medizinische Angaben, STIKO-Abstände und Serotypendaten gegen die zum Go-live aktuelle Primärquelle prüfen.
4. Referentennamen erst nach verbindlicher Zusage im CTA ergänzen.
5. Sponsor-/Compliance-Review der neutralen PCV13/PCV15/PCV20-Einordnung sowie finale Sponsorennennung/Logos.
6. Nutzungsfreigabe für Referenzlabor-Daten/Visuals von van der Linden klären.
7. Neue Piano Custom Properties/Events im Data Model validieren und nach interner Freigabe `VITE_PIANO_ENABLED=true` im produktiven Vercel-Projekt setzen.
8. Finale Bild-/Grafiknachweise ergänzen.


## Piano Analytics – Migration 08.09.2026

Das Tracking entspricht jetzt technisch dem med.i.scroll-Mastertemplate v5. Die frühere Eventstruktur `chapter_view`, `scroll_depth`, `module_complete`, `image_view_*`, `outbound_click`, `navigation_click` und `pdf_generate_*` wurde auf die aktuelle gemeinsame Semantik migriert.

- `page.display`: Einstieg / Reichweite
- `chapter.display`: Chapter Reach (35-%-Sichtbarkeit)
- `page.scroll` + `scroll_rate`: 25/50/75/100 %; 100 % nur am tatsächlichen Dokumentende
- `click.action`: Grafik Open/Close/Zoom, PDF Generate/Download, CTA/Links, Navigation, Menü
- `pop_in.display`: Kapitelmenü sichtbar
- `video.start`, `video.progress`, `video.complete`: Video-Konsum

Projektwerte stehen in `project.meta.analytics`; stabile Projekt-ID: `project.meta.projectId`. Details siehe `PIANO-ANALYTICS.md`.
