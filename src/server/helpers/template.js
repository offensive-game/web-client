import serialize from 'serialize-javascript';

const htmlTemplate = (reactDom, reduxState) => {
  return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
            <link rel="stylesheet" type="text/css" href="bundles/main.css">
        </head>
        <body>
            <div id="app">${reactDom}</div>
            <script>
                window.REDUX_DATA = ${serialize(reduxState)}
            </script>
            <script src="./bundles/client-bundle.js"></script>
        </body>
    </html>
`;
};

export default htmlTemplate;
