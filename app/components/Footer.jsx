import {NavLink} from '@remix-run/react';
import {useRootLoaderData} from '~/root';
import Facebook from '../src/assets/icons/facebook.png'
import Instagram from '../src/assets/icons/instagram.png'
import TikTok from '../src/assets/icons/tiktok.png'
import Line from '../src/assets/images/line.png'
import LogoFooter from '../src/assets/logo/LogoWHTAG.png'

/**
 * @param {FooterQuery & {shop: HeaderQuery['shop']}}
 */
export function Footer({menu, shop}) {
  return (
    <section>
      <img className='line' src={Line} alt='vemdela-line'/>
      <footer className="footer">
        
        <div className='footer-content'>
          <div className='midia-content'>
            <h3 className='title-footer'>Siga-nos</h3>
            <div>
              <a>
              <img src={Instagram} alt="Instagram"/>
              </a>
              <a>
              <img src={TikTok} alt="Tiktok"/>
              </a>
              <a>
              <img src={Facebook} alt="Facebook"/>
              </a>
            </div>
            <p>
              <span>atendimento@vemdela.com</span><br></br>
              Rua fulano de tal, 145 | Maputo - MB
            </p>
          </div>
          <div className='logo-content'>
            <img src={LogoFooter} alt="vemdela"/>
          </div>
          <div className='links'>
            <ul>
              <li>
                <a href='/policies/contact'>FALE CONOSCO |</a>
              </li>
              <li>
                <a href='/policies/privacy-policy'>POLITICA DE PRIVACIDADE |</a>
              </li>
              <li>
              <a href='/policies/shipping-policy'>DÚVIDAS FREQUENTES |</a>
              </li>
              <li>
              <a href='/policies/terms-of-service'>POLITICAS DE USO |</a>
              </li>
            </ul>
            
          </div> 
        </div>
      </footer>
    </section>
  );
}

/**
 * @param {{
 *   menu: FooterQuery['menu'];
 *   primaryDomainUrl: HeaderQuery['shop']['primaryDomain']['url'];
 * }}
 */
function FooterMenu({menu, primaryDomainUrl}) {
  const {publicStoreDomain} = useRootLoaderData();

  return (
    <nav className="footer-menu" role="navigation">
      {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
        if (!item.url) return null;
        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        const isExternal = !url.startsWith('/');
        return isExternal ? (
          <a href={url} key={item.id} rel="noopener noreferrer" target="_blank">
            {item.title}
          </a>
        ) : (
          <NavLink
            end
            key={item.id}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
      items: [],
    },
  ],
};

/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'white',
  };
}

/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
