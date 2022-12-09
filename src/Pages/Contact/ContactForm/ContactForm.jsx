import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <div className="hero bg-base-200 px-32">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <div className="flex flex-col justify-center align-middle items-center gap-5">
                            <h1 className="text-3xl font-bold text-center">We can't wait to <span className='text-bold text-orange-500'>hear from you!</span></h1>
                            <div className="w-[50px] h-[3px] bg-orange-500 inline-block"></div>
                        </div>
                        <p className="py-6 text-center">
                            At Improve Digitally, we are always ready for new collaborations and opportunities. Our response team is available 24*7 to answer all your digital marketing and related queries. Get in touch with us as we would be more than happy to help you!
                        </p>
                    </div>

                    <div className="card flex-shrink-0 shadow-2xl bg-base-100 lg:w-3/5 md:w-[500px] sm:w-full mt-0 lg:-mt-14">
                        <div className="flex flex-col justify-center align-middle items-center">
                            <h1 className='text-2xl font-semibold text-center py-2'>Get in <span className='text-bold text-orange-500'>Touch</span></h1>
                            <div className="w-[50px] h-[3px] bg-orange-500 inline-block"></div>
                        </div>
                        <form className="card-body">
                            <div className="grid sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2 gap-3">
                                <div className="form-control">
                                    <input type="text" placeholder="Your Name*" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="Your@gmail.com*" className="input input-bordered" />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3">
                                <div className="form-control">
                                    <input type="text" placeholder="Phone number" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="Location" className="input input-bordered" />
                                </div>
                            </div>

                            <div className="form-control">
                                <input type="text" placeholder="Subject*" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <textarea className="textarea textarea-bordered" placeholder="write your query..*"></textarea>
                            </div>


                            <div className="form-control mt-6">
                                <button className="btn w-full hover:btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;