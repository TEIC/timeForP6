import Reveal from 'reveal.js';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';

// optional plugins — also renamed, no more .esm.js suffix
import Markdown from 'reveal.js/plugin/markdown';
import Highlight from 'reveal.js/plugin/highlight';
import 'reveal.js/plugin/highlight/monokai.css';

const deck = new Reveal({
  hash: true,
  plugins: [ Markdown, Highlight ],
});

deck.initialize();
