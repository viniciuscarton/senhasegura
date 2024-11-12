"use strict";(self.webpackChunksenhasegura=self.webpackChunksenhasegura||[]).push([[121],{7027:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"Reference/reference","title":"SSH key-based authentication feature","description":"This article provides details about the components related to the SSH key-based authentication feature in PuTTY (version 0.81) and the PuTTYgen interface.","source":"@site/versioned_docs/version-1.0/Reference/reference.md","sourceDirName":"Reference","slug":"/Reference/","permalink":"/docs/Reference/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/Reference/reference.md","tags":[],"version":"1.0","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Reference Docs","permalink":"/docs/category/reference-docs"},"next":{"title":"Explanation Docs","permalink":"/docs/category/explanation-docs"}}');var i=s(4848),r=s(8453);const d={},o="SSH key-based authentication feature",a={},c=[{value:"PuTTY (version 0.81)",id:"putty-version-081",level:2},{value:"Session",id:"session",level:3},{value:"Credentials",id:"credentials",level:3},{value:"PuTTYgen (version 0.81)",id:"puttygen-version-081",level:2},{value:"Key",id:"key",level:3},{value:"Actions",id:"actions",level:3},{value:"Parameters",id:"parameters",level:3}];function l(e){const t={h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"ssh-key-based-authentication-feature",children:"SSH key-based authentication feature"})}),"\n",(0,i.jsx)(t.p,{children:"This article provides details about the components related to the SSH key-based authentication feature in PuTTY (version 0.81) and the PuTTYgen interface."}),"\n",(0,i.jsx)(t.p,{children:"Only the relevant fields are covered. If a field is not covered, assume its default setting is sufficient for a regular authentication process."}),"\n",(0,i.jsx)(t.h2,{id:"putty-version-081",children:"PuTTY (version 0.81)"}),"\n",(0,i.jsxs)(t.p,{children:["PuTTY is an open-source terminal emulator. After executing it, the program displays the configuration window.\r\nOn the left side of it, the ",(0,i.jsx)(t.strong,{children:"Category"})," field allows users to navigate through all settings."]}),"\n",(0,i.jsx)(t.h3,{id:"session",children:"Session"}),"\n",(0,i.jsx)(t.p,{children:"This section specifies the basic options for a PuTTY session"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Path"}),(0,i.jsx)(t.th,{children:"Default Value"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Host Name (or IP Address)"})}),(0,i.jsx)(t.td,{children:"Session"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"Specifies the server's host name or IP Address for the SSH connection. This is the address PuTTY will connect to."})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"credentials",children:"Credentials"}),"\n",(0,i.jsx)(t.p,{children:"This section specifies the location for the private key used for authentication."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Path"}),(0,i.jsx)(t.th,{children:"Default Value"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Private key file for authentication"})}),(0,i.jsx)(t.td,{children:"Connection > SSH > Auth > Credentials"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"Specifies a private key file (.ppk) for SSH authentication."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"puttygen-version-081",children:"PuTTYgen (version 0.81)"}),"\n",(0,i.jsx)(t.p,{children:"The PuTTY Key Generator (or PuTTYgen) is part of the PuTTY program. It allows users to create public and private keys for SSH authentication in PuTTY."}),"\n",(0,i.jsx)(t.h3,{id:"key",children:"Key"}),"\n",(0,i.jsxs)(t.p,{children:["This section displays the public key once it is generated. It is located at the top of the window, and the default value is ",(0,i.jsx)(t.strong,{children:"No key"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"actions",children:"Actions"}),"\n",(0,i.jsx)(t.p,{children:"This section displays all main features associated with SSH keys. It is located in the middle of the window."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Button"}),(0,i.jsx)(t.th,{children:"Function"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Generate"}),(0,i.jsx)(t.td,{children:"Generates a key pair. A progress bar appears, and the user must move the cursor over the window to generate the keys based on the randomness of the movement."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Load"}),(0,i.jsxs)(t.td,{children:["Loads a private key file ",(0,i.jsx)(t.strong,{children:"(.ppk)"})," stored on the device. A file explorer window appears for selection."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Save public key/Save private key"}),(0,i.jsxs)(t.td,{children:["Saves the generated key to a specific location. Public keys are saved as ",(0,i.jsx)(t.strong,{children:"All Files"})," type, while private keys are saved as ",(0,i.jsx)(t.strong,{children:".ppk"})," files."]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(t.p,{children:"This section displays parameters for key generation. It is located at the bottom of the window. It is possible to select the type of key and the number of bits/curve."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Type of key to generate:"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RSA"}),(0,i.jsx)(t.td,{children:"Default option. The most common key type for SSH systems. The default number of bits is 2048. Larger keys provide more security, but also demand more processing time."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DSA, ECDSA, EdDSA"}),(0,i.jsx)(t.td,{children:"Alternative types of keys with different requirements."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SSH-1(RSA)"}),(0,i.jsx)(t.td,{children:"Legacy option."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>o});var n=s(6540);const i={},r=n.createContext(i);function d(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);