import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierHeathDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'

function MarkdownPreviewer({input}) {
  return (
    <div className="preview-ta" >
                {/* a copy paste from syntax-highlighter repo probably checks for 3 backticks and adds styles to it just guessing*/}
                <ReactMarkdown 
                    remarkPlugins={[remarkGfm,remarkBreaks]}
                    children={input}
                    components={{
                        code({node, inline, className, children, ...props}) {
                          const match = /language-(\w+)/.exec(className || '')
                          return !inline && match ? (
                            <SyntaxHighlighter
                              showLineNumbers
                              children={String(children).replace(/\n$/, '')}
                              style={atelierHeathDark}
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