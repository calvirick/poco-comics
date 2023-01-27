import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot, g as createVNode, F as Fragment } from '../astro.6e18d935.mjs';
import 'html-escaper';
/* empty css                             *//* empty css                             *//* empty css                             */
const $$Astro$c = createAstro();
const $$Hamburger = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Hamburger;
  return renderTemplate`

${maybeRenderHead($$result)}<button class="mobile-nav-toggle astro-3WEO6HLS" aria-controls="primary-navigation" aria-expanded="false">
  <i class="fa-solid fa-burger astro-3WEO6HLS"></i>

  <span class="visually-hidden astro-3WEO6HLS">Menu</span>
</button>`;
}, "/Users/awilkins/Repo/poco-comics/src/components/Hamburger.astro");

const $$Astro$b = createAstro();
const $$NavButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$NavButton;
  const { label, href = "/", inverted = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li class="list-hidden astro-KME5JXGL" role="listitem">
  <a${addAttribute(href, "href")} class="button astro-KME5JXGL"${addAttribute(inverted, "data-type")}>${label}</a>
</li>`;
}, "/Users/awilkins/Repo/poco-comics/src/components/NavButton.astro");

const $$Astro$a = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead($$result)}<header class="primary-header astro-5BLMO7YK">
  <div class="container astro-5BLMO7YK">
    <div class="nav-wrapper astro-5BLMO7YK">
      <a href="/" class="logo astro-5BLMO7YK"><img src="/poco-logo.png" alt="poco logo" class="astro-5BLMO7YK"></a>
      ${renderComponent($$result, "Hamburger", $$Hamburger, { "class": "astro-5BLMO7YK" })}
      <nav class="primary-navigation astro-5BLMO7YK" id="primary-navigation">
        <ul aria-label="Primary" role="list" class="nav-list astro-5BLMO7YK">
          ${renderComponent($$result, "NavButton", $$NavButton, { "label": "About", "href": "/about", "class": "astro-5BLMO7YK" })}
          ${renderComponent($$result, "NavButton", $$NavButton, { "label": "FAQ", "href": "/faq", "class": "astro-5BLMO7YK" })}
          ${renderComponent($$result, "NavButton", $$NavButton, { "label": "Discord", "href": "#", "inverted": "true", "class": "astro-5BLMO7YK" })}
          ${renderComponent($$result, "NavButton", $$NavButton, { "label": "Contact", "href": "#", "inverted": "true", "class": "astro-5BLMO7YK" })}
        </ul>
      </nav>
    </div>
  </div>

  
</header>`;
}, "/Users/awilkins/Repo/poco-comics/src/components/Navbar.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$9 = createAstro();
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, image = "/placeholder-social.jpg" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<!-- Global Metadata --><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<link rel="icon" type="image/svg+xml" href="/favicon.svg">\n<meta name="generator"', ">\n\n<!-- Canonical URL -->\n<!-- <link rel='canonical' href={canonicalURL} /> -->\n\n<!-- Primary Meta Tags -->\n<title>", '</title>\n<meta name="title"', '>\n<meta name="description"', '>\n<meta name="keywords" content="comic, webcomic, comics, webcomics, funny, webtoon, pixel art, pixels, pixel, sprites, sprite comic, sprite comics">\n\n<!-- Open Graph / Facebook -->\n<meta property="og:type" content="website">\n<meta property="og:url"', '>\n<meta property="og:title"', '>\n<meta property="og:description"', '>\n<meta property="og:image"', '>\n\n<!-- Twitter -->\n<meta property="twitter:card" content="summary_large_image">\n<meta property="twitter:url"', '>\n<meta property="twitter:title"', '>\n<meta property="twitter:description"', '>\n<meta property="twitter:image"', '>\n\n<!-- Font Awesome -->\n<script src="https://kit.fontawesome.com/a1f3ebd84f.js" crossorigin="anonymous"><\/script>'])), addAttribute(Astro2.generator, "content"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"));
}, "/Users/awilkins/Repo/poco-comics/src/components/BaseHead.astro");

const $$Astro$8 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = new Date();
  return renderTemplate`${maybeRenderHead($$result)}<footer id="footer" class="astro-SZ7XMLTE">
  COPYRIGHT &copy; ${today.getFullYear()} ALEX WILKINS All rights reserved.
</footer>`;
}, "/Users/awilkins/Repo/poco-comics/src/components/Footer.astro");

const SITE_TITLE = "Poco Comics ";
const SITE_DESCRIPTION = 'Poco is a digital webcomic written and "illustrated" by Alex Wilkins in a pixel art style!';

const $$Astro$7 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$MainLayout;
  return renderTemplate`<html lang="en">
  <head>
    ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}
  ${renderHead($$result)}</head>
  <body>
    ${renderComponent($$result, "Navbar", $$Navbar, {})}
    ${renderSlot($$result, $$slots["default"])}
    ${renderComponent($$result, "Footer", $$Footer, {})}
  </body></html>`;
}, "/Users/awilkins/Repo/poco-comics/src/layouts/MainLayout.astro");

const $$Astro$6 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<section id="header" class="astro-3EF6KSR2">
  <h2 class="astro-3EF6KSR2">WELCOME!</h2>
  <p class="astro-3EF6KSR2">
    If you're new here, check out <a href="/poco-wiki" class="astro-3EF6KSR2">this cool link!?</a>
  </p>
</section>`;
}, "/Users/awilkins/Repo/poco-comics/src/components/Header.astro");

const $$Astro$5 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": () => renderTemplate`${renderComponent($$result, "Header", $$Header, {})}${maybeRenderHead($$result)}<a href="/comic-pages/comic-1">Comic #1</a><a href="/comic-pages/comic-2">Comic #2</a>` })}`;
}, "/Users/awilkins/Repo/poco-comics/src/pages/index.astro");

const $$file$3 = "/Users/awilkins/Repo/poco-comics/src/pages/index.astro";
const $$url$3 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$Comic = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Comic;
  const { title, url, description, publishDate, alt } = Astro2.props;
  return renderTemplate`

${maybeRenderHead($$result)}<div class="comic-container astro-JR4N7AI7">
  <section class="top-section astro-JR4N7AI7">
    <button onclick="document.getElementById('blog').scrollIntoView();" class="blog-button astro-JR4N7AI7"><i class="fa-solid fa-arrow-down astro-JR4N7AI7"></i>
    </button>
    <div class="comic-info-container astro-JR4N7AI7">
      <p class="astro-JR4N7AI7">Published: ${publishDate}</p>
      <strong class="comic-title astro-JR4N7AI7">${title}-</strong>
      <span class="comic-description astro-JR4N7AI7">
        ${description}
      </span>
    </div>
  </section>
  <img class="the-comic astro-JR4N7AI7"${addAttribute(url, "src")}${addAttribute(alt, "alt")}>
  <button class="scrollToTopBtn astro-JR4N7AI7"><i class="fa-solid fa-arrow-up astro-JR4N7AI7"></i></button>
</div>`;
}, "/Users/awilkins/Repo/poco-comics/src/components/Comic.astro");

const $$Astro$3 = createAstro();
const $$ComicLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ComicLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": () => renderTemplate`${renderComponent($$result, "Header", $$Header, {})}${renderComponent($$result, "Comic", $$Comic, { "title": frontmatter.title, "publishDate": frontmatter.publishDate, "url": frontmatter.image.url, "alt": frontmatter.image.alt, "description": frontmatter.description })}${renderSlot($$result, $$slots["default"])}` })}`;
}, "/Users/awilkins/Repo/poco-comics/src/layouts/ComicLayout.astro");

const html$1 = "<h3 id=\"blog-text-title-here\">Blog Text Title Here:</h3>\n<p>I’m baby gatekeep letterpress ugh master cleanse vape, godard leggings roof party banjo live-edge post-ironic mixtape marfa heirloom tousled. Scenester offal tousled keffiyeh DIY. Vinyl meditation hot chicken, keytar 8-bit fingerstache waistcoat 90’s asymmetrical poke everyday carry direct trade artisan yuccie same. Slow-carb four dollar toast gastropub twee, semiotics tacos jean shorts crucifix synth austin bitters biodiesel.</p>\n<p>Letterpress vexillologist austin, wolf pok pok shoreditch fanny pack vinyl aesthetic twee enamel pin. Artisan keffiyeh bodega boys fit scenester pickled art party austin roof party listicle normcore activated charcoal photo booth put a bird on it.</p>\n<p>Letterpress vexillologist austin, wolf pok pok shoreditch fanny pack vinyl aesthetic twee enamel pin. Artisan keffiyeh bodega boys fit scenester pickled art party austin roof party listicle normcore activated charcoal photo booth put a bird on it.</p>";

				const frontmatter$1 = {"layout":"../../layouts/ComicLayout.astro","title":"Comic #01","description":"We meet Poco and Gary for the first time.","publishDate":"01-27-2023","author":"Alex Wilkins","image":{"url":"https://ik.imagekit.io/pococomics/poco-comics/tr:lo-true/01-01-concussion.webp","alt":"Poco comic #1 Concussion."}};
				const file$1 = "/Users/awilkins/Repo/poco-comics/src/pages/comic-pages/comic-1.md";
				const url$1 = "/comic-pages/comic-1";
				function rawContent$1() {
					return "\n### Blog Text Title Here:\n\nI'm baby gatekeep letterpress ugh master cleanse vape, godard leggings roof party banjo live-edge post-ironic mixtape marfa heirloom tousled. Scenester offal tousled keffiyeh DIY. Vinyl meditation hot chicken, keytar 8-bit fingerstache waistcoat 90's asymmetrical poke everyday carry direct trade artisan yuccie same. Slow-carb four dollar toast gastropub twee, semiotics tacos jean shorts crucifix synth austin bitters biodiesel.\n\nLetterpress vexillologist austin, wolf pok pok shoreditch fanny pack vinyl aesthetic twee enamel pin. Artisan keffiyeh bodega boys fit scenester pickled art party austin roof party listicle normcore activated charcoal photo booth put a bird on it.\n\nLetterpress vexillologist austin, wolf pok pok shoreditch fanny pack vinyl aesthetic twee enamel pin. Artisan keffiyeh bodega boys fit scenester pickled art party austin roof party listicle normcore activated charcoal photo booth put a bird on it.\n";
				}
				function compiledContent$1() {
					return html$1;
				}
				function getHeadings$1() {
					return [{"depth":3,"slug":"blog-text-title-here","text":"Blog Text Title Here:"}];
				}
				async function Content$1() {
					const { layout, ...content } = frontmatter$1;
					content.file = file$1;
					content.url = url$1;
					const contentFragment = createVNode(Fragment, { 'set:html': html$1 });
					return createVNode($$ComicLayout, {
									file: file$1,
									url: url$1,
									content,
									frontmatter: content,
									headings: getHeadings$1(),
									rawContent: rawContent$1,
									compiledContent: compiledContent$1,
									'server:root': true,
									children: contentFragment
								});
				}
				Content$1[Symbol.for('astro.needsHeadRendering')] = false;

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$1,
  compiledContent: compiledContent$1,
  default: Content$1,
  file: file$1,
  frontmatter: frontmatter$1,
  getHeadings: getHeadings$1,
  rawContent: rawContent$1,
  url: url$1
}, Symbol.toStringTag, { value: 'Module' }));

const html = "<h3 id=\"blog-text-title-here\">Blog Text Title Here:</h3>\n<p>I’m baby gatekeep letterpress ugh master cleanse vape, godard leggings roof party banjo live-edge post-ironic mixtape marfa heirloom tousled. Scenester offal tousled keffiyeh DIY. Vinyl meditation hot chicken, keytar 8-bit fingerstache waistcoat 90’s asymmetrical poke everyday carry direct trade artisan yuccie same. Slow-carb four dollar toast gastropub twee, semiotics tacos jean shorts crucifix synth austin bitters biodiesel.</p>\n<p>Letterpress vexillologist austin, wolf pok pok shoreditch fanny pack vinyl aesthetic twee enamel pin. Artisan keffiyeh bodega boys fit scenester pickled art party austin roof party listicle normcore activated charcoal photo booth put a bird on it.</p>\n<p>Letterpress vexillologist austin, wolf pok pok shoreditch fanny pack vinyl aesthetic twee enamel pin. Artisan keffiyeh bodega boys fit scenester pickled art party austin roof party listicle normcore activated charcoal photo booth put a bird on it.</p>";

				const frontmatter = {"layout":"../../layouts/ComicLayout.astro","title":"Post 2","description":"We meet Poco and Gary for the first time.","publishDate":"01-28-2023","author":"Alex Wilkins","image":{"url":"https://ik.imagekit.io/pococomics/poco-comics/tr:lo-true/01-01-concussion.webp","alt":"Poco comic #1 Concussion."}};
				const file = "/Users/awilkins/Repo/poco-comics/src/pages/comic-pages/comic-2.md";
				const url = "/comic-pages/comic-2";
				function rawContent() {
					return "\n### Blog Text Title Here:\n\nI'm baby gatekeep letterpress ugh master cleanse vape, godard leggings roof party banjo live-edge post-ironic mixtape marfa heirloom tousled. Scenester offal tousled keffiyeh DIY. Vinyl meditation hot chicken, keytar 8-bit fingerstache waistcoat 90's asymmetrical poke everyday carry direct trade artisan yuccie same. Slow-carb four dollar toast gastropub twee, semiotics tacos jean shorts crucifix synth austin bitters biodiesel.\n\nLetterpress vexillologist austin, wolf pok pok shoreditch fanny pack vinyl aesthetic twee enamel pin. Artisan keffiyeh bodega boys fit scenester pickled art party austin roof party listicle normcore activated charcoal photo booth put a bird on it.\n\nLetterpress vexillologist austin, wolf pok pok shoreditch fanny pack vinyl aesthetic twee enamel pin. Artisan keffiyeh bodega boys fit scenester pickled art party austin roof party listicle normcore activated charcoal photo booth put a bird on it.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"blog-text-title-here","text":"Blog Text Title Here:"}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return createVNode($$ComicLayout, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$PocoWiki = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PocoWiki;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": () => renderTemplate`${maybeRenderHead($$result)}<main>
    <h1>Nobody here but us potatoes!</h1>

    <a href="/">Go back home nerd!</a>
  </main>` })}`;
}, "/Users/awilkins/Repo/poco-comics/src/pages/poco-wiki.astro");

const $$file$2 = "/Users/awilkins/Repo/poco-comics/src/pages/poco-wiki.astro";
const $$url$2 = "/poco-wiki";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PocoWiki,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead($$result)}<main>
  <h1>Are you kidding me? there's no page here?!</h1>

  <a href="/">Go back home nerd!</a>
</main>`;
}, "/Users/awilkins/Repo/poco-comics/src/pages/about.astro");

const $$file$1 = "/Users/awilkins/Repo/poco-comics/src/pages/about.astro";
const $$url$1 = "/about";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Faq = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Faq;
  return renderTemplate`${maybeRenderHead($$result)}<main>
  <h1>oh look....another WASTED PAGE?!?</h1>

  <a href="/">Go back home nerd!</a>
</main>`;
}, "/Users/awilkins/Repo/poco-comics/src/pages/faq.astro");

const $$file = "/Users/awilkins/Repo/poco-comics/src/pages/faq.astro";
const $$url = "/faq";

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d, _page5 as e };
