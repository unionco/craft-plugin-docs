// var craftdocs = require('vuepress-theme-craftdocs');

module.exports = {
    theme: 'craftdocs',
    // ga: 'UA-39036834-9',
    // base: '/v3/',
    base: '/craft-plugin-docs/',
    // shouldPrefetch: () => false,
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Union Craft Plugins',
        }
    },
    themeConfig: {
        docsRepo: 'unionco/craft-plugin-docs',
        docsDir: 'docs',
        docsBranch: 'develop',
        editLinks: true,
        searchMaxSuggestions: 10,
        // locales: {
        //     '/': require('./config-en'),
        // },
        nav: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'Craft SyncDB',
                link: '/craft-sync-db/'
            },
            {
                text: 'Calendarize',
                link: '/calendarize/'
            },
            {
                text: 'SyncDB',
                link: '/syncdb/'
            },
            {
                text: 'Ticketmaster',
                link: '/ticketmaster/'
            },
            {
                text: 'UNION',
                link: 'https://www.union.co/'
            }
        ],
        sidebar: {
            '/craft-sync-db/': [
                '', /* /craft-sync-db/ */
            ],
            '/syncdb/': [
                '',
            ],
            '/calendarize/': [
                '',
            ],
            '/ticketmaster/': [
                '',
            ],
            // fallback
            '/': [
                '',
            ]
        },
        codeLanguages: {
            twig: 'Twig',
            php: 'PHP',
        }
    },
    markdown: {
        anchor: {
            level: [2, 3, 4]
        },
        toc: {
            format(content) {
                return content.replace(/[_`]/g, '')
            }
        },
        config(md) {
            md
                // .use(replaceApiLinks)
                .use(require('vuepress-theme-craftdocs/markup'))
                .use(require('markdown-it-deflist'))
                // .use(require('markdown-it-imsize'))
        }
    },
}

// function replaceApiLinks(md) {
//     // code adapted from the markdown-it-replace-link plugin
//     md.core.ruler.after(
//         'inline',
//         'replace-link',
//         function (state) {
//             state.tokens.forEach(function (blockToken) {
//                 if (blockToken.type === 'inline' && blockToken.children) {
//                     blockToken.children.forEach(function (token, tokenIndex) {
//                         if (token.type === 'link_open') {
//                             token.attrs.forEach(function (attr) {
//                                 if (attr[0] === 'href') {
//                                     let replace = replaceApiLink(attr[1]);
//                                     if (replace) {
//                                         attr[1] = replace;
//                                         let next = blockToken.children[tokenIndex+1];
//                                         if (next.type === 'text') {
//                                             next.content = next.content.replace(/^(api|config):/, '');
//                                         }
//                                     }
//                                 }
//                                 return false;
//                             });
//                         }
//                     });
//                 }
//             });
//             return false;
//         }
//     );
// }

// function replaceApiLink(link) {
//     link = decodeURIComponent(link)
//     let m = link.match(/^(?:api:)?\\?([\w\\]+)(?:::\$?(\w+)(\(\))?)?(?:#([\w\-]+))?$/)
//     if (m) {
//         let className = m[1]
//         let subject = m[2]
//         let isMethod = typeof m[3] !== 'undefined'
//         let hash = m[4]

//         if (className.match(/^craft\\/) || className.match(/^Craft/)) {
//             let url = 'https://docs.craftcms.com/api/v3/'+className.replace(/\\/g, '-').toLowerCase()+'.html'
//             if (subject) {
//                 hash = ''
//                 if (isMethod) {
//                     hash = 'method-'
//                 }
//                 hash += subject.replace(/_/g, '-').toLowerCase()
//             }
//             return url + (hash ? `#${hash}` : '');
//         }

//         if (className.match(/^yii\\/) || className.match(/^Yii/)) {
//             let url = 'https://www.yiiframework.com/doc/api/2.0/'+className.replace(/\\/g, '-').toLowerCase()
//             if (subject) {
//                 hash = (isMethod ? `${subject}()` : `\$${subject}`)+'-detail'
//             }
//             return url + (hash ? `#${hash}` : '');
//         }
//     }

//     m = link.match(/^config:(.+)/)
//     if (m) {
//         return '/config/config-settings.md#'+m[1].toLowerCase()
//     }
// }
