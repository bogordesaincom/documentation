(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{236:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"installing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing","aria-hidden":"true"}},[t._v("#")]),t._v(" Installing")]),t._v(" "),a("p",[t._v("Maelstrom comes in 2 parts:")]),t._v(" "),a("ul",[a("li",[t._v("Laravel Toolkit - provided by Composer")]),t._v(" "),a("li",[t._v("React Components - provided by NPM")])]),t._v(" "),a("p",[t._v("You will need both of these to get started.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("composer require maelstrom/toolkit\n")])])]),a("p",[t._v("and")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i @maelstrom-cms/ui -D\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or with yarn")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @maelstrom-cms/ui -D\n")])])]),a("h2",{attrs:{id:"fresh-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fresh-install","aria-hidden":"true"}},[t._v("#")]),t._v(" Fresh Install")]),t._v(" "),a("p",[t._v("Once both components are installed you will need to register them in your application.")]),t._v(" "),a("h3",{attrs:{id:"javascript-css-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-css-components","aria-hidden":"true"}},[t._v("#")]),t._v(" Javascript & CSS Components")]),t._v(" "),a("p",[t._v("You are free to use what ever build/asset pipeline you like, however out of the box we use Laravel Mix.")]),t._v(" "),a("p",[t._v("Open your "),a("code",[t._v("webpack.mix.js")]),t._v(" file and make sure you include the following...")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Import Mix again - this time aliased, we need to keep this separate from your frontend `mix` instance.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" maelstrom "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'laravel-mix'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Imports our React Components")]),t._v("\nmaelstrom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("react")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@maelstrom-cms/ui/js/maelstrom.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'public/js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Compiles all our custom CSS")]),t._v("\nmix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postCss")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@maelstrom-cms/ui/css/maelstrom.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'public/css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tailwindcss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("When you now run "),a("code",[t._v("yarn run dev")]),t._v(" you should have a "),a("code",[t._v("maelstrom.css")]),t._v(" and "),a("code",[t._v("maelstrom.js")]),t._v(" inside your "),a("code",[t._v("public/js")]),t._v(" and "),a("code",[t._v("public/css")]),t._v(" folder.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("If you want to use a different output directory just make sure you update the "),a("code",[t._v("core_js_path")]),t._v(" and "),a("code",[t._v("core_css_path")]),t._v(" option in the "),a("code",[t._v("config/maelstrom.php")]),t._v(" later on.")])]),t._v(" "),a("h3",{attrs:{id:"php-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php-components","aria-hidden":"true"}},[t._v("#")]),t._v(" PHP Components")]),t._v(" "),a("p",[t._v("There is not much you need to do to set up the PHP side of things, you should however publish the config to change various things.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("php artisan vendor:publish --tag maelstrom-config\n")])])]),a("p",[t._v("If you're going to use the Media Manager then you'll need to run the migrations.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("php artisan db:migrate\n")])])]),a("h2",{attrs:{id:"adding-to-existing-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-to-existing-project","aria-hidden":"true"}},[t._v("#")]),t._v(" Adding to existing project")]),t._v(" "),a("p",[t._v("Just do the same as above!")])])},[],!1,null,null,null);s.default=n.exports}}]);