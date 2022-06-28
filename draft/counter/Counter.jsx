// import React, {useState} from 'react';
//
// import decrement from "./p_c_images/minus.svg";
// import increment from "./p_c_images/plus.svg";
// import 'сounter.css';
//
// export const Counter = (props) => {
//     const [value, setValue] = useState(0);
//
//     const onInput = (e) => {
//         setValue(Number(e.target.value.replace(/\D/, '')))
//     };
//
//     const decrementClick = () =>
//     {
//         setValue(value - 1)
//     };
//
//     const incrementClick = () =>
//     {
//         setValue(value + 1)
//     };
//
//     return (
//         <div class="product-counter">
//             <div class="decrement">
//                 <button disabled={value === 0} onClick={decrementClick} class="btn decrement-btn">
//                     <img src={decrement} alt="minus"/>
//                 </button>
//             </div>
//             <div class="score">
//                 <input type="text" value={value} onInput={onInput}/>
//             </div>
//             <div onClick={incrementClick} class="increment">
//                 <button class="btn decrement-btn">
//                     <img src={increment} alt="plus"/>
//                 </button>
//             </div>
//         </div>
//     )
// };
