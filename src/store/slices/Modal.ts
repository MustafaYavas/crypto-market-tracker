import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type modalState = {
  isModalDatasLoading: boolean;
  isOpen: boolean;
  modalData: SingleCryptoHistoryDatas[];
  cryptoName: string;
};

const initialModalState: modalState = {
  isModalDatasLoading: false,
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
    fetchModalData: (state, action: PayloadAction<string>) => {
      state.isModalDatasLoading = true;
      return state;
    },
    setModalData: (
      state,
      action: PayloadAction<{ datas: SingleCryptoHistoryDatas[]; name: string }>
    ) => {
      const { datas, name } = action.payload;
      state.isModalDatasLoading = false;
      state.modalData = datas;
      state.cryptoName = name;
    },
  },
});

export const { toogleModal, fetchModalData, setModalData } = modalSlice.actions;
export default modalSlice.reducer;
