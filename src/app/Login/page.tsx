import React from 'react'

function page() {
    return (
        <main className='' style={{ backgroundImage: 'url(bgg.jpg ) ' }}>
            <div className="container">
                <div className="row py-6 justify-evenly">
                    <div className="col-4">
                        <form action="" className=''>
                            <h1 className='text-4xl mb-4 font-extrabold text-center'>Register Now</h1>
                            <label htmlFor="form-label">First Name</label>
                            <input className='form-control' type="text" />
                            <label htmlFor="form-label">Last Name</label>
                            <input className='form-control' type="text" />
                            <label htmlFor="form-label">Mobile Number</label>
                            <input className='form-control' type="number" />
                            <label htmlFor="form-label">Email Id</label>
                            <input className='form-control' type="email" />
                            <label htmlFor="form-label">Creat Password</label>
                            <input className='form-control' type="password" />
                            <input className='btn btn-danger my-4' type="" value="Register Now" />
                        </form>
                    </div>
                    <div className="col-4">
                        <form action="" className=''>
                            <h1 className='text-4xl mb-4 font-extrabold text-center'>Login Now</h1>
                            {/* <label htmlFor="form-label">First Name</label>
                            <input className='form-control' type="text" />
                            <label htmlFor="form-label">Last Name</label>
                            <input className='form-control' type="text" /> */}
                            <label htmlFor="form-label">Mobile Number</label>
                            <input className='form-control' type="number" />
                            <label htmlFor="form-label">Email Id</label>
                            <input className='form-control' type="email" />
                            <label htmlFor="form-label">Creat Password</label>
                            <input className='form-control' type="password" />
                            <input className='btn btn-danger my-4' type="" value="Login Now" />
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page