/* eslint-disable import/order */
const path = require('path')

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions

    if (page.path.match(/^\/job-description/)) {
        page.matchPath = '/job-description/*'

        // Update the page.
        createPage(page)
    }
}

const StylelintPlugin = require('stylelint-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const style_lint_options = {
    files: 'src/**/*.js',
    emitErrors: false,
    lintDirtyModulesOnly: true,
}

exports.onCreateWebpackConfig = ({ actions, getConfig }, { ...options }) => {
    const config = getConfig()
    if (config.optimization) {
        config.optimization.minimizer = [new TerserPlugin()]
    }
    actions.setWebpackConfig({
        plugins: [new StylelintPlugin({ ...style_lint_options, ...options })],
        resolve: {
            alias: {
                react: 'preact/compat',
                'react-dom/test-utils': 'preact/test-utils',
                'react-dom': 'preact/compat',
                'react/jsx-runtime': 'preact/jsx-runtime',
            },
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
    })
}
