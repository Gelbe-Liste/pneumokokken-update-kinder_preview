# Piano Analytics – Pneumokokken-Impfung bei Kindern / Stand Mastertemplate v5

Stand: 08.09.2026

## Projektkontext

- `project_id`: `pneumokokken-update-kinder`
- Format: `med.i.scroll`
- Medizinisches Fachgebiet: `Kinder- und Jugendmedizin`
- Indikation: `Pneumokokken-Impfung bei Kindern`
- Piano Page: `med.i.scroll | Pneumokokken-Impfung bei Kindern`

Die inhaltliche Version v0.7 wurde bei dieser Migration nicht redaktionell verändert; angepasst wurde ausschließlich die Analytics-/Tracking-Schicht und ihre Metadaten.

## Wiederverwendete Vidal-/Gelbe-Liste-Events

- `page.display`
- `click.action`
- `pop_in.display`

## Custom Events des med.i.scroll v5

- `chapter.display` – Kapitel erstmals zu mindestens 35 % sichtbar
- `page.scroll` – 25/50/75/100 %; 100 % nur am tatsächlichen Dokumentende
- `video.start`
- `video.progress`
- `video.complete`

Die frühere Semantik `chapter_view`, `scroll_depth`, `module_complete`, `image_view_*`, `outbound_click`, `navigation_click`, `pdf_generate_*` und die alten `video_*`-Events wurde entfernt.

## Neue Custom Properties

`project_id`, `chapter_id`, `chapter_number`, `chapter_title`, `content_type`, `scroll_rate`, `image_id`, `zoom_level`, `document_id`, `element_id`, `destination_path`, `trigger_source`, `entry_point`, `video_id`, `video_name`, `progress_percent`.

Für dieses Projekt kann `content_type` zusätzlich den vorhandenen projektspezifischen Kapiteltyp `cta` annehmen.

## Bestehende Gelbe-Liste-Properties

Bei `page.display` werden – soweit im Projekt befüllt – `page`, `page_url`, `de_page_category`, `de_page_tags`, `page_type`, `visitor_type`, `article_category` und die vorhandenen `product_*`-Properties verwendet. Produktwerte sind aktuell bewusst leer, solange keine fachlich freigegebene Produktzuordnung vorliegt.

## Aktivierung

```env
VITE_PIANO_ENABLED=true
VITE_PIANO_SITE_ID=640794
VITE_PIANO_COLLECT_DOMAIN=https://rwwnhth.pa-cd.com
```

Im gelieferten Projektstand ist `VITE_PIANO_ENABLED=false`. Erst nach Data-Model-/Privacy-Freigabe im produktiven Vercel-Projekt aktivieren.

## KPI-Mapping

- Reach/Visits: `page.display`
- Chapter Reach: `chapter.display`
- Scroll Depth: `page.scroll` + `scroll_rate`
- Completion: `page.scroll` + `scroll_rate=100`
- Grafik: `click.action` + Open/Close/Zoom
- PDF: `click.action` + Generate/Download
- CME-/externe CTA: `click.action` + `destination_path`
- Navigation/Menü: `click.action` bzw. `pop_in.display`
- Video: `video.start`, `video.progress`, `video.complete`

## v0.11 – zusätzliche Interaktionen

### Praxis-FAQ / Praxis-Fälle
- Event: `accordion.toggle`
- Relevante Properties: `chapter_id`, `accordion_id`, `accordion_title`, `accordion_group`, `interaction_state`, `trigger_source`

### Praxis-Workflow
- Event: `workflow.slide`
- Relevante Properties: `chapter_id`, `slide_index`, `slide_total`, `slide_title`, `trigger_source`
