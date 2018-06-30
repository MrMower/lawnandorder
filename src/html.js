import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

const notJSKey = node =>!((node.key||"").substr(-3) === ".js")


const googleAnalyticsOnly = node => !(node.type === "script" && node.key !== "gatsby-plugin-google-analytics")


module.exports = class HTML extends React.Component {
  render() {
    let css;
    process.stdout.write(JSON.stringify(this.props.postBodyComponents,null,4));
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          {/* this.props.headComponents */}

          { this.props.headComponents.filter(notJSKey) } 

          {css}

        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          { /*this.props.postBodyComponents.filter(googleAnalyticsOnly)*/ }

          { this.props.postBodyComponents.filter(googleAnalyticsOnly) }

        </body>
      </html>
    )
  }
}
