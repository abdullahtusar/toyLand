import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Category = () => {
    return (
        <div className='bg-base-200 p-6 md:p-12'>
            <div className='border-[5px] border-gray-400 rounded'>
                <Tabs>
                    <div className='p-3  border-gray-400 text-center text-gray-600'>
                    <h1 className='text-4xl text-center font-bold py-6'>Shop By Category</h1>
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
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 3</h2>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>

        </div>
    );
};

export default Category;