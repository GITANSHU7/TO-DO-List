'use client';
import { Button, Checkbox, Label, Navbar, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, updateTodo } from '../reducer/TodoList';
import EditIcon from '@mui/icons-material/Edit';

const ToDo = () => {
    const [open, setOpen] = React.useState(false);
    const todos = useSelector(state => state.todos);
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const [editId, setEditId] = useState(null);
    const [description, setDescription] = useState('');
    const [showButton, setShowButton] = useState(false);
    const[deleteId, setDeleteId] = useState('');

    const toggleOpen = () => {
        setOpen(!open);
    }

    const toggleButton = () => {
        setShowButton(!showButton);
    }

    console.log(todos);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('title', title);
        console.log('description', description);
        dispatch(addTodo({
            id: Math.floor(Math.random() * 1000) + 1,
            title: title,
            description: description
        }));
    }

    const handleDelete = (id) => {
        console.log('id', id);
        dispatch(removeTodo({
            id: id
        }));
        setDeleteId('');
    }

    const handleUpdate = (id, updatedTitle, updatedDescription) => {
        dispatch(updateTodo({
            id: id,
            title: updatedTitle,
            description: updatedDescription
        }));
        setEditId(null);
    }

    return (
        <>
            {/* {
                open && (
                    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-5 z-50' >
                        <div className='h-full w-96 mx-auto flex self-center justify-center items-center'>
                            <div className=' border-t-4 flex justify-center flex-col items-center border-brand flex-1 p-4 bg-neutral-800'>
                                <h3 className='text-xl text-white my-12'>Delete This Task?</h3>
                                <div className='flex flex-row gap-4 self-center'>
                                    <button className='text-white border-2 border-brand w-20 rounded-md  p-1' onClick={() => { handleDelete(deleteId); toggleOpen();}}>Yes</button>
                                    <button className='text-white border-2 border-brand w-20 rounded-md hover:border-amber-400' onClick={toggleOpen}>No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } */}
            <Navbar fluid rounded className='hidden md:block border-2 border-brand bg-brand'>
                <Navbar.Brand className='flex-col' href="">

                    <span className="self-center whitespace-nowrap text-xl font-semibold text-white">GYIZER </span>
                    <span className='text-sm text-amber-100'>TODO APP</span>
                </Navbar.Brand>
                {/* <Navbar.Toggle /> */}

            </Navbar>
            <div className={`container mx-auto p-4 ${open ? ' blur-sm' : ''}`}>
                <div className='flex justify-center items-start md:items-center h-screen text-white'>
                    <div className='flex flex-1 flex-col items-center'>
                        <div className='h-32'>
                            <form className="flex max-w-md flex-row gap-4" onSubmit={handleSubmit}>
                                <div>
                                    <input placeholder='Input' name='title' type="text" className='w-full border-2 border-brand mb-2 text-white bg-brand rounded-md p-3  ' 
                                    onChange={(e) => {e.preventDefault(); setTitle(e.target.value)}}
                                    />
                                    <input placeholder='Input' name='description' type="text" className='w-full border-2 border-brand text-white bg-brand rounded-md p-3  '
                                    onChange={(e) => {e.preventDefault(); setDescription(e.target.value)}}
                                    />
                                </div>
                                <div>
                                    <button className='w-32 border-2 border-brand h-full text-white rounded-md'>
                                        <span className='inline-block  -mt-4 text-brand text-7xl h-4'>+</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className='h-96 w-full border-2 border-brand flex items-center justify-center rounded-md'>
                            
                            
                        {todos.length === 0 ? (
                                     <div className='text-2xl flex justify-center flex-col'>
                                     <div className='bg-brand-2 w-12 h-1 self-center' ></div>
                                     <div className='my-2'>
                                         No Tasks
                                     </div>
                                     <div className='bg-brand-2 w-12 h-1 self-center' ></div>
                                 </div>
                                ) : (
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 p-12'>
                                
                                {todos.map((todo, index) => (
                                <div className='border-2 border-brand p-4 rounded-md flex flex-row justify-between items-center hover:border-amber-400'>
                                    <div className=''>
                                        <h4 className='text-lg md:text-xl'>{todo?.title}</h4>
                                        <p className='text-sm md:text-md'>{todo?.description}</p>
                                    </div>
                                    {/* <div onClick={toggleOpen} className='border-2 border-brand w-12 flex justify-center items-center rounded-md h-12 hover:border-amber-400'>
                                        i
                                    </div> */}
                                    {!showButton && (
                                    <div onClick={() => { toggleButton()}}className='border-2 border-brand w-12 flex justify-center items-center rounded-md h-12 hover:border-amber-400'>
                                        i
                                    </div>
                                    )}
                                    {showButton && (
                                    <div className='flex flex-row gap-4'>
                                    <div onClick={() => {setDeleteId(todo?.id)}}className='border-2 border-brand w-12 flex justify-center items-center rounded-md h-12 hover:border-amber-400 background-design'>
                                        <EditIcon />
                                    </div>
                                    <div onClick={() => { toggleOpen()}}className='border-2 border-brand w-12 flex justify-center items-center rounded-md h-12 hover:border-amber-400 delete-color '>
                                        X
                                    </div>
                                    </div>
                                    )}
                                    {/* <div className='border-2 border-brand w-12 flex justify-center items-center rounded-md h-12 hover:border-amber-400'>
                                        up
                                    </div> */}
                                    {
                open && (
                    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-5 z-50' >
                        <div className='h-full w-96 mx-auto flex self-center justify-center items-center'>
                            <div className=' border-t-4 flex justify-center flex-col items-center border-brand flex-1 p-4 bg-neutral-800'>
                                <h3 className='text-xl text-white my-12'>Delete This Task?</h3>
                                <div className='flex flex-row gap-4 self-center'>
                                    <button className='text-white border-2 border-brand w-20 rounded-md  p-1' onClick={() => { handleDelete(todo?.id); toggleOpen(); toggleButton()}}>Yes</button>
                                    <button className='text-white border-2 border-brand w-20 rounded-md hover:border-amber-400' onClick={() => { toggleButton() } }>No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
                                   
                                </div>
                                ))}

                            </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDo