module.exports = {
    docs: [
        {
            type: 'category',
            label: 'Guides',
            link: {
                type: 'generated-index',
                title: 'Guides',
                slug: '/guides',
                keywords: ['guides'],
            },
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'guides',
                },
            ],
        },
        {
            type: 'category',
            label: 'Examples',
            link: {
                type: 'generated-index',
                title: 'Examples',
                slug: '/examples',
                keywords: ['examples'],
            },
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'examples',
                },
            ],
        },
    ],
};