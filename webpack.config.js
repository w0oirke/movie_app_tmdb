import { resolve } from 'path';

export const entry = './src/index.js';
export const output = {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
};
export const module = {
    rules: [
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ],
        },
    ],
};
