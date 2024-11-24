

const Review = () => {
    return (
        < >


            <div>
                <form className="w-full flex flex-col  gap-2  my-8">
                    <input className="mx-auto pl-6 font-semibold text-xl w-4/5 rounded-lg h-16 border-2 border-black" placeholder="Enter your E-mail" type="email" name="" id="" />
                    <input className="mx-auto pl-6 font-semibold text-xl w-4/5 rounded-lg h-40 border-2 border-black" type="text" placeholder="Enter your Comment" name="" id="" />
                    <button className=" w-4/5 mx-auto btn bg-purple-600">Submit</button>
                </form>
            </div>
            <div className="bg-gray-100 border-1 rounded-lg">
                <div className="flex mx-auto border-2 w-full h-full justify-around">
                    <div className="flex gap-4  items-center  px-20 py-8">

                        <div className="rating ">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-4"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />


                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h3 className="text-2xl font-semibold"> Rating: 4.7</h3>
                    </div>

                    <div>

                        <div className="flex flex-col px-20 py-8">
                            {/* 1 */}
                            <h1 className="text-2xl font-semibold pb-2">Top 5 Rating:</h1>
                            <div className="rating gap-2">
                                <h1 className="text-xl font-semibold">1.</h1>
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-4"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />


                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            {/* 2 */}
                            <div className="rating gap-2">
                                <h1 className="text-xl font-semibold ">2.</h1>
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />

                                <input
                                    type="radio"
                                    name="rating-4"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />

                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            {/* 3 */}

                            <div className="rating gap-2">
                                <h1 className="text-xl font-semibold ">3.</h1>
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />


                                <input
                                    type="radio"
                                    name="rating-4"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />


                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            {/* 4 */}
                            <div className="rating gap-2">
                                <h1 className="text-xl font-semibold ">4.</h1>
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />

                                <input
                                    type="radio"
                                    name="rating-4"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />


                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            {/* 5 */}
                            <div className="rating gap-2">
                                <h1 className="text-xl font-semibold ">5.</h1>
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />

                                <input
                                    type="radio"
                                    name="rating-4"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />


                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            </div>




                        </div>
                    </div>

                </div>


                <div className="stats shadow w-full mx-auto bg-gray-200">
                    <div className="stat hover:bg-gray-400">
                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div className="stat-title">Product Purchase</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat hover:bg-gray-400">
                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                            </svg>
                        </div>
                        <div className="stat-title">New Users</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat hover:bg-gray-400">
                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                            </svg>
                        </div>
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>
            </div>





        </>
    );
};

export default Review;