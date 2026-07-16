import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css'; // pick any theme

// optional plugins
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import 'reveal.js/plugin/highlight/monokai.css';

const deck = new Reveal({
  hash: true,
  plugins: [ Markdown, Highlight ],
});

deck.initialize();
