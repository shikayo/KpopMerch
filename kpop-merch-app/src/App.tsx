import React from 'react';
//import { Product } from './components/Product';
import { products } from './prods/products';

import Header, { HeaderProps } from './components/Header';
import Body from './components/Body';

// build an instance of our AppHeaderProps to pass to the AppHeader component
const headerProps: HeaderProps = {
  title: '&&&?',
  links: [
    {
      label: 'Main',
      route: '???',
    },
    {
      label: 'Marketplace',
      route: '???',
    },
    {
      label: 'Profile',
      route: '???',
    },
    {
      label: 'Cart',
      route: '???',
    },
  ],
};

function App() {
  return (
    <main className='App'>
      <Header 
        title={headerProps.title}
        links={headerProps.links}
      />
      <Body contentsource='./root/btsconcert1'/>
    </main>
  );
}

export default App;
