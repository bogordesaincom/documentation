(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{212:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"sidebar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sidebar","aria-hidden":"true"}},[t._v("#")]),t._v(" Sidebar")]),t._v(" "),e("p",[t._v("We provide a simple structured sidebar component for most generic use cases, which can be configured by an array. If you need a more customisable sidebar then read below on how to create your own.")]),t._v(" "),e("img",{staticClass:"shadow",attrs:{src:"/sidebar-preview.jpg",alt:"preview of the sidebar component."}}),t._v(" "),e("h2",{attrs:{id:"configuring"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuring","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuring")]),t._v(" "),e("p",[t._v("By default the Maelstrom sidebar component looks for a global sidebar variable called "),e("code",[t._v("$maelstrom_sidebar")]),t._v(".")]),t._v(" "),e("p",[t._v("You can easily define this by using Laravel's "),e("code",[t._v("View::share()")]),t._v(" method. You can place this in the "),e("code",[t._v("boot")]),t._v(" method of something like your "),e("code",[t._v("AppServiceProvider.php")]),t._v(".")]),t._v(" "),e("p",[t._v("The sidebar array structure follows that of:")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sidebar")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'link'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'unique_id_of_item'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'label'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'This is what the menu item says.'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'url'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'This is where the link goes to'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'icon'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'An optional icon'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Anything from https://ant.design/components/icon/ "outlined" collection')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'link'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'unique_id_of_item'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'label'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'This is what the menu item says.'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'url'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'This is where the link goes to'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'icon'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'An optional icon'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Anything from https://ant.design/components/icon/ "outlined" collection')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("You could globally share the above sidebar using")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("boot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    View"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("share")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'maelstrom_sidebar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Link'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'unique_id_of_item'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'label'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'This is what the menu item says.'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'url'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'This is where the link goes to'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'icon'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'An optional icon'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Anything from https://ant.design/components/icon/ "outlined" collection')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Link'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'unique_id_of_item'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'label'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'This is what the menu item says.'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'url'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'This is where the link goes to'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'icon'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'An optional icon'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Anything from https://ant.design/components/icon/ "outlined" collection')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"menu-item-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#menu-item-types","aria-hidden":"true"}},[t._v("#")]),t._v(" Menu Item Types")]),t._v(" "),e("p",[t._v("We use the Menu component provided by Ant Design "),e("a",{attrs:{href:"https://ant.design/components/menu/#components-menu-demo-inline",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ant.design/components/menu/#components-menu-demo-inline"),e("OutboundLink")],1),t._v(" which means we also have access to other "),e("code",[t._v("types")]),t._v(" such as...")]),t._v(" "),e("ul",[e("li",[t._v("Link")]),t._v(" "),e("li",[t._v("Group")]),t._v(" "),e("li",[t._v("SubMenu")]),t._v(" "),e("li",[t._v("HTML")]),t._v(" "),e("li",[t._v("Divider")]),t._v(" "),e("li",[t._v("Custom")])]),t._v(" "),e("h3",{attrs:{id:"link"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#link","aria-hidden":"true"}},[t._v("#")]),t._v(" Link")]),t._v(" "),e("p",[t._v("A link can be nested at any level of your menu and takes the following options...")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Property")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Example")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("id")]),t._v(" "),e("td",[t._v("A unique ID of the menu item")]),t._v(" "),e("td",[t._v("users")])]),t._v(" "),e("tr",[e("td",[t._v("label")]),t._v(" "),e("td",[t._v("The text to display")]),t._v(" "),e("td",[t._v("Users")])]),t._v(" "),e("tr",[e("td",[t._v("url")]),t._v(" "),e("td",[t._v("The href value")]),t._v(" "),e("td",[t._v("/admin/users")])]),t._v(" "),e("tr",[e("td",[t._v("icon")]),t._v(" "),e("td",[t._v("An optional icon from "),e("a",{attrs:{href:"https://ant.design/components/icon/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ant Icons"),e("OutboundLink")],1),t._v(' "outlined" collection')]),t._v(" "),e("td",[t._v("user")])])])]),t._v(" "),e("h3",{attrs:{id:"group"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#group","aria-hidden":"true"}},[t._v("#")]),t._v(" Group")]),t._v(" "),e("p",[t._v("A group of other menu items")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Property")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Example")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("id")]),t._v(" "),e("td",[t._v("A unique ID of the menu item")]),t._v(" "),e("td",[t._v("user_group")])]),t._v(" "),e("tr",[e("td",[t._v("label")]),t._v(" "),e("td",[t._v("The text to display")]),t._v(" "),e("td",[t._v("Users")])]),t._v(" "),e("tr",[e("td",[t._v("children")]),t._v(" "),e("td",[t._v("An array of other menu items")]),t._v(" "),e("td",[t._v("[]")])])])]),t._v(" "),e("h3",{attrs:{id:"submenu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#submenu","aria-hidden":"true"}},[t._v("#")]),t._v(" SubMenu")]),t._v(" "),e("p",[t._v("A group of other menu items which can be collapsed")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Property")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Example")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("id")]),t._v(" "),e("td",[t._v("A unique ID of the menu item")]),t._v(" "),e("td",[t._v("user_menu")])]),t._v(" "),e("tr",[e("td",[t._v("label")]),t._v(" "),e("td",[t._v("The text to display")]),t._v(" "),e("td",[t._v("Users")])]),t._v(" "),e("tr",[e("td",[t._v("icon")]),t._v(" "),e("td",[t._v("An optional icon from "),e("a",{attrs:{href:"https://ant.design/components/icon/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ant Icons"),e("OutboundLink")],1),t._v(' "outlined" collection')]),t._v(" "),e("td",[t._v("user")])]),t._v(" "),e("tr",[e("td",[t._v("children")]),t._v(" "),e("td",[t._v("An array of other menu items")]),t._v(" "),e("td",[t._v("[]")])])])]),t._v(" "),e("h3",{attrs:{id:"html"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML")]),t._v(" "),e("p",[t._v("Add some custom HTML into a menu item.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Property")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Example")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("id")]),t._v(" "),e("td",[t._v("A unique ID of the menu item")]),t._v(" "),e("td",[t._v("custom_html")])]),t._v(" "),e("tr",[e("td",[t._v("html")]),t._v(" "),e("td",[t._v("HTML to render")]),t._v(" "),e("td",[e("strong",[t._v("Some HTML")])])])])]),t._v(" "),e("h3",{attrs:{id:"divider"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#divider","aria-hidden":"true"}},[t._v("#")]),t._v(" Divider")]),t._v(" "),e("p",[t._v("Adds a single divider between items")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Property")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Example")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("id")]),t._v(" "),e("td",[t._v("A unique ID of the menu item")]),t._v(" "),e("td",[t._v("my_divider")])])])]),t._v(" "),e("h3",{attrs:{id:"custom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom","aria-hidden":"true"}},[t._v("#")]),t._v(" Custom")]),t._v(" "),e("p",[t._v("You can also render custom React components, anything which has been imported into the Component Registry will be available.")]),t._v(" "),e("p",[t._v("Any properties you pass in will be set as props on the component.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Property")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Example")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("id")]),t._v(" "),e("td",[t._v("A unique ID of the menu item")]),t._v(" "),e("td",[t._v("custom_item")])]),t._v(" "),e("tr",[e("td",[t._v("component")]),t._v(" "),e("td",[t._v("The name of the React component that has been registered")]),t._v(" "),e("td",[t._v("QuickJumpBar")])])])]),t._v(" "),e("h2",{attrs:{id:"using-your-own-sidebar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-your-own-sidebar","aria-hidden":"true"}},[t._v("#")]),t._v(" Using Your Own Sidebar")]),t._v(" "),e("p",[t._v("If what we've provided doesnt meet your requirements, you can create your own sidebar.")]),t._v(" "),e("p",[t._v("You just need to create a blade file which will get loaded instead of our sidebar.")]),t._v(" "),e("p",[t._v("We use the normal Laravel waterfall views which means our sidebar which is located in...")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("vendor/maelstrom/toolkit/src/views/partials/sidebar.blade.php\n")])])]),e("p",[t._v("to overwrite it you must create a...")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("resources/views/vendor/maelstrom/partials/sidebar.blade.php\n")])])])])},[],!1,null,null,null);s.default=a.exports}}]);