import React from 'react'
import MarkdownPreviewer from '../components/markdownPreviewer';


function How() {
  
    const orderedList = `
    1. List Item 1 
    2. List Item 2 
    3. List Item 3
    `;
  
    const unOrderedList1 = `
    * List Item 1 
    * List Item 2 
    * List Item 3
    `;
  
    const unOrderedList2 = `
    - List Item 1 
    - List Item 2 
    - List Item 3
    `;
  
    const nestedList = `
    1. OL item 1
       * UL item 1.1
       * UL item 1.2
       * UL item 1.3
    2. OL item 2
       * UL item 2.1
       * UL item 2.2
       * UL item 2.3
    `;
  
    const codeBlock = `${"```javascript"}
    function myCode(){
        var a = 5;
    }
    `;
  
    const blockQuote = `
    > Blockquote
    `;
    
  
    return (
      <div className="how-page">
        <center><h1>A Quick Guide to Markdown [Not Responsive]</h1></center>
  
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Element</th>
              <th>Markdown Syntax</th>
              <th>Rendered by React-Markdown</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Heading 1 </td>
              <td># Heading 1</td>
              <td>
              <MarkdownPreviewer input='# Heading 1'/>
              </td>
            </tr>
            <tr>
              <td>Heading 2 </td>
              <td>## Heading 2</td>
              <td>
                <MarkdownPreviewer input='## Heading 2'/>
              </td>
            </tr>
            <tr>
              <td>Heading 3 </td>
              <td>### Heading 3</td>
              <td>
                <MarkdownPreviewer input='### Heading 3' />
              </td>
            </tr>
            <tr>
              <td>Heading 4 </td>
              <td>#### Heading 4</td>
              <td>
                <MarkdownPreviewer input='#### Heading 4' />
              </td>
            </tr>
            <tr>
              <td>Heading 5 </td>
              <td>##### Heading 5</td>
              <td>
              <MarkdownPreviewer input='##### Heading 5'/>
              </td>
            </tr>
            <tr>
              <td>Heading 6 </td>
              <td>###### Heading 6</td>
              <td><MarkdownPreviewer input='###### Heading 6'/>
              </td>
            </tr>
            <tr>
              <td>Bold </td>
              <td>**Bold**</td>
              <td>
                <MarkdownPreviewer input='**Bold**'/>
              </td>
            </tr>
            <tr>
              <td>Italics</td>
              <td>*Italics*</td>
              <td>
                <MarkdownPreviewer input='*italics*'/>
              </td>
            </tr>
            <tr>
              <td>Ordered List</td>
              <td>
                1. List Item 1<br />
                2. List Item 2<br />
                3. List Item 3
              </td>
              <td style={{ textAlign: "left" }}>
                <MarkdownPreviewer input={orderedList} />
              </td>
            </tr>
            <tr>
              <td>Unordered List</td>
              <td>
                (Using *)
                <br />
                <br />
                * List Item 1<br />
                * List Item 2<br />
                * List Item 3<br />
                <br />
                (Using -)
                <br />
                <br />
                - List Item 1<br />
                - List Item 2<br />
                - List Item 3<br />
              </td>
              <td style={{ textAlign: "left" }}>
                {"(Using *)"}
                <MarkdownPreviewer input={unOrderedList1} />
                {"(Using -)"}
                <MarkdownPreviewer input={unOrderedList2} />
              </td>
            </tr>
            <tr>
              <td>Inline Code</td>
              <td>`Code`</td>
              <td>
                <MarkdownPreviewer input='`Code`'/>
              </td>
            </tr>
            <tr>
              <td>Code Block</td>
              <td style={{ textAlign: "left" }}>
                ```javascript
                <br />
                {"function myCode(){"} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"var a = 5;"} <br />
                {"}"} <br />
                ```
              </td>
              <td style={{ textAlign: "left" }}>
                <MarkdownPreviewer input={codeBlock} />
              </td>
            </tr>
            <tr>
              <td>Horizontal Rule</td>
              <td>---</td>
              <td>
                <MarkdownPreviewer input='---'/>
              </td>
            </tr>
            <tr>
              <td>Blockquote</td>
              <td style={{ textAlign: "left" }}>&gt; Blockquote</td>
              <td>
                <MarkdownPreviewer input='>blockQuote' />
              </td>
            </tr>
            <tr>
              <td>Link</td>
              <td style={{ textAlign: "left" }}>[title](https://example.com)</td>
              <td>
                <MarkdownPreviewer input='[title](https://example.com)'/>
              </td>
            </tr>
            <tr>
              <td>Image</td>
              <td style={{ textAlign: "left" }}>
                ![alt_text](https://example.com/image.jpg)
              </td>
              <td>
                <MarkdownPreviewer input=
                  '![title](https://i.pinimg.com/736x/9d/f9/c5/9df9c574dd573821ee7850a87cdeac43.jpg)'/>
               
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}



export default How

    