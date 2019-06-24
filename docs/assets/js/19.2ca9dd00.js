(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{209:function(t,a,s){"use strict";s.r(a);var e=s(0),i=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"tailwind"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tailwind","aria-hidden":"true"}},[t._v("#")]),t._v(" Tailwind")]),t._v(" "),s("p",[t._v("We use the default Tailwind CSS config to help control the layouts within your application.")]),t._v(" "),s("p",[t._v("This gives you un-opinionated granular control over your application, making the smallest of tweaks with ease.")]),t._v(" "),s("p",[t._v("There are 3 ways you can manage the CSS processing.")]),t._v(" "),s("ul",[s("li",[t._v("Use your own pipeline e.g. Gulp")]),t._v(" "),s("li",[s("a",{attrs:{href:"#laravel-mix"}},[t._v("Laravel Mix")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#tailstrom"}},[t._v("Tailstrom")])])]),t._v(" "),s("h3",{attrs:{id:"laravel-mix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#laravel-mix","aria-hidden":"true"}},[t._v("#")]),t._v(" Laravel Mix")]),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",[t._v("If you are also using Tailwind for your project then you might face certain conflicts as Mix doesn't have the ability to process 2 different Tailwind configs, read our "),s("strong",[s("a",{attrs:{href:"#tailstrom"}},[t._v("Tailstrom")])]),t._v(" section to find out how to solve this.")])]),t._v(" "),s("p",[t._v("Maelstrom uses PostCSS "),s("em",[t._v("(as this powers Tailwind)")]),t._v(" which means you'll need to process your CSS somehow, the easiest way is via Laravel Mix by using the following snippet (taken from the Tailwind website)")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("mix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("postCss")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node_modules/maelstrom/css/maelstrom.css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'public/css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tailwindcss'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("This will save the "),s("code",[t._v("maelstrom.css")]),t._v(" to "),s("code",[t._v("public/css/maelstrom.css")]),t._v(" which is the default within the "),s("code",[t._v("config/maelstrom.php")]),t._v(" - You can change both of these to what ever suits you.")]),t._v(" "),s("h3",{attrs:{id:"tailstrom-quick-start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tailstrom-quick-start","aria-hidden":"true"}},[t._v("#")]),t._v(" Tailstrom (Quick Start)")]),t._v(" "),s("h4",{attrs:{id:"resolving-conflicts-with-multiple-tailwind-configs-and-laravel-mix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resolving-conflicts-with-multiple-tailwind-configs-and-laravel-mix","aria-hidden":"true"}},[t._v("#")]),t._v(" Resolving conflicts with multiple Tailwind configs and Laravel Mix")]),t._v(" "),s("p",[t._v("By default Tailwind doesn't need a config file published, it will use the defaults. This is what we use - but if your project has a Tailwind config then when you compile Maelstrom it will include your custom config instead.")]),t._v(" "),s("p",[t._v("To resolve this issue, we provide a standalone CSS compiler which just imports Tailwind and exports it to a file. You can either export this file and have Mix process it again e.g. to use "),s("code",[t._v("mix.version()")]),t._v(" or you can leave the file as it is.")]),t._v(" "),s("p",[t._v("To export the CSS you can run")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("npx tailstrom -o public/css/maelstrom.css\n")])])]),s("p",[t._v("You have 2 other additional options "),s("strong",[t._v("(type npx tailstrom --help for full listing)")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Pass in a custom Tailwind config")]),t._v("\nnpx tailstrom -c tailwind.backend.js\n")])])]),s("p",[t._v("You can also choose not to minify the CSS with")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Disable minification")]),t._v("\nnpx tailstrom --minify"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n")])])]),s("p",[t._v("Once your CSS has exported everything else should be as normal, you can leave the React entries within your Mix config.")])])},[],!1,null,null,null);a.default=i.exports}}]);