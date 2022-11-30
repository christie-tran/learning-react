import { Route, Switch, Redirect, Routes, Navigate } from 'react-router-dom';

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
          <Route path='/' element={<Navigate replace to='/welcome' />} />
          {/* <Route path='/welcome' element={<Welcome />} /> */}
          {/* An alternative way to create the nested route */}
          <Route path='/welcome/*' element={<Welcome />}>
            <Route path='new-user' element={<p>Welcome, new user!</p>} />
          </Route>
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
//           {/*Use redirect route  */}
//           <Route path='/' exact >
//             <Redirect to='/welcome' />
//           </Route>
//           <Route path='/welcome' component={Welcome} />
//           <Route path='/products' exact component={Products} />
//           <Route path='/products/:productId' component={ProductDetail} />
//         </Switch>
//       </main>
//     </div>
//   );
// }

export default App;
