import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            //mutating the state here
            //modifying existing state, that we get
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        //originalState= "pizza" 
        clearCart: (state) => {
          //  onsole.log(state) --> pizza
          // state = []
          // console.log(state) --> [] local state is empty but pizza remains same

          console.log(cuurent(state)); //  console.log(state)--> redux form some proxy object
            state.items.length = 0 //  this mutates the state
            // state = []  is wrong, not mutating the state, just adding a  reference to it -- Immer.js
            // or return { items: []};
            // coz you either mutate the existing state or return a new state
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;