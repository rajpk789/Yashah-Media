
export default function page() {
    return (
        <main className="" style={{ backgroundImage: 'url(bgg.jpg ) ' }}>
            <div className="container">
                <div className="row items-center">
                    <div className="col-6">
                        <button className="btn btn-warning">Take The First Step</button>
                    </div>
                    <div className="col-6">
                        <img src="./contact.png" alt="" />
                    </div>
                </div>
                <div className="row items-center">
                    <div className="col-6">
                        <button className="btn btn-warning">Take The First Step</button>
                    </div>
                    <div className="col-6 bg-slate-400">
                        <form action="" className='px-10'>
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
                </div>
                <div className="row">
                </div>
            </div>

        </main>
    )
}