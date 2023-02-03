import Login from './account/Login'
import Register from './account/Register'
import NewProject from './file/NewProject'
import OpenProject from './file/OpenProject'
import SaveProject from './file/SaveProject'
import About from './help/About'


export function MenuItem () {

  return(
    <>
      <NewProject />
      <SaveProject />
      <OpenProject />

      <About />

      <Login />
      <Register />

    </>
  )
}

