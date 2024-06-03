import React from 'react'
export default function Todolist({ data }) {
    return (
        <>
            {
                data.map((item) =>
                    <div className="flex justify-center">
                        <div className={`w-96 flex items-center justify-between rounded-xl h-14 ${item.status ? "bg-green-500" : "bg-red-500"} text-white m-2`}>
                            <div className="ml-2"> {item.task} - {item.time}</div>
                            <div className="mr-2">
                                {
                                    item.status ? <i className="fa fa-check ml-2" aria-hidden="true"></i> :
                                        <i className="fa fa-close ml-2" aria-hidden="true"></i>
                                }
                                
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}