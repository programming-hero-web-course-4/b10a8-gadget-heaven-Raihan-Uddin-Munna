
import {   BarChart, XAxis, YAxis, Bar } from "recharts";


const Statistics = () => {


    const chat = [
        { "product": "Dell XPS 13", "rating": 4.5 },
        { "product": "Apple Watch Series 7", "rating": 4.2 },
        { "product": "Samsung Galaxy S21", "rating": 4.8 },
        { "product": "Sony WH-1000XM4 Headphones", "rating": 4.3 },
        { "product": "MacBook Pro 16-inch", "rating": 4.7 },
        { "product": "iPhone 13 Pro Max", "rating": 4.6 },
        { "product": "Logitech MX Master 3 Mouse", "rating": 4.4 },
        { "product": "HP Spectre x360", "rating": 4.1 },
        { "product": "Google Pixel 6 Pro", "rating": 4.3 },
        { "product": "Samsung Galaxy Watch 4", "rating": 4.0 }
    ]






    return (
        <div>

            <BarChart width={1200} height={300} data={chat} className="bg-purple-300 border-2 rounded-lg">
                 
                <XAxis dataKey="product" stroke="blue" className="text-sm" />
                <XAxis dataKey="product" stroke="blue" className="text-sm" />
                <YAxis dataKey="rating" />

                <Bar type="monotone" dataKey="rating" stroke="#8884d8" />

            </BarChart >

        </div>
    );
};

export default Statistics;