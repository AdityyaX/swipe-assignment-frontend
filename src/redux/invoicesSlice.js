import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const invoicesSlice = createSlice({
  name: "invoices",
  initialState: [],
  reducers: {
    addInvoice: (state, action) => {
      state.push(action.payload);
    },
    deleteInvoice: (state, action) => {
      return state.filter((invoice) => invoice.id !== action.payload);
    },
    updateInvoice: (state, action) => {
      const index = state.findIndex(
        (invoice) => invoice.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload.updatedInvoice;
      }
    },
    addItem: (state, action) => {
      state.push(action.payload.items);
      console.log("action", action.payload.items);
    },
    removeItem: (state , action) => {
      state.pop(action.payload)
   
  },
  updateItem: (state, action) => {
    const { itemId, field, value } = action.payload;
    return state.map((item) =>
      item.itemId === itemId
        ? field === 'delete'
          ? null
          : { ...item, [field]: value }
        : item
    ).filter(Boolean);
  },
  },
});

export const {
  addInvoice,
  deleteInvoice,
  updateInvoice,
  addItem,
  removeItem,
  updateItem
} = invoicesSlice.actions;

export const selectInvoiceList = (state) => state.invoices;

export default invoicesSlice.reducer;
