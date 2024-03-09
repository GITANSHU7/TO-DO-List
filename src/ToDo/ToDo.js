'use client';
import { Button, Checkbox, Label, Navbar, TextInput } from 'flowbite-react';
import React from 'react';

const ToDo = () => {
    const [open, setOpen] = React.useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }
    return (
        <>
            {
                open && (
                    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-5 z-50' >
                        <div className='h-full w-96 mx-auto flex self-center justify-center items-center'>
                            <div className=' border-t-4 flex justify-center flex-col items-center border-brand flex-1 p-4 bg-neutral-800'>
                                <h3 className='text-xl text-white my-12'>Delete This Task?</h3>
                                <div className='flex flex-row gap-4 self-center'>
                                    <button className='text-white border-2 border-brand w-20 rounded-md  p-1' onClick={toggleOpen}>Yes</button>
                                    <button className='text-white border-2 border-brand w-20 rounded-md hover:border-amber-400' onClick={toggleOpen}>No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <Navbar fluid rounded className='hidden md:block border-2 border-brand bg-brand'>
                <Navbar.Brand className='flex-col' href="https://flowbite-react.com">

                    <span className="self-center whitespace-nowrap text-xl font-semibold text-white">GYIZER </span>
                    <span className='text-sm text-amber-100'>TODO APP</span>
                </Navbar.Brand>
                {/* <Navbar.Toggle /> */}

            </Navbar>
            <div className={`container mx-auto p-4 ${open ? ' blur-sm' : ''}`}>
                <div className='flex justify-center items-start md:items-center h-screen text-white'>
                    <div className='flex flex-1 flex-col items-center'>
                        <div className='h-32'>
                            <form className="flex max-w-md flex-row gap-4">
                                <div>
                                    <input placeholder='Input' type="text" className='w-full border-2 border-brand mb-2 text-white bg-brand rounded-md p-3  ' />
                                    <input placeholder='Input' type="text" className='w-full border-2 border-brand text-white bg-brand rounded-md p-3  ' />
                                </div>
                                <div>
                                    <button className='w-32 border-2 border-brand h-full text-white rounded-md'>
                                        <span className='inline-block  -mt-4 text-brand text-7xl h-4'>+</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className='h-96 w-full border-2 border-brand flex items-center justify-center rounded-md'>
                            {/* <div className='text-2xl flex justify-center flex-col'>
                                <div className='bg-brand-2 w-12 h-1 self-center' ></div>
                                <div className='my-2'>
                                    No Tasks
                                </div>
                                <div className='bg-brand-2 w-12 h-1 self-center' ></div>
                            </div> */}
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 p-12'>
                                <div className='border-2 border-brand p-4 rounded-md flex flex-row justify-between items-center hover:border-amber-400'>
                                    <div className=''>
                                        <h4 className='text-lg md:text-xl'>Title</h4>
                                        <p className='text-xs md:text-base'>Content</p>
                                    </div>
                                    <div onClick={toggleOpen} className='border-2 border-brand w-12 flex justify-center items-center rounded-md h-12 hover:border-amber-400'>
                                        i
                                    </div>
                                </div>
                                <div className='border-2 border-brand'>
                                    Titel
                                </div>
                                <div className='border-2 border-brand'>
                                    Titel
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDo