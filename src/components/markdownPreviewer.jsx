import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ReactMarkdown from 'react-markdown';

function MarkdownPreviewer({input}) {
  return (
    <div className="preview-ta" id="new-preview-ta">
                {/* a copy paste from syntax-highlighter repo probably checks for 3 backticks and adds styles to it just guessing*/}
                <ReactMarkdown 
                    style={{ whiteSpace: 'pre-wrap' }}
                    children={input}
                    components={{
                        code({node, inline, className, children, ...props}) {
                          const match = /language-(\w+)/.exec(className || '')
                          return !inline && match ? (
                            <SyntaxHighlighter
                              children={String(children).replace(/\n$/, '')}
                              style={docco}
                              language={match[1]}
                              PreTag="div"
                              id="syntax-pre-div"
                              {...props}
                            />
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          )
                        }
                      }}
                /> {/*Markdown preview using syntax highlighting component*/}

            </div>
  )
}

export default MarkdownPreviewer