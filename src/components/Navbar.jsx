import React from 'react'

export const Navbar = () => {
    return (
        <>
            <div className='bgimg'>
                <nav class = "navbar navbar-expand-md bg-dark navbar-dark">
                    <div className='container'>
                        <a href = " "className='navbar-brand text-warning font-weight-bold'>Saurabh</a>
                        <button className='navbar-toggler' type="button" data-toggle="collapse"
                        data-target="#collapsenavbar">
                            <span className='navbar-toggler-icon'></span>
                        </button>

                        <div className='collapse navbar-collapse text-center' id='collapsenavbar'>
                            <ul className ='navbar-nav ml-auto '>
                                <li className = "nav-item">
                                    <a href = "" className = "nav-link text-white">Services</a>
                                </li>
                                <li className = "nav-item">
                                    <a href = "" className = "nav-link text-white">Portfolio</a>
                                </li>
                                <li className = "nav-item">
                                    <a href = "" className = "nav-link text-white">About Us</a>
                                </li>
                                <li className = "nav-item">
                                    <a href = "" className = "nav-link text-white">Team</a>
                                </li>
                                <li className = "nav-item">
                                    <a href = "" className = "nav-link text-white">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>
                <div className = "container text-center text-white  headerset">
                    <h2>Welcome to My World</h2>
                    <h1>Nice to meet You</h1>
                    <button className = "btn btn-warning  btn-lg">Subscibe</button>
                </div>
                
            </div>
        </>
    )
}
export default Navbar
