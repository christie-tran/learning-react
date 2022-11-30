import { Route, Routes, Link, Outlet } from "react-router-dom";

// React Router DOM version 6
const Welcome = () => {
  return (
    <>
      <h1>Welcome to the page</h1>
      <Link to='new-user'>New User</Link>
        {/* <Route path='/welcome/new-user' element={<p>Welcome, new user!</p>} /> */}
        {/* An alternative way to create the nested route */}
      <Outlet />
    </>
  )
}

// React Router DOM version 5
// const Welcome = () => {
//   return (
//     <>
//       <h1>Welcome to the page</h1>
//       <Route path='/welcome/new-user'>
//         <p>Welcome, new user!</p>
//       </Route>
//     </>
//   )
// }

export default Welcome;
