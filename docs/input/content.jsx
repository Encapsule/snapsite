const snaprt = require('./__snaprt.jsx');
const React = snaprt.react;
const theme = snaprt.reactTheme;
const Sitemap = theme.Sitemap;
const SnapHeader = theme.SnapHeader;
const ExternalLink = theme.ExternalLink;
const RouteLink = theme.RouteLink;

module.exports = React.createClass({
    render: function() {
        const repoTitle = "Encapsule/snapsite v" + this.props.generator.agent.version;
        const repoTooltip = "View project source code on GitHub...";
        const repoTarget = "https://github.com/Encapsule/snapsite";

        const inputTitle = "project's ./doc directory";
        const inputTooltip = "View generator input directory sources...";
        const inputTarget = "https://github.com/Encapsule/snapsite/tree/master/docs";

        return (<div>
                <SnapHeader {...this.props} heading="welcome to snapsite" size={1} />
                <p>Encapsule/snapsite is an experimental command line tool for compiling React JS websites
                {' '}from configuration files that's being developed to reduce the time/effort required to build
                {' '}sophisticated documentation portals for technical projects.</p>

                <p><strong>pre-release:</strong> {this.props.generator.agent.name} v{this.props.generator.agent.version}
                {' '}is not ready for prime time. There are still a number of sigificant features still
                to be implemented (e.g. the generated Node.js server) and quite a bit of churn is expected here over the
                coming months.</p>

                <p>Please follow <ExternalLink {...this.props} target="https://twitter.com/Encapsule" tooltip="Please follow @Encapsule on Twitter..." title="@Encapsule" /> on Twitter for news and updates.</p>

                <SnapHeader {...this.props} heading="what are you looking at?" size={2} />
                <p>What you're looking at now is a simple test site built with the
                {' '}<ExternalLink {...this.props} target={repoTarget} tooltip={repoTooltip} title={repoTitle} />
                {' '}website generator tool for Node.js.
                </p>


                <p>The tool runtime reads configuration and JSX modules from a local filesystem clone of your project repository, generates the site, and writes the output back to the local filesystem.</p>

                <p>You can look at the input sources for <i>this</i> website in the <ExternalLink {...this.props} target={inputTarget} tooltip={inputTooltip} title={inputTitle} />.</p>

                <p>And, you can inspect the current client-side application generated by this process by visiting the
                {' '}<ExternalLink {...this.props} target="https://github.com/Encapsule/snapsite/tree/gh-pages" tooltip="Browse generator output files on GitHub..." title="project's #gh-pages branch" />.</p>

                <p>To learn more, please read the tool runtime <RouteLink {...this.props} route='/about/overview' /> that explains the set of tasks automated.</p>

                <SnapHeader {...this.props} heading="sitemap" size='2' />
                <p>Having the page graph automatically fed into each page and accessible via the
                {' '}<ExternalLink {...this.props} target="https://github.com/Encapsule/jsgraph" tooltip="Encapsule/jsgraph on GitHub..." title="Encapsule/jsgraph API" />
                {' '}is handy for building sitemaps, menus, and as the basis for all manner of application-specific state.</p>
                <Sitemap {...this.props} routeHash={this.props.page.primaryRouteHash} />
                </div>
               );
    }
});

