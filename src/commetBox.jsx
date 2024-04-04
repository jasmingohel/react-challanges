import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

function CommetBox() {
    const [list, setList] = useState([]);
    const [replyIndex, setReplyIndex] = useState(0);
    const inputRef = useRef();
    const replyRef = useRef();
    const handleAddCommet = () => {
        console.log(inputRef.current.value);
        // let newCommet = { 'text': inputRef.current.value };
        setList((prev) => {
            return [...prev, {
                id: prev.length > 0 ? prev[prev.length - 1]?.id + 1 : 1,
                text: inputRef.current.value,
            }];
        })
    }

    const submitReply = (id) => {

        // setList((prev) => {
        //     return prev.map((item) => ({
        //         ...item,
        //         subCommet: item.id === id ? [{
        //             subId: id,
        //             subText: replyRef.current.value
        //         }] : item.subCommet
        //     }));
        // });
        setList((prev) => {
            return prev.map((item) => {
                if (item.id === id) {
                    // Ensure item.subCommet is an array before spreading it
                    const subCommet = Array.isArray(item.subCommet) ? item.subCommet : [];

                    return {
                        ...item,
                        subCommet: [
                            ...subCommet,
                            {
                                subId: id,
                                subText: replyRef.current.value
                            }
                        ]
                    };
                } else {
                    // If item.id does not match, return the item unchanged
                    return item;
                }
            });
        });

    }
    useEffect(() => {
        console.log(list[list.length - 1]?.id, list)
    }, [list])

    return (
        <div>
            <h1>CommetBox</h1>
            <div>
                <div>add your comment : </div>
                <div className='flex flex-col'>
                    <input ref={inputRef} className='border border-gray-400 ' type="text" />
                    <div className='gap-4 flex mt-2'>
                        <button onClick={(e) => handleAddCommet()} className='border border-gray-400 p-1'>Add Comment</button>
                        <button onClick={() => { inputRef.current.value = '' }} className='border border-gray-400 p-1'>cancle</button>
                    </div>
                </div>
            </div>


            <div className='mt-6 flex flex-col gap-2'>
                {
                    list.map((item) => (
                        <>
                            <div className='gap-3 flex flex-col items-center border border-gray-500 p-1' key={item?.id}>
                                {/* <span>{item?.id}</span> */}
                                <span>{item.text}</span>
                                <div className='flex gap-3'>
                                    {replyIndex === item.id &&
                                        <div className='flex flex-col'>
                                            <input ref={replyRef} type="text" className='border border-solid border-green-600' />
                                            <div className='flex gap-3'>
                                                <button onClick={() => submitReply(item.id)}>reply</button>
                                                <button onClick={() => setReplyIndex(() => 0)}>cancle</button>
                                            </div>
                                        </div>
                                    }
                                    {replyIndex !== item.id &&
                                        <>
                                            <button onClick={() => setReplyIndex(() => item?.id)} className='border border-green-500 p-1'>reply</button>
                                            <button className='border border-blue-500 p-1'>edit</button>
                                            <button className='border border-red-500 p-1'>delete</button>
                                        </>}
                                </div>
                            </div>
                            {item?.subCommet?.map((subitem, index) => (
                                <div style={{ marginLeft: `${index * 15 + 15}px` }} className={` border border-gray-900 P-3`}>
                                    <span >{subitem.subText}</span>
                                </div>
                            ))}
                        </>
                    ))
                }
            </div>

        </div>
    )
}

export default CommetBox