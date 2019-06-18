const purgecss = require('@fullhuman/postcss-purgecss')
const glob = require('glob-all')
const path = require('path')

module.exports = {
    title: 'Maelstrom',
    description: 'Maelstrom CMS Toolkit for Laravel and React',
    plugins: ['@vuepress/active-header-links'],
    postcss: {
        plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
        ].filter(i => i)
    },
    themeConfig: {
        sidebarDepth: 2,
        logo: '/maelstrom-icon.svg',
        repo: 'maelstrom-cms/toolkit',
        repoLabel: 'GitHub',
        docsRepo: 'maelstrom-cms/documentation',
        displayAllHeaders: true,
        sidebar: [
            {
                title: 'Getting Started',
                collapsable: false,
                children: [
                    '/getting-started/installing'
                ]
            },
            {
                title: 'Usage',
                collapsable: false,
                children: [
                    '/usage/edit-profile',
                    '/usage/header',
                    '/usage/media-manager',
                    '/usage/sidebar',
                ]
            },
            {
                title: 'Examples',
                collapsable: false,
                children: [
                    ['/examples/blog-post', 'Blog Post']
                ]
            }
        ]
    }
};
