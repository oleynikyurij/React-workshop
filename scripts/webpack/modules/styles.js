// Core
import imports from 'postcss-import';
import mqpacker from 'css-mqpacker';
import fontSmoothing from 'postcss-font-smoothing';
import modules from 'postcss-icss-selectors';
import reporter from 'postcss-reporter';
import env from 'postcss-preset-env';
import gradients from 'postcss-easing-gradients';
import cssnano from 'cssnano';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// Constants
import { SOURCE } from '../constants';

export const loadPostCSS = () => ({
    loader:  'postcss-loader',
    options: {
        ident:   'postcss',
        plugins: (loader) => {
            return [
                imports({
                    getPath:        SOURCE,
                    skipDuplicates: true,
                }),
                modules({
                    mode: loader.resourcePath.includes('.m.css')
                        ? 'local'
                        : 'global',
                }),
                env({
                    stage: 0,
                }),
                gradients(),
                fontSmoothing(),
                mqpacker(),
                reporter(),
                cssnano(),
            ];
        },
        sourceMap: true,
    },
});

export const loadDevelopmentCss = () => ({
    module: {
        rules: [
            {
                test:    /\.css$/,
                include: [ SOURCE, /node_modules/ ],
                use:     [
                    {
                        loader:  'style-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader:  'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    loadPostCSS(),
                ],
            },
        ],
    },
});

export const loadProductionCss = () => ({
    module: {
        rules: [
            {
                test:    /\.css$/,
                include: [ SOURCE, /node_modules/ ],
                use:     [ MiniCssExtractPlugin.loader, 'css-loader', loadPostCSS() ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:      'css/[contenthash].[hash:5].css',
            chunkFilename: 'css/[contenthash].[hash:5].css',
        }),
    ],
});
