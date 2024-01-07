import {useLoaderData, Link} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';
import {Pagination, getPaginationVariables, Image} from '@shopify/hydrogen';
import Vans from '../src/assets/images/vans-banner.png'
import '../styles/collection.css'
import {FiChevronRight}  from "react-icons/fi";
/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({context, request}) {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 4,
  });

  const {collections} = await context.storefront.query(COLLECTIONS_QUERY, {
    variables: paginationVariables,
  });

  return json({collections});
}

export default function Collections() {
  /** @type {LoaderReturnData} */
  const {collections} = useLoaderData();

  return (
    <div className="collections">
      <h1>Collections</h1>
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
function CollectionsGrid({collections}) {
  const onClickShort = event =>{
    console.log(event.target.closest('.collection-filter-container').querySelector('ul'))

    event.target.closest('.collection-filter-container').classList.toggle('show')
    
}
  return (
  <section className='product-collection-content'>
    <div className='filtro-collectioln'>
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
     <section className='card-container'>
      <div className='card-item-prod'>
        <img  className="img-prod" src={Vans}/>
        <div className='card-detail'>
          <h3 className='card-title'>Shoe</h3>
          <p className='description-content'>
            Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Alias sapiente, doloribus 
            eos cumque ab a? Harum est nam praesentium? 
          </p>
        </div>
        <div className='price'>
          <del>13 900 MZN</del>12500 MZN 
        </div>
      </div>
      
   </section>
  </section>
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
      {collection?.image && (
        <Image
          alt={collection.image.altText || collection.title}
          aspectRatio="1/1"
          data={collection.image}
          loading={index < 3 ? 'eager' : undefined}
        />
      )}
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

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('storefrontapi.generated').CollectionFragment} CollectionFragment */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
