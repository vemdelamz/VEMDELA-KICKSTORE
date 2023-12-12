import {json, redirect} from '@shopify/remix-oxygen';
import {useLoaderData, Link} from '@remix-run/react';
import {
  Pagination,
  getPaginationVariables,
  Image,
  Money,
} from '@shopify/hydrogen';
import {useVariantUrl} from '~/utils';

import Allkicks from '../src/assets/images/all-kicks.png'
import { FiSearch } from "react-icons/fi";
import {FiChevronRight}  from "react-icons/fi";

/**
 * @type {MetaFunction<typeof loader>}
 */
export const meta = ({data}) => {
  return [{title: `Hydrogen | ${data?.collection.title ?? ''} Collection`}];
};

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({request, params, context}) {
  const {handle} = params;
  const {storefront} = context;
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 8,
  });

  if (!handle) {
    return redirect('/collections');
  }

  const {collection} = await storefront.query(COLLECTION_QUERY, {
    variables: {handle, ...paginationVariables},
  });

  if (!collection) {
    throw new Response(`Collection ${handle} not found`, {
      status: 404,
    });
  }
  return json({collection});
}

export default function Collection() {
  /** @type {LoaderReturnData} */
  const {collection} = useLoaderData();

  return (
    <div className="collection">
       <div className='banner-content-allproducts'>
          <div className='white-part'>
            
          </div>
            <section className='header-prducts'>
              <div>
                <div>
             
                    <div className='bannerImg-content'>
                      <img src={Allkicks} alt=""/> 
                      <a href="#search-aside">
                        <FiSearch/>  
                      </a> 
                    </div>
                 
                
                </div>
              </div>
            </section>
         
          
        </div>
      <Pagination connection={collection.products}>
        {({nodes, isLoading, PreviousLink, NextLink}) => (
          <>
            <PreviousLink>
              {isLoading ? 'Loading...' : <span>↑ Load previous</span>}
            </PreviousLink>
            <ProductsGrid products={nodes} />
          
            <NextLink>
              {isLoading ? 'Loading...' : <span>Load more ↓</span>}
            </NextLink>
          </>
        )}
      </Pagination>
    </div>
  );
}

/**
 * @param {{products: ProductItemFragment[]}}
 */
function ProductsGrid({products}) {
    const onClickShort = event =>{
    console.log(event.target.closest('.collection-filter-container').querySelector('ul'))

    event.target.closest('.collection-filter-container').classList.toggle('show')
    
}
  return (
    <div className='product-all-content'>
      <div className='left-content'>
          <div className='filter-content'>
            <div className='collection-filter-container' onClick={onClickShort}>
              <h3 className='toggle-item-filter'>
                MARCAS
                <FiChevronRight />
              </h3>
              <ul>
                <li><Link to="/collections/nike">Nike</Link></li>
                <li><Link to="/collections/jordan">Jordan</Link></li>
                <li><Link to="/collections/adidas">Adidas</Link></li>
                <li><Link to="/collections/puma">Puma</Link></li>
                <li><Link to="/collections/converse">Converse</Link></li>
                <li><Link to="/collections/vans">Vans</Link></li>
                <li><Link to="/collections/newbalance">New Balance</Link></li>
                <li><Link to="/collections/lacoste">Lacoste</Link></li>
                <li><Link to="/collections/veja">Veja</Link></li>
                <li><Link to="/collections/timberland">Timberland</Link></li>
                <li><Link to="/collections/reebok">Reebok</Link></li>


              </ul>
            </div>
            <div className='collection-filter-container' onClick={onClickShort}>
              <h3 className='toggle-item-filter'>
                GENERO
                <FiChevronRight />
              </h3>
              <ul>
                <li to="/collections/man">Man</li>
                <li to="/collections/woman">Woman</li>
              </ul>
            </div>
            
          </div>

      </div>

      <div className='right'>
        <div className="products-grid">
        {products.map((product, index) => {
          return (
            <ProductItem
              key={product.id}
              product={product}
              loading={index < 8 ? 'eager' : undefined}
            />
          );
        })}
      </div>
      </div>
  
    </div>
  );
}

/**
 * @param {{
 *   product: ProductItemFragment;
 *   loading?: 'eager' | 'lazy';
 * }}
 */
function ProductItem({product, loading}) {
  const variant = product.variants.nodes[0];
  const variantUrl = useVariantUrl(product.handle, variant.selectedOptions);
  return (
    <Link
      className="product-item"
      key={product.id}
      prefetch="intent"
      to={variantUrl}
    >
      {product.featuredImage && (
        <Image
          alt={product.featuredImage.altText || product.title}
          aspectRatio="1/1"
          data={product.featuredImage}
          loading={loading}

        />
      )}
      <h4 className='title-product'>{product.title}</h4>
      <p className='desc-detail'>{product.description}</p>
      <p className='price-product'>
        <Money data={product.priceRange.minVariantPrice} />
      </p>
    </Link>
  );
}
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

/**
 * @param {{collections: CollectionFragment[]}}
 */



const PRODUCT_ITEM_FRAGMENT = `#graphql
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
`;



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

// NOTE: https://shopify.dev/docs/api/storefront/2022-04/objects/collection
const COLLECTION_QUERY = `#graphql
  ${PRODUCT_ITEM_FRAGMENT}
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
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').ProductItemFragment} ProductItemFragment */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
/** @typedef {import('storefrontapi.generated').CollectionFragment} CollectionFragment */
