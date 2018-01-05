import React from 'react';
import NextHead from 'next/head';
import PropTypes from 'prop-types'

const defaultDescription = '';
const defaultOgURL = '';
const defaultOgImage = '';

export default function Head({
    title,
    description,
    url,
    ogImage
}) {
    return (
        <NextHead>
            <title>{title || ''}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
            <link rel="apple-touch-icon" href="/static/touch-icon.png" />
            <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
            <link rel="icon" href="/static/favicon.ico" />
            <meta property="og:url" content={url || defaultOgURL} />
            <meta property="og:title" content={title || ''} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta name="twitter:site" content={url || defaultOgURL} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={ogImage || defaultOgImage} />
            <meta property="og:image" content={ogImage || defaultOgImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
        </NextHead>
    )
};

Head.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    ogImage: PropTypes.string,
};
