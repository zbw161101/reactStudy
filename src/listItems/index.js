/**
 * Created by ZhaoBoWen on 2017/5/27.
 */
import React from 'react'

function ListItem(props) {
  return (
    <li>{props.value}</li>
  )
}

// const map = Function.prototype.call.bind(Array.prototype.map)

export function NumberList(props) {
  const numbers = [1, 2, 3, 4, 5]
  return (
    <ul>
      {numbers.map(number =>
        <ListItem key={number.toString()}
                  value={number}/>
      )}
    </ul>
  )
}

// export function NumberList(props) {
//   const numbers = [1, 2, 3, 4, 5];
//   const listItems = numbers.map((number) =>
//     <li>{number}</li>
//   );
//   return (
//     <ul key={props.key}>{listItems}</ul>
//   );
// }
