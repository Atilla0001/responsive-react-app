import React from 'react'

const List = (props) => {
    let {data} = props;
  return (
    <div>
        {
            data && data.map((item,index)=>(
                <div key={index}>
                    <h3>{item.title}</h3>
                </div>
            ))
        }
    </div>
  )
}

export default  List