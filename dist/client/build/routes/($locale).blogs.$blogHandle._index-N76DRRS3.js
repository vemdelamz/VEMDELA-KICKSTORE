import{b as d,c as u}from"/build/_shared/chunk-XTVQEJHQ.js";import{l as r,r as s}from"/build/_shared/chunk-LKWFDM4N.js";import{b as g}from"/build/_shared/chunk-IOELMSQY.js";import{d as l}from"/build/_shared/chunk-2LOM2E4Y.js";var t=l(g()),c=({data:e})=>[{title:`Hydrogen | ${e?.blog.title??""} blog`}];function m(){let{blog:e}=s(),{articles:a}=e;return(0,t.jsxs)("div",{className:"blog",children:[(0,t.jsx)("h1",{children:e.title}),(0,t.jsx)("div",{className:"blog-grid",children:(0,t.jsx)(u,{connection:a,children:({nodes:o,isLoading:n,PreviousLink:b,NextLink:h})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b,{children:n?"Loading...":(0,t.jsx)("span",{children:"\u2191 Load previous"})}),o.map((i,p)=>(0,t.jsx)(f,{article:i,loading:p<2?"eager":"lazy"},i.id)),(0,t.jsx)(h,{children:n?"Loading...":(0,t.jsx)("span",{children:"Load more \u2193"})})]})})})]})}function f({article:e,loading:a}){let o=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(new Date(e.publishedAt));return(0,t.jsx)("div",{className:"blog-article",children:(0,t.jsxs)(r,{to:`/blogs/${e.blog.handle}/${e.handle}`,children:[e.image&&(0,t.jsx)("div",{className:"blog-article-image",children:(0,t.jsx)(d,{alt:e.image.altText||e.title,aspectRatio:"3/2",data:e.image,loading:a,sizes:"(min-width: 768px) 50vw, 100vw"})}),(0,t.jsx)("h3",{children:e.title}),(0,t.jsx)("small",{children:o})]})},e.id)}export{m as default,c as meta};

