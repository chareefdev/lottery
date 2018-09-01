import {createStore,combineReducers} from 'redux';
import { stat } from 'fs';


const initCard = {
    tabActive:'1',
    items:{},
    orderActive:false,
    sumPrice:0,
    itemsActive:[]
}
export const cart = (state=initCard,action) => {
    switch(action.type){
        case "UPDATE_ACTIVE_ITEMS":
            state = {
                ...state,
                itemsActive:{
                    ...state.itemsActive,
                    [action.roomid]:action.payload
                }
            }
            break;
        case "ITEMS_ACTIVE_ADD":
            state = {
                ...state,
                itemsActive:{
                    ...state.itemsActive,
                    [action.roomid]:action.payload
                }
            }
            break;
        case "ACTIVE_TAB":
            state = {
                ...state,
                tabActive:action.payload
            }
            break;
        case "EMPTY_ARRAY":

            const reducePrice =  state.items[action.parent].reduce((sum,item)=>{
                return sum+item.numberPrice
            },0)
          
            delete state.items[action.parent]
            state = {
                ...state,
                items:{
                    ...state.items
                },
                sumPrice:state.sumPrice-reducePrice
            }
            break;
        case "ADD_ITEM":
            var newData = (state.items[action.parent] === undefined)?[]:state.items[action.parent]
            state = {
                ...state,
                items:{
                    ...state.items,
                    [action.parent]:[...newData,{
                        numberPick:action.item,
                        numberPrice:action.price,
                        numberActive:true,
                        numberType:action.typeroom
                    }]
                }
            }
            break;
        case "REMOVE_ITEM":
            const removeChild = state.items[action.parent].filter((item)=>{
                return item.numberPick !== action.number
            })
            state = {
                ...state,
                items:{
                    ...state.items,
                    [action.parent]:removeChild
                },
                sumPrice:state.sumPrice-action.price
            }
            break;
        case "ADD_PRICE":
            state = {
                ...state,
                sumPrice:state.sumPrice+action.priceNumber
            }
            break;
        case "ACTIVE_ORDER":
            state ={
                ...state,
                orderActive:action.orderActive
            }
            break;
        default:
    }
    return state
}
export const store = createStore(combineReducers({cart}))
store.subscribe(()=>{
    // console.log(store.getState().cart.itemsActive);
    Object.keys(store.getState().cart.items).map((parent)=>{
        // console.log(parent);
        let parentNumber = store.getState().cart.items[parent]
        if(parentNumber.length === 0)
        {
            store.dispatch({
                type:"EMPTY_ARRAY",
                parent:parent
            })
        }
    })
})

// store.dispatch({})