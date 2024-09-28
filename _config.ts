import lume from "lume/mod.ts";
import blog from "blog/mod.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";

// import your favorite language
import lang_javascript from "npm:highlight.js/lib/languages/javascript";
import lang_bash from "npm:highlight.js/lib/languages/bash";
import lang_swift from "npm:highlight.js/lib/languages/swift";

const site = lume();

site.use(blog());

site.use(
    codeHighlight({
        languages: {
            javascript: lang_javascript,
            bash: lang_bash,
            swift: lang_swift,
        },
        theme: {
            name: "atom-one-dark", // The theme name to download
            path: "/css/code_theme.css", // The destination filename
        },
    }),
);

site.copy("/css/code_theme.css");

export default site;
