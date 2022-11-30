import { Route, Routes } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

// React Router DOM version 6
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}


// React Router DOM version 5
// function App() {
//   return (
//     <div>
//       <MainHeader />
//       <main>
//         <Switch>
//           <Route path='/welcome'>
//             <Welcome />
//           </Route>
//           <Route path='/products' exact>
//             <Products />
//           </Route>
//           <Route path='/products/:productId'>
//             <ProductDetail />
//           </Route>
//         </Switch>
//       </main>
//     </div>
//   );
// }

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
