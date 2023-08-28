import React from 'react'

export default function page() {
  return (
    <>
      <main className='' style={{ backgroundImage: 'url(bgg.jpg ) ', backgroundSize: 'cover' }}>
        <div className="h-screen" style={{ backgroundImage: 'url(./bg1.jpg)', backgroundSize: 'cover' }}>
        </div>
        <div className="container">
          <div className="row">
            <div className="col text-center py-10">
              <div className='text-5xl py-5 font-bold'>Yashah Media The Digital Agency</div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className='text-justify fs-5'>Welcome to Yashah Media, a provider of digital solutions committed to assisting organisations in achieving their objectives via unique and imaginative approaches. Our company name, Yashah, translates to “fame and success” in Sanskrit, and we think that these two concepts sum up what any company should be striving for. We are dedicated to assisting our clients in achieving this aim with our knowledge of digital marketing and website construction.
                The highly experienced individuals that make up our Yashah Media team are dedicated about providing the finest outcomes for our clients. Because we firmly believe that creativity is the key to success in the digital world, we have a dedicated creative team that is constantly striving to develop fresh, ground-breaking concepts to set our clients apart in their respective markets.</div>
              <button className="p-3 text-white bg-yellow-600 mt-3 rounded-lg font-bold text-1xl">EXPLORE MORE</button>
            </div>
            <div className="col">
              <div className="ms-5">
                <img className='w-75 ' src="./ab.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col text-center py-14">
              <div className='text-4xl py-5 font-bold'>WE’RE A TEAM OF TALENTED DEVELOPERS & DESIGNERS</div>
            </div>
          </div>
        </div>

        <div className="container">
          {/* <div className="row">
            <div className="col text-center py-10">
              <div className='text-5xl py-5 font-bold'>Yashah Media The Digital Agency</div>
            </div>
          </div> */}
          <div className="row">
            <div className="col">
              <div className="pe-6">
                <img className='' src="./ab1.png" alt="" />
              </div>
            </div>
            <div className="col ps-16">
              <div className='text-justify fs-5 '>Our team of professionals is committed to assisting our clients in thriving in the fiercely competitive digital environment. We have the expertise to help our clients stand out from the competition, whether it is via the development of unique marketing tactics or the creation of compelling content.
                We tackle every project individually, adjusting our services to satisfy the unique requirements of every customer. Whether you want assistance with social media marketing or website creation, we can offer the knowledge and assistance you require to meet your objectives.
                </div>
              <button className="p-3 text-white bg-yellow-600 mt-3 rounded-lg font-bold text-1xl">EXPLORE MORE</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
