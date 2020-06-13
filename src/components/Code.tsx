/* eslint react/jsx-boolean-value: 0 */
/* eslint no-unused-vars: 0 */
/* eslint react/prop-types: 0 */
/* eslint react/destructuring-assignment: 0 */
import Highlight, {defaultProps} from 'prism-react-renderer';
import React from 'react';
import {LiveEditor, LiveError, LivePreview, LiveProvider} from 'react-live';

/* eslint-disabled */
const Code = ({
  codeString,
  language,
  ...props
}: {
  codeString: JSX.Element;
  language: string;
  props: [JSX.Element];
}): JSX.Element => {
  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  } else {
    return (
      <Highlight {...defaultProps} code={codeString} language={language}>
        {({className, style, tokens, getLineProps, getTokenProps}): JSX.Element => (
          <div className="gatsby-highlight" data-language={language}>
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({line, key: i})}>
                  {line.map((token, key) => (
                    <span key={i} {...getTokenProps({token, key})} />
                  ))}
                </div>
              ))}
            </pre>
          </div>
        )}
      </Highlight>
    );
  }
};

export default Code;
