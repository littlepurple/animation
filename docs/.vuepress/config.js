module.exports = {
    base: '/vuepress-proj/', // 默认
    title: '三角函数在动画中的应用',
    description: '三角函数在动画中的应用',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }]
    ],
    host: '0.0.0.0', // 默认
    post: 8080, // 默认
    // temp:
    dest: '_site', // 默认
    // locales:
    // shouldPrefetch:
    cache: true, // 默认
    // theme:
    themeConfig: {
        repo: 'https://github.com/littlepurple/animation',
        // sidebarDepth: 1,
        // displayAllHeaders: true,
        // activeHeaderLinks: false,
        navbar: true,
        locales: {
            '/': {
                nav: [{
                    text: '三角函数',
                    link: '/tang/'
                },{
                    text: '更多',
                    link: '/more/'
                }],
                sidebar: {
                    '/tang/': [
                        ['', '三角函数'], {
                            title: '常见应用场景',
                            collapsable: false,
                            children: [
                                'libai/',
                                'dufu/',
                            ]
                        },
                    ],
                }
            },
            '/en/': {
                nav: [{
                    text: 'More',
                    link: '/en/more/'
                }],
                sidebar: {
                    '/en/tang/': [
                        ['', 'Introduction'], {
                            title: 'Representative',
                            collapsable: false,
                            children: [
                                'libai/',
                                'dufu/',
                            ]
                        }
                    ],
                }
            }
        }
    },
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '三角函数在动画中的应用',
            description: '静态站点 三角函数在动画中的应用'
        },
        '/en/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'Appreciation of poetry',
            description: 'Static Site Appreciation of poetry'
        }
    },
    // plugins:
    markdown: {
        lineNumbers: true, // 行号
        // slugify: 
        anchor: {
            permalink: true,
            permalinkBefore: true,
            permalinkSymbol: '#'
        },
        externalLinks: {
            target: '_blank',
            rel: 'noopener noreferrer'
        },
        toc: {
            includeLevel: [2, 3]
        },
        plugins: []
        // extendMarkdown:
    },
    editLinkText: '在 GitHub 上编辑此页',
    postcss: {
        plugins: [require('autoprefixer')]
    },
    stylus: {
        preferPathResolver: 'webpack'
    },
    scss: {},
    sass: {
        indentedSyntax: true
    },
    less: {},
    // configureWebpack:
    // chainWebpack:
    evergreen: false, // 默认
}