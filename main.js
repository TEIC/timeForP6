import Reveal from 'reveal.js';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/serif.css';
import './localStyle.css';

// optional plugins — also renamed, no more .esm.js suffix
import Markdown from 'reveal.js/plugin/markdown';
import Highlight from 'reveal.js/plugin/highlight';
import 'reveal.js/plugin/highlight/monokai.css';

//footer import
import { footerHTML } from './footer-template.js';

document.querySelectorAll('.slides section').forEach((section) => {
  const isWrapper = section.querySelector(':scope > section');
    if (isWrapper) return;

    section.insertAdjacentHTML('beforeend', footerHTML);
});

const deck = new Reveal({
  hash: true,
  plugins: [ Markdown, Highlight ],
});

deck.initialize();
