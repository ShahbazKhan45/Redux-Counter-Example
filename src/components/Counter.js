import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counterSlice';


const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <>
            <section className="counter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center my-3">
                            <h1>Count: {count}</h1>
                            <button className="btn btn-secondary mx-2" onClick={()=>dispatch(increment())}> + </button>
                            <button className="btn btn-secondary mx-2" onClick={()=>dispatch(decrement())}> - </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Counter;
