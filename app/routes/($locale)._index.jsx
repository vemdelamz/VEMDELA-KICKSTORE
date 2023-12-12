import {defer} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import HeaderSection from '~/src/Pages/HeaderSection';
import ScrollGif from '~/components/ScrollGif';
import UILayout from '~/components/UI';
import GifScroll from '~/components/ScrollGif';
import FriendlyPayment from '~/src/Pages/FriendlyPayment ';

import BlogPosts from '~/components/Blog';
import Newsletter from '~/components/Newslatter';

import Banner from '../src/assets/images/dunk.png'
/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{title: 'VEM DE LÁ® | Home'}];
};

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({context}) {
  const {storefront} = context;
  const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY);
  const featuredCollection = collections.nodes[0];
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);

  return defer({featuredCollection, recommendedProducts});
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  return (
   <>
   <UILayout/>
   
    <div className="home">

      <RecommendedProducts products={data.recommendedProducts} />
      <GifScroll/>
      <FeaturedCollection collection={data.featuredCollection} />
      <div className='sec-payment'>
      <FriendlyPayment/>
      </div>
      
      <BlogPosts/>
      <Newsletter/>
    </div>
    
   </>
  );
}

/**
 * @param {{
 *   collection: FeaturedCollectionFragment;
 * }}
 */
function FeaturedCollection({collection}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <>
    <section>
    <h2 className='title'>LANÇAMENTOS</h2>
   
      <div className='banner-content-promo'>
        <Link
          className="img-content"
          to={`/collections/${collection.handle}`}
        >
          <img src={Banner}/>
  
      </Link>
    </div>
    </section>
    </>
  );
}

/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery>;
 * }}
 */
function RecommendedProducts({products}) {
  return (
    <div className="recommended-products">
      <h2 className='title-sneaker'>Sneakers</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          
          {({products}) => (
        
            <div className="recommended-products-grid">
              {products.nodes.map((product) => (
                <Link
                  key={product.id}
                  className="recommended-product"
                  to={`/products/${product.handle}`}
                >
                  <Image
                    data={product.images.nodes[0]}
                    aspectRatio="1/1"
                    className='img-prod'
                  />
                  <h4 className='title-product'>{product.title}</h4>
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

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
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
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
