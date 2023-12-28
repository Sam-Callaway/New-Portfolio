import Navbar from "./components/navbar/Navbar"

export default function Home() {
  return (
  <main>
    <div className="bg-secondary glass flex justify-center relative z-50">
      <div className='grow max-w-screen-lg'>
      <Navbar></Navbar>
      </div>
    </div>
    <div className='flex justify-center relative'>   
      <section id="aboutme" className="pl-2 grow max-w-screen-lg">
        <div className="hero bg-base-100 pt-8">
          <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <h1 className="text-4xl font-bold">Hi,</h1>
                <h1 id='mynameis' className="text-4xl font-bold">my name is Sam Callaway.</h1>
                <br></br>
                <br></br>
                <h1 className="text-4xl font-bold">I am full stack web developer and UX designer</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
          </div>
        </div>
      </section>
    </div>
  </main>
    )
}
