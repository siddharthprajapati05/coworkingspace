import Footer from "../components/Footer/footer"
import Navbar from "../components/Navbar/navbar"
import Register from "../components/SignUp/SignUp"

function SignUp(){
  return (
    <>
    <div className="h-screen w-screen">
      <div><Navbar /></div>
      <div><Register /></div>
     
     
      <Footer />
    </div>
    </>
  )
}

export default SignUp