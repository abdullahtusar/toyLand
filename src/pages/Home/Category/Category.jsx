import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategory from './SubCategory';
import SubCategory2 from './SubCategory2';
import SubCategory3 from './SubCategory3';
const Category = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    console.log(toys)

    return (
        <div className='bg-base-200 rounded p-6 md:p-12'>
            <div className='border-[5px] border-gray-400 rounded-lg'>
                <Tabs>
                    <div className='p-3  border-gray-400 text-center text-gray-600'>
                        <h1 className='text-4xl text-center font-bold py-6'>Our Products</h1>
                    </div>
                    <div className='font-semibold text-center pb-1'>
                        <TabList className="border-0">
                            <Tab>Avengers</Tab>
                            <Tab>Star Wars</Tab>
                            <Tab>Transformers</Tab>
                        </TabList>
                    </div>

                    <div className='bg-white'>
                        <TabPanel>
                            <div className='grid md:grid-cols-3 md:p-10 justify-items-center'>
                                {
                                    toys.map(toy => <SubCategory
                                        key={toy._id}
                                        toy={toy}
                                    ></SubCategory>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid md:grid-cols-3 md:p-10 justify-items-center'>
                                {
                                    toys.map(toy => <SubCategory2
                                        key={toy._id}
                                        toy={toy}
                                    ></SubCategory2>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid md:grid-cols-3 md:p-10 justify-items-center'>
                                {
                                    toys.map(toy => <SubCategory3
                                        key={toy._id}
                                        toy={toy}
                                    ></SubCategory3>)
                                }
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>

        </div>
    );
};

export default Category;