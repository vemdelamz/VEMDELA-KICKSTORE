import{a as S}from"/build/_shared/chunk-3H23E6KW.js";import"/build/_shared/chunk-2YAGQO5N.js";import{a as m}from"/build/_shared/chunk-CN5I25G2.js";import{a as i,d as h}from"/build/_shared/chunk-QO7Z5MOE.js";import{a as v}from"/build/_shared/chunk-VSKZFZU3.js";import"/build/_shared/chunk-NHUP5BFR.js";import{a as k,b as u,c as F}from"/build/_shared/chunk-XTVQEJHQ.js";import{l,r as Y}from"/build/_shared/chunk-LKWFDM4N.js";import{b as L}from"/build/_shared/chunk-IOELMSQY.js";import{d as a}from"/build/_shared/chunk-2LOM2E4Y.js";var q="/build/_assets/all-kicks-CBAYZJ74.png";var e=a(L()),M=({data:c})=>[{title:`VEM DE L\xC1\xAE  | ${c?.collection.title??""} Collection`}];function K(){let{collection:c}=Y();return(0,e.jsxs)("div",{className:"collection",children:[(0,e.jsxs)("div",{className:"banner-content-allproducts",children:[(0,e.jsx)("div",{className:"white-part"}),(0,e.jsx)("section",{className:"header-prducts",children:(0,e.jsx)("div",{children:(0,e.jsx)("div",{children:(0,e.jsxs)("div",{className:"bannerImg-content",children:[(0,e.jsx)("img",{src:q,alt:""}),(0,e.jsx)("a",{href:"#search-aside",children:(0,e.jsx)(h,{})})]})})})})]}),(0,e.jsx)(F,{connection:c.products,children:({nodes:s,isLoading:d,PreviousLink:t,NextLink:g})=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(R,{products:s}),(0,e.jsx)(g,{className:"load",children:d?"Loading...":(0,e.jsx)("span",{children:"Load more \u2193"})})]})})]})}function R({products:c}){let s=d=>{console.log(d.target.closest(".collection-filter-container").querySelector("ul")),d.target.closest(".collection-filter-container").classList.toggle("show")};return(0,e.jsxs)("div",{className:"product-all-content",children:[(0,e.jsx)("div",{className:"left-content",children:(0,e.jsxs)("div",{className:"filter-content",children:[(0,e.jsxs)("div",{className:"collection-filter-container",onClick:s,children:[(0,e.jsxs)("h3",{className:"toggle-item-filter",children:["MARCAS",(0,e.jsx)(i,{})]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:(0,e.jsx)(l,{to:"/collections/nike",children:"Nike"})}),(0,e.jsx)("li",{children:(0,e.jsx)(l,{to:"/collections/jordan",children:"Jordan"})}),(0,e.jsx)("li",{children:(0,e.jsx)(l,{to:"/collections/adidas",children:"Adidas"})}),(0,e.jsx)("li",{children:(0,e.jsx)(l,{to:"/collections/puma",children:"Puma"})}),(0,e.jsx)("li",{children:(0,e.jsx)(l,{to:"/collections/newbalance",children:"New Balance"})}),(0,e.jsx)("li",{children:(0,e.jsx)(l,{to:"/collections/lacoste",children:"Lacoste"})}),(0,e.jsx)("li",{children:(0,e.jsx)(l,{to:"/collections/timberland",children:"Timberland"})}),(0,e.jsx)("li",{children:(0,e.jsx)(l,{to:"/collections/reebok",children:"Reebok"})})]})]}),(0,e.jsxs)("div",{className:"collection-filter-container",onClick:s,children:[(0,e.jsxs)("h3",{className:"toggle-item-filter",children:["GENERO",(0,e.jsx)(i,{})]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:(0,e.jsx)(l,{to:"/collections/man",children:"Man"})}),(0,e.jsx)("li",{children:(0,e.jsx)(l,{to:"/collections/women",children:"Woman"})}),(0,e.jsx)("li",{children:(0,e.jsx)(l,{to:"/collections/kid",children:"Kid"})}),(0,e.jsx)("li",{children:(0,e.jsx)(l,{to:"/collections/unisex",children:"Unisex"})})]})]})]})}),(0,e.jsx)("div",{className:"right",children:(0,e.jsx)("div",{className:"card-container",children:c.map((d,t)=>(0,e.jsx)(V,{product:d,loading:t<8?"eager":void 0},d.id))})}),(0,e.jsx)(S,{})]})}function V({product:c,loading:s}){let d=c.variants.nodes[0],t=v(c.handle,d.selectedOptions);return(0,e.jsxs)(l,{className:"card-item-prod",prefetch:"intent",to:t,children:[c.featuredImage&&(0,e.jsx)(m.div,{whileHover:{scale:1.03},onHoverStart:g=>{},onHoverEnd:g=>{},children:(0,e.jsx)(u,{alt:c.featuredImage.altText||c.title,aspectRatio:"1/1",data:c.featuredImage,loading:s,className:"img-prod"})}),(0,e.jsx)("h4",{className:"title-prod",children:c.title}),(0,e.jsx)("p",{className:"description-content",children:c.description}),(0,e.jsx)("p",{className:"price",children:(0,e.jsx)(k,{data:c.priceRange.minVariantPrice})})]},c.id)}var N=`#graphql
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    handle
    title
    description
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
    variants(first: 1) {
      nodes {
        selectedOptions {
          name
          value
        }
      }
    }
  }
`;var n=`#graphql
  ${N}
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ProductItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          endCursor
          startCursor
        }
      }
    }
  }
`;export{K as default,M as meta};

