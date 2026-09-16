import ContentCard from "./ContentCard";
import InlineGraphic from "./InlineGraphic";
import AccordionGroup from "./AccordionGroup";

function RichText({ children }) {
  const text = String(children ?? "");
  const parts = text.split(/(Streptococcus pneumoniae)/g);
  return <>{parts.map((part,index)=>part === "Streptococcus pneumoniae" ? <em key={index}>{part}</em> : <span key={index}>{part}</span>)}</>;
}

function Quote({ children }) {
  return <blockquote className="editorial-quote"><RichText>{children}</RichText></blockquote>;
}

export default function StandardContent({ page, onOpenGraphic, pageName }) {
  const hasInlineGraphic = Boolean(page.inlineImage);

  return (
    <ContentCard wide={Boolean(page.wide || hasInlineGraphic)}>
      <p className="page-kicker">{page.kicker}</p>
      <h2>{page.title}</h2>
      {page.subtitle && <p className="page-subtitle"><RichText>{page.subtitle}</RichText></p>}

      {page.inlineImage && (
        <InlineGraphic
          src={page.inlineImage}
          alt={page.inlineImageAlt || page.title}
          className="inline-figure--chapter"
          onOpenGraphic={onOpenGraphic}
        />
      )}

      {page.paragraphs?.map((paragraph, index) => <p key={index}><RichText>{paragraph}</RichText></p>)}
      {page.highlight && <div className="important-note"><RichText>{page.highlight}</RichText></div>}
      {page.heading && <h3>{page.heading}</h3>}
      {page.bullets && <ul className="editorial-list">{page.bullets.map((item, index) => <li key={index}><RichText>{item}</RichText></li>)}</ul>}
      {page.numbered && <ol className="editorial-list editorial-list--numbered">{page.numbered.map((item, index) => <li key={index}><RichText>{item}</RichText></li>)}</ol>}
      {page.paragraphsAfter?.map((paragraph, index) => <p key={`after-${index}`}><RichText>{paragraph}</RichText></p>)}

      {page.accordionItems ? (
        <AccordionGroup items={page.accordionItems} page={page} pageName={pageName} variant={page.accordionVariant || "faq"} />
      ) : (
        page.blocks?.map((block, index) => (
          <div className="text-block" key={index}>
            <h3>{block.heading}</h3>
            <p><RichText>{block.text}</RichText></p>
          </div>
        ))
      )}

      {page.quote && <Quote>{page.quote}</Quote>}
      {page.note && <div className="important-note"><RichText>{page.note}</RichText></div>}

      {onOpenGraphic && !hasInlineGraphic && (
        <div className="graphic-open-row">
          <button type="button" className="graphic-open-button" onClick={onOpenGraphic} aria-label="Grafik öffnen">
            <span className="graphic-open-button__icon" aria-hidden="true">⌕</span>
            <span>Grafik öffnen</span>
          </button>
        </div>
      )}
    </ContentCard>
  );
}
