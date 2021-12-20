import React from 'react'

const Service = () => {
    return (
        <>
            <section className = "container our-services text-center mt-5">
                <h1>SERVICES</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <div className = 'row rowsetting'>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto'>
                        <div className = "imgsetting d-block m-auto bg-warning">
                            
                            <i class="fa fa-cloud fa-3x" aria-hidden="true"></i>
                        </div>
                        <h2>Cloud Computing</h2>
                        <p>Lorem ipsum dolor sit amet. Et eveniet fugiat vel impedit optio eum quia
                         blanditiis et internos magni. Rem internos aspernatur et consequuntur
                          fugiat ab aspernatur nemo. 
                        Aut laboriosam repudiandae At tenetur perferendis ut sunt praesentium.</p>
                    </div>

                    <div className='col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto'>
                        <div className = "imgsetting d-block m-auto bg-warning">
                            <i className="fa fa-shopping-cart fa-3x" aria-hidden="true"></i>
                        </div>
                        <h2>Artificial Inteligence</h2>
                        <p>Lorem ipsum dolor sit amet. Et eveniet fugiat vel impedit optio eum quia
                         blanditiis et internos magni. Rem internos aspernatur et consequuntur
                          fugiat ab aspernatur nemo. 
                        Aut laboriosam repudiandae At tenetur perferendis ut sunt praesentium.</p>
                    </div>

                    <div className='col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto'>
                        <div className = "imgsetting d-block m-auto bg-warning">
                        <i class="fa fa-smile-o fa-3x" aria-hidden="true"></i>
                        </div>
                        <h2>Block Chain</h2>
                        <p>Lorem ipsum dolor sit amet. Et eveniet fugiat vel impedit optio eum quia
                         blanditiis et internos magni. Rem internos aspernatur et consequuntur
                          fugiat ab aspernatur nemo. 
                        Aut laboriosam repudiandae At tenetur perferendis ut sunt praesentium.</p>
                    </div>


                </div>
            </section>
            
        </>
    )
}

export default Service
