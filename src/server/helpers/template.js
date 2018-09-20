import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';

const htmlTemplate = (reactDom, reduxState) => {
  const helmet = Helmet.renderStatic();
  return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Offensive Game</title>
            <link rel="stylesheet" type="text/css" href="/main.css">
            <link rel="icon" href="favicon.ico" type="image/x-icon"/>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
            ${helmet.title}
            ${helmet.meta}
            ${helmet.link}
        </head>
        <body>
            <div id="app">${reactDom}</div>
            <script>
                window.REDUX_DATA = ${serialize(reduxState)}
            </script>
            <script src="/client.bundle.js"></script>
        </body>
    </html>
`;
};

export default htmlTemplate;
