// 'default' theme.

module.exports = {
    // defaultTheme dependencies
    Color: require('color'),
    ReactBootstrap: require('react-bootstrap'),
    Markdown: require('react-remarkable'),

    SnapPage: require('./snapsitepage.jsx'),
    Breadcrumbs: require('./breadcrumbs.jsx'),

    HorizontalMenuBar: require('./horzmenubar.jsx'),
    HorizontalMenuItem: require('./horzmenuitem.jsx'),

    SnapHeader: require('./snapheader.jsx'),

    RouteHashLink: require('./routehashlink.jsx'),
    RouteLink: require('./routelink.jsx'),
    ExternalLink: require('./externallink.jsx'),

    Sitemap: require('./sitemap.jsx'),

    Copyright: require('./copyright.jsx'),
    SnapBug: require('./snapsitebug.jsx'),

    MissingContentRender: require('./missing-content-render.jsx')
};
