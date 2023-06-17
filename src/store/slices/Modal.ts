import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type modalState = {
  isOpen: boolean;
  modalData: SingleCryptoHistoryDatas[];
  cryptoName: string;
};

const initialModalState: modalState = {
  isOpen: false,
  modalData: [],
  cryptoName: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialModalState,
  reducers: {
    toogleModal: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
      if (!action.payload) {
        state.modalData = [];
      }
    },
    setModalData: (
      state,
      action: PayloadAction<{ datas: any; name: string }>
    ) => {
      const { datas, name } = action.payload;
      state.modalData = datas;
      state.cryptoName = name;
    },
  },
});

export const { toogleModal, setModalData } = modalSlice.actions;
export default modalSlice.reducer;
