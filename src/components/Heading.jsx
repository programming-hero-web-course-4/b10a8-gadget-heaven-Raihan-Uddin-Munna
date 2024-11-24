 
const Heading = ({ title  }) => {
    return (
        <div>
            <div className="flex flex-col w-full justify-center items-center my-6 lg:mt-12 lg:mb-8">
            <h1 className="text-xl md:text-2xl text-center lg:text-3xl font-semibold mb-2 md:mb-3">{title}</h1>
             
            </div>

        </div>
    );
};

export default Heading;