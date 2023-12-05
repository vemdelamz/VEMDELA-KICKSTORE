import {Await, useLoaderData, Link} from '@remix-run/react';
import {Suspense} from 'react';
import Allkicks from '../src/assets/images/all-kicks.png'

import {defer, json} from '@shopify/remix-oxygen';
import {Pagination, getPaginationVariables, Image, Money} from '@shopify/hydrogen';

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({context, request}) {
  const {storefront} = context;
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 4,
  });
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);

  const {collections} = await context.storefront.query(COLLECTIONS_QUERY, {
    variables: paginationVariables,
  });

  return defer({collections, recommendedProducts});
}

export default function Collections() {
  /** @type {LoaderReturnData} */
  const {collections} = useLoaderData();

  return (
    <div className="collections">
       <div className='banner-content'>
          <div className='white-part'>
            
          </div>
            <section className='header-prducts'>
              <div>
                <div>
             
                    <div className='bannerImg-content'>
                      <img src={Allkicks} alt=""/>  
                    </div>
                    <div className='input-group'>
                      <div>
                      <i class="ri-search-line"></i>
                      </div>
                      <input 
                        type='seach'
                        className='input-search'
                        placeholder='Procure seu sneaker aqui'
                      /> 
                    </div>
                
                </div>
              </div>
            </section>
         
          
        </div>
      <Pagination connection={collections}>
        {({nodes, isLoading, PreviousLink, NextLink}) => (
          <div>
            <PreviousLink>
              {isLoading ? 'Loading...' : <span>↑ Load previous</span>}
            </PreviousLink>
            <CollectionsGrid collections={nodes} />
            <NextLink>
              {isLoading ? 'Loading...' : <span>Load more ↓</span>}
            </NextLink>
          </div>
        )}
      </Pagination>
    </div>
  );
}

/**
 * @param {{collections: CollectionFragment[]}}
 */
function CollectionsGrid({collections, children = null}) {
  const data = useLoaderData();
  return (
   <section>
        <div className='product-content'>
            <div className='left'>
              <div className="filter">
              {collections.map((collection, index) => (
                <CollectionItem
                  key={collection.id}
                  collection={collection}
                  index={index}
                />
                ))}
              </div>
          </div>
          <div className='right'>
            <div className='product-list'>
              <RecommendedProducts products={data.recommendedProducts} />
            </div>
          </div>
        </div>
   </section>
  );
}
function RecommendedProducts({products}) {
  return (
    <div className="content-products">
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {({products}) => (
            <div className="product-grid">
              {products.nodes.map((product) => (
                <Link
                  key={product.id}
                  className="product-card"
                  to={`/products/${product.handle}`}
                >
                  <Image
                    data={product.images.nodes[0]}
                    aspectRatio="1/1"
                    className='img-prod'
                  />
                  <h4 className='title-product'>{product.title}</h4>
                  <p className='desc'>{product.description}</p>
              
                  <small className='price-product'>
                    <Money  data={product.priceRange.minVariantPrice} />
                  </small>
                </Link>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}
/**
 * @param {{
 *   collection: CollectionFragment;
 *   index: number;
 * }}
 */
function CollectionItem({collection, index}) {
  return (
    <Link
      className="collection-item"
      key={collection.id}
      to={`/collections/${collection.handle}`}
      prefetch="intent"
    >
      <h5>{collection.title}</h5>
    </Link>
  );
}

const COLLECTIONS_QUERY = `#graphql
  fragment Collection on Collection {
    id
    title
    handle
    image {
      id
      url
      altText
      width
      height
    }
  }
  query StoreCollections(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    collections(
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...Collection
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    description
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('storefrontapi.generated').CollectionFragment} CollectionFragment */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
