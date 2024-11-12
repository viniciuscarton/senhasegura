"use strict";(self.webpackChunksenhasegura=self.webpackChunksenhasegura||[]).push([[2546],{7029:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"tutorial/tutorial","title":"How to set up SSH key-based authentication in PuTTY","description":"This tutorial provides a step-by-step guide on how to set up SSH key-based authentication in PuTTY.","source":"@site/docs/tutorial/tutorial.md","sourceDirName":"tutorial","slug":"/tutorial/","permalink":"/senhasegura/docs/next/tutorial/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/tutorial.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"How to install OpenSSH on Windows 10/11","permalink":"/senhasegura/docs/next/tutorial/openSSH"},"next":{"title":"Reference Docs","permalink":"/senhasegura/docs/next/category/reference-docs"}}');var i=t(4848),r=t(8453);const o={},a="How to set up SSH key-based authentication in PuTTY",l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Generate a key using PuTTYgen",id:"generate-a-key-using-puttygen",level:2},{value:"Set up SSH key-based authentication in PuTTY",id:"set-up-ssh-key-based-authentication-in-putty",level:2}];function h(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"how-to-set-up-ssh-key-based-authentication-in-putty",children:"How to set up SSH key-based authentication in PuTTY"})}),"\n",(0,i.jsx)(n.p,{children:"This tutorial provides a step-by-step guide on how to set up SSH key-based authentication in PuTTY."}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.putty.org/",children:"PuTTY 0.81"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.putty.org/",children:"PuTTYgen 0.81"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows 10/11 64-bit"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"generate-a-key-using-puttygen",children:"Generate a key using PuTTYgen"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["In PuTTYgen, click ",(0,i.jsx)(n.strong,{children:"Generate"})," in the ",(0,i.jsx)(n.strong,{children:"Actions"})," section."]}),"\n",(0,i.jsx)(n.li,{children:"Move the mouse over PuTTYgen's window to generate the key based on random mouse movement."}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Key"})," section, fill in a passphrase. This passphrase will be required later."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Actions"})," section, click ",(0,i.jsx)(n.strong,{children:"Save private key"}),". This step will save a PuTTY Private Key file ",(0,i.jsx)(n.strong,{children:"(.ppk)"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Key"})," section, copy the long public key from the ",(0,i.jsx)(n.strong,{children:"Public key for pasting into OpenSSH authorized_keys file"})," field."]}),"\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.code,{children:"C:\\User\\[YourUsername]\\.ssh\\"})," and paste the public key into the ",(0,i.jsx)(n.strong,{children:"authorized_keys"})," file."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Important:"})," The public key should be a single line consisting of three sections: ",(0,i.jsx)(n.code,{children:"ssh-rsa + key + rsa-key-[date]"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"If the folder does not exist, open PowerShell and type the following commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"New-Item -ItemType Directory -Path C:\\Users\\[YourUsername]\\.ssh\r\nNew-Item -ItemType File -Path C:\\Users\\[YourUsername]\\.ssh\\authorized_keys\n"})}),"\n",(0,i.jsx)(n.h2,{id:"set-up-ssh-key-based-authentication-in-putty",children:"Set up SSH key-based authentication in PuTTY"}),"\n",(0,i.jsxs)(n.ol,{start:"7",children:["\n",(0,i.jsxs)(n.li,{children:["In PuTTY, in the ",(0,i.jsx)(n.strong,{children:"Basic options for your PuTTY session"})," section, enter ",(0,i.jsx)(n.code,{children:"127.0.0.1"})," (the loopback IP address for localhost) as the ",(0,i.jsx)(n.strong,{children:"Host Name (or IP Address)"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Category"})," section on the left, go to ",(0,i.jsx)(n.strong,{children:"Connection > SSH > Auth > Credentials"})," and select the private key from ",(0,i.jsx)(n.strong,{children:"step 4"})," in the ",(0,i.jsx)(n.strong,{children:"Private key file for authentication"})," field."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Open"})," to start the session."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["A pop-up window will appear. First enter your ",(0,i.jsx)(n.strong,{children:"login"})," (your username if your using OpenSSH), and press ",(0,i.jsx)(n.strong,{children:"Enter"}),".\r\nThe window will display the message ",(0,i.jsx)(n.em,{children:'Authenticating with public key "rsa-key-[date]"'}),".",(0,i.jsx)(n.br,{}),"\n","Then, enter the passphrase from ",(0,i.jsx)(n.strong,{children:"step 3"})," and press ",(0,i.jsx)(n.strong,{children:"Enter"}),".",(0,i.jsx)(n.br,{}),"\n","For security, the passphrase will not be displayed as you type."]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);