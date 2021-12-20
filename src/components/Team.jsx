import React from 'react'

const Team = () => {
    return (
        <>
            <section className='ourteam'>
                <div className='container text-center'>
                    <h1>OUR AMAZING TEAM</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    <div className='row teamsetting'>
                        <div className='col-lg-4 col-md-4 col-sm-10 col-12 d-block m-auto'>
                            <figure>
                                <img src = './images/image2.jpg' 
                                    className=' img-fluid figure-img rounded-circle' 
                                    alt = "img"
                                    
                                />
                                <figcaption>
                                    <h4>Carry Watson</h4>
                                    <p className='figure-caption'>Web Developer</p>
                                </figcaption>
                            </figure>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-10 col-12 d-block m-auto'>
                            <figure>
                                <img src = './images/image2.jpg' 
                                    className=' img-fluid figure-img rounded-circle' 
                                    alt = "img"
                                    
                                />
                                <figcaption>
                                    <h4>Carry Watson</h4>
                                    <p className='figure-caption'>Web Developer</p>
                                </figcaption>
                            </figure>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-10 col-12 d-block m-auto'>
                            <figure>
                                <img src = './images/image2.jpg' 
                                    className=' img-fluid figure-img rounded-circle' 
                                    alt = "img"
                                    
                                />
                                <figcaption>
                                    <h4>Carry Watson</h4>
                                    <p className='figure-caption'>Web Developer</p>
                                </figcaption>
                            </figure>
                        </div>

                    </div>
                
                </div>
            </section>
        </>
    )
}

export default Team
