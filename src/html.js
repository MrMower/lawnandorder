import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.error(e)
  }
}

const productionOnly = (fn) => (node) => ((process.env.NODE_ENV === 'production') ?  fn(node) : node);

const notJSKey = productionOnly(node =>!((node.key||"").substr(-3) === ".js"));

const googleAnalyticsOnly = productionOnly(node => !(node.type === "script" && node.key !== "gatsby-plugin-google-analytics"));


module.exports = (props) => {
    let css;
  //process.stdout.write(JSON.stringify(props.postBodyComponents,null,4));
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />


          { props.headComponents.filter(notJSKey) } 

          {css}

        </head>
        <body {...props.bodyAttributes}>
          {props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: props.body }}
          />

          { props.postBodyComponents.filter(googleAnalyticsOnly) }

        </body>
      </html>
    )
}
