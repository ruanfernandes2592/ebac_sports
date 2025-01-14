import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFavoritos: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        state.itens = state.itens.filter((p) => p.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionarFavoritos } = favoritosSlice.actions
export default favoritosSlice.reducer

/*function favoritar(produto: Produto) {
  if (favoritos.find((p) => p.id === produto.id)) {
    const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
    setFavoritos(favoritosSemProduto)
  } else {
    setFavoritos([...favoritos, produto])
  }
}*/
