"use strict";(self.webpackChunksenhasegura=self.webpackChunksenhasegura||[]).push([[1998],{1472:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"tutorial/tutorial","title":"Como configurar a autentica\xe7\xe3o por chave SSH no PuTTY","description":"Este tutorial oferece um guia passo a passo sobre como configurar a autentica\xe7\xe3o de sess\xe3o baseada em chave SSH no PuTTY.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/current/tutorial/tutorial.md","sourceDirName":"tutorial","slug":"/tutorial/","permalink":"/senhasegura/pt/docs/next/tutorial/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/tutorial.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Como instalar o OpenSSH no Windows 10/11","permalink":"/senhasegura/pt/docs/next/tutorial/openSSH"},"next":{"title":"Reference Docs","permalink":"/senhasegura/pt/docs/next/category/reference-docs"}}');var a=n(4848),o=n(8453);const t={},i="Como configurar a autentica\xe7\xe3o por chave SSH no PuTTY",c={},l=[{value:"Requisitos",id:"requisitos",level:2},{value:"Gerar a chave com o PuTTYgen",id:"gerar-a-chave-com-o-puttygen",level:2},{value:"Configurar a autentica\xe7\xe3o por chave SSH no PuTTY",id:"configurar-a-autentica\xe7\xe3o-por-chave-ssh-no-putty",level:2}];function u(e){const s={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"como-configurar-a-autentica\xe7\xe3o-por-chave-ssh-no-putty",children:"Como configurar a autentica\xe7\xe3o por chave SSH no PuTTY"})}),"\n",(0,a.jsx)(s.p,{children:"Este tutorial oferece um guia passo a passo sobre como configurar a autentica\xe7\xe3o de sess\xe3o baseada em chave SSH no PuTTY."}),"\n",(0,a.jsx)(s.h2,{id:"requisitos",children:"Requisitos"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://www.putty.org/",children:"PuTTY 0.81"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://www.putty.org/",children:"PuTTYgen 0.81"})}),"\n",(0,a.jsxs)(s.li,{children:["OpenSSH para Windows 10 (",(0,a.jsx)(s.a,{href:"/senhasegura/pt/docs/next/tutorial/openSSH",children:"como instalar?"}),")"]}),"\n",(0,a.jsx)(s.li,{children:"Windows 10/11 64-bit"}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"gerar-a-chave-com-o-puttygen",children:"Gerar a chave com o PuTTYgen"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["No PuTTYgen, clique em ",(0,a.jsx)(s.strong,{children:"Generate"})," na se\xe7\xe3o ",(0,a.jsx)(s.strong,{children:"Actions"}),"."]}),"\n",(0,a.jsx)(s.li,{children:"Mova o cursor sobre a janela do PuTTYgen para gerar uma chave baseada na aleatoriedade dos movimentos."}),"\n",(0,a.jsxs)(s.li,{children:["Na se\xe7\xe3o ",(0,a.jsx)(s.strong,{children:"Key"}),", insira uma frase de seguran\xe7a. Esta frase ser\xe1 usada posteriormente."]}),"\n",(0,a.jsxs)(s.li,{children:["Na se\xe7\xe3o ",(0,a.jsx)(s.strong,{children:"Actions"}),", clique em ",(0,a.jsx)(s.strong,{children:"Save private key"}),". Este passo salva a chave privada (.ppk)."]}),"\n",(0,a.jsxs)(s.li,{children:["Na se\xe7\xe3o ",(0,a.jsx)(s.strong,{children:"Key"}),", insira a chave p\xfablica do campo ",(0,a.jsx)(s.strong,{children:"Public key for pasting into OpenSSH authorized_keys file"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:["V\xe1 para ",(0,a.jsx)(s.code,{children:"C:\\User\\[YourUsername]\\.ssh\\"})," e insira a chave p\xfablica no arquivo ",(0,a.jsx)(s.strong,{children:"authorized_keys"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Importante:"})," A chave p\xfablica deve ser uma linha \xfanica contendo tr\xeas se\xe7\xf5es: ",(0,a.jsx)(s.code,{children:"ssh-rsa + key + rsa-key-[date]"}),"."]}),"\n",(0,a.jsx)(s.p,{children:"Se a pasta n\xe3o existir, abra o PowerShell e execute os seguintes comandos:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-text",children:"New-Item -ItemType Directory -Path C:\\Users\\[YourUsername]\\.ssh\r\nNew-Item -ItemType File -Path C:\\Users\\[YourUsername]\\.ssh\\authorized_keys\n"})}),"\n",(0,a.jsx)(s.h2,{id:"configurar-a-autentica\xe7\xe3o-por-chave-ssh-no-putty",children:"Configurar a autentica\xe7\xe3o por chave SSH no PuTTY"}),"\n",(0,a.jsxs)(s.ol,{start:"7",children:["\n",(0,a.jsxs)(s.li,{children:["No PuTTY, na se\xe7\xe3o ",(0,a.jsx)(s.strong,{children:"Basic options for your PuTTY session"}),", insira ",(0,a.jsx)(s.code,{children:"127.0.0.1"})," (o endere\xe7o IP para localhost) como o ",(0,a.jsx)(s.strong,{children:"Host Name (or IP Address)"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:["No painel ",(0,a.jsx)(s.strong,{children:"Category"})," \xe0 esquerda, v\xe1 para ",(0,a.jsx)(s.strong,{children:"Connection > SSH > Auth > Credentials"})," e selecione a chave privada do ",(0,a.jsx)(s.strong,{children:"passo 4"})," no campo ",(0,a.jsx)(s.strong,{children:"Private key file for authentication"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:["Clique ",(0,a.jsx)(s.strong,{children:"Open"})," para iniciar a sess\xe3o."]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["Uma janela de terminal abrir\xe1. Primeiro insira o seu ",(0,a.jsx)(s.strong,{children:"login"})," (seu nome de usu\xe1rio caso esteja usando OpenSSH), e pressione ",(0,a.jsx)(s.strong,{children:"Enter"}),".\r\nA janela mostrar\xe1 a mensagem ",(0,a.jsx)(s.em,{children:'Authenticating with public key "rsa-key-[date]"'}),".",(0,a.jsx)(s.br,{}),"\n","Ent\xe3o, insira a frase de seguran\xe7a do ",(0,a.jsx)(s.strong,{children:"passo 3"})," e pressione ",(0,a.jsx)(s.strong,{children:"Enter"}),".",(0,a.jsx)(s.br,{}),"\n","Por raz\xf5es de seguran\xe7a, a frase de seguran\xe7a n\xe3o \xe9 exibida enquanto o usu\xe1rio digita."]})]})}function d(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>i});var r=n(6540);const a={},o=r.createContext(a);function t(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);