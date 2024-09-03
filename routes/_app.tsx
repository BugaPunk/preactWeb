import { type PageProps } from "$fresh/server.ts";
import Apps from '../islands/App.jsx';
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>webPreact</title>
        <link rel="stylesheet" href="/styles.css" />
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Carlito:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        </style>
      </head>
      <body className={"font-carlito"}>
        <Apps />
      </body>
    </html>
  );
}