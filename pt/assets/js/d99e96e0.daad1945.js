"use strict";(self.webpackChunksenhasegura=self.webpackChunksenhasegura||[]).push([[8822],{8007:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"Reference/reference","title":"Autentica\xe7\xe3o baseada em chave SSH","description":"Este artigo aborda os elementos relacionados \xe0 autentica\xe7\xe3o baseada em chave SSH do PuTTY (vers\xe3o 0.81) e \xe0 interface do PuTTYgen.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-1.0/Reference/reference.md","sourceDirName":"Reference","slug":"/Reference/","permalink":"/senhasegura/pt/docs/Reference/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/Reference/reference.md","tags":[],"version":"1.0","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Reference Docs","permalink":"/senhasegura/pt/docs/category/reference-docs"},"next":{"title":"Explanation Docs","permalink":"/senhasegura/pt/docs/category/explanation-docs"}}');var o=s(4848),n=s(8453);const t={},i="Autentica\xe7\xe3o baseada em chave SSH",d={},c=[{value:"PuTTY (vers\xe3o 0.81)",id:"putty-vers\xe3o-081",level:2},{value:"Session",id:"session",level:3},{value:"Credentials",id:"credentials",level:3},{value:"PuTTYgen (vers\xe3o 0.81)",id:"puttygen-vers\xe3o-081",level:2},{value:"Key",id:"key",level:3},{value:"Actions",id:"actions",level:3},{value:"Parameters",id:"parameters",level:3}];function l(e){const a={h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.header,{children:(0,o.jsx)(a.h1,{id:"autentica\xe7\xe3o-baseada-em-chave-ssh",children:"Autentica\xe7\xe3o baseada em chave SSH"})}),"\n",(0,o.jsx)(a.p,{children:"Este artigo aborda os elementos relacionados \xe0 autentica\xe7\xe3o baseada em chave SSH do PuTTY (vers\xe3o 0.81) e \xe0 interface do PuTTYgen."}),"\n",(0,o.jsx)(a.p,{children:"Apenas os campos relevantes s\xe3o abordados. Se um campo n\xe3o for abordado, assume-se que o seu valor padr\xe3o \xe9 suficiente para um processo de autentica\xe7\xe3o comum."}),"\n",(0,o.jsx)(a.h2,{id:"putty-vers\xe3o-081",children:"PuTTY (vers\xe3o 0.81)"}),"\n",(0,o.jsxs)(a.p,{children:["PuTTY \xe9 um emulador de c\xf3digo aberto. Ao ser aberto, o programa mostra a tela de configura\xe7\xe3o.\r\n\xc0 esquerda, o campo ",(0,o.jsx)(a.strong,{children:"Category"})," permite aos usu\xe1rios explorar as configura\xe7\xf5es."]}),"\n",(0,o.jsx)(a.h3,{id:"session",children:"Session"}),"\n",(0,o.jsx)(a.p,{children:"Esta se\xe7\xe3o especifica as op\xe7\xf5es b\xe1sicas para uma sess\xe3o no PuTTY."}),"\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{children:"Campo"}),(0,o.jsx)(a.th,{children:"Caminho"}),(0,o.jsx)(a.th,{children:"Valor Padr\xe3o"}),(0,o.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(a.tbody,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:(0,o.jsx)(a.strong,{children:"Host Name (or IP Address)"})}),(0,o.jsx)(a.td,{children:"Session"}),(0,o.jsx)(a.td,{children:"Nenhum"}),(0,o.jsx)(a.td,{children:"Especifica o host name ou endere\xe7o de IP do servidor para a conex\xe3o SSH. Este \xe9 o endere\xe7o ao qual PuTTY se conectar\xe1."})]})})]}),"\n",(0,o.jsx)(a.h3,{id:"credentials",children:"Credentials"}),"\n",(0,o.jsx)(a.p,{children:"Esta se\xe7\xe3o especifica a localiza\xe7\xe3o da chave privada para a autentica\xe7\xe3o."}),"\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{children:"Campo"}),(0,o.jsx)(a.th,{children:"Caminho"}),(0,o.jsx)(a.th,{children:"Valor Padr\xe3o"}),(0,o.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(a.tbody,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:(0,o.jsx)(a.strong,{children:"Private key file for authentication"})}),(0,o.jsx)(a.td,{children:"Connection > SSH > Auth > Credentials"}),(0,o.jsx)(a.td,{children:"Nenhum"}),(0,o.jsx)(a.td,{children:"Especifica a chave privada (.ppk) para a autentica\xe7\xe3o."})]})})]}),"\n",(0,o.jsx)(a.h2,{id:"puttygen-vers\xe3o-081",children:"PuTTYgen (vers\xe3o 0.81)"}),"\n",(0,o.jsx)(a.p,{children:"O Gerador de Chaves PuTTY (ou PuTTYgen) faz parte do programa PuTTY. Ele permite que os usu\xe1rios criem chaves p\xfablicas e privadas para autentica\xe7\xe3o SSH no PuTTY."}),"\n",(0,o.jsx)(a.h3,{id:"key",children:"Key"}),"\n",(0,o.jsxs)(a.p,{children:["Esta se\xe7\xe3o mostra a chave p\xfablica quando gerada. A se\xe7\xe3o est\xe1 localizada na parte superior da janela, e o valor padr\xe3o \xe9 ",(0,o.jsx)(a.strong,{children:"No key"}),"."]}),"\n",(0,o.jsx)(a.h3,{id:"actions",children:"Actions"}),"\n",(0,o.jsx)(a.p,{children:"Esta se\xe7\xe3o, localizada no meio da janela, exibe as principais a\xe7\xf5es relacionadas \xe0s chaves SSH."}),"\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{children:"Bot\xe3o"}),(0,o.jsx)(a.th,{children:"Fun\xe7\xe3o"})]})}),(0,o.jsxs)(a.tbody,{children:[(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Generate"}),(0,o.jsx)(a.td,{children:"Gera um par de chaves. Uma barra de progresso aparece, e o usu\xe1rio deve mover o cursor pela janela para gerar as chaves a partir da aleatoriedade do movimento."})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Load"}),(0,o.jsxs)(a.td,{children:["Carrega uma chave privada ",(0,o.jsx)(a.strong,{children:"(.ppk)"})," localizada no dispositivo. Uma janela de explora\xe7\xe3o de arquivos aparece para a sele\xe7\xe3o da chave."]})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Save public key/Save private key"}),(0,o.jsxs)(a.td,{children:["Salva a chave gerada no dispositivo. Chaves p\xfablicas s\xe3o salvas como um arquivo do tipo  ",(0,o.jsx)(a.strong,{children:"All Files"}),", enquanto chaves privadas s\xe3o salvas como arquivos ",(0,o.jsx)(a.strong,{children:".ppk"}),"."]})]})]})]}),"\n",(0,o.jsx)(a.h3,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsx)(a.p,{children:"Esta se\xe7\xe3o, localizada na parte inferior da janela, exibe os par\xe2metros para a gera\xe7\xe3o de chave. \xc9 poss\xedvel selecionar o tipo de chave e o n\xfamero de bits/curva."}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.strong,{children:"Type of key to generate:"})}),"\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{children:"Tipo"}),(0,o.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(a.tbody,{children:[(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"RSA"}),(0,o.jsx)(a.td,{children:"Valor padr\xe3o. Este \xe9 o tipo de chave mais comum para sistemas SSH. O valor padr\xe3o de bits \xe9 2048. Chaves maiores oferecem mais seguran\xe7a, mas demandam mais poder de processamento."})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"DSA, ECDSA, EdDSA"}),(0,o.jsx)(a.td,{children:"Tipos de chave alternativos com requisitos diversos."})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"SSH-1(RSA)"}),(0,o.jsx)(a.td,{children:"Op\xe7\xe3o legado."})]})]})]})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,a,s)=>{s.d(a,{R:()=>t,x:()=>i});var r=s(6540);const o={},n=r.createContext(o);function t(e){const a=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);