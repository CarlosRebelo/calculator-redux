   /* import React from 'react'
    import { Provider, connect} from 'redux-react'
    import { combineReducer, createStore} from 'redux'

    const operation = (state = [], action ) => {
        switch(action.type) {
            case 'PLUS':
            const add = () => {
                first = 0;
                seconde = 0;
                plus = 0;
                plus += first + second;
            }
            return add
        }
    }

    const onClickPlus = (event, dispatch) => {
        const first = event.target.elements.first.value;
        dispatch({
            type: 'PLUS',
            first: first,
            second: second
        })
    }

    const math = (props) => {
    <div>
        <input type='number' name="first"/>
        <input type='number' name="second"/>
        <button onClick={(event) => onClickPlus(event, props.dispatch)}>+</button>
        <button>-</button>
        <p>{props.counts}</p>
    </div>
    }
    const getActualState = (actualState => {
        return {
            counts: actualState.operation,
        }
    })

    const Calculator = connect(getActualState)(math)

    const store = createStore(combineReducer({
        operation: operation
    })) 

    export default () => (
        <Provider store={store}>
            <Calculator/>
        </Provider>
    )*/