import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Regiao from './componentes/Regiao';

function App() {

  const regioes = [
    {
      nome: 'Kanto',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Johto',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Hoenn',
      corPrimaria: '#a6d267',
      corSecundaria: '#f0f8e2'
    },
    {
      nome: 'Sinnoh',
      corPrimaria: '#e06b69',
      corSecundaria: '#f0f8e2'
    },
    {
      nome: 'Unova',
      corPrimaria: '#d86ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome: 'Kalos',
      corPrimaria: '#ffba05',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'Ilhas Laranja',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    }

  ]

  const [pokemons, setPokemons] = useState ([])

  return (
    <div className="App">
      <Banner />
      <Formulario regioes = {regioes.map(regiao => regiao.nome)} aoPokemonCadastrado = {pokemon => setPokemons([...pokemons, pokemon])}/>
      {regioes.map(regiao=> <Regiao 
        key = {regiao.nome} 
        nome = {regiao.nome} 
        corPrimaria = {regiao.corPrimaria} 
        corSecundaria = {regiao.corSecundaria}
        pokemons = {pokemons.filter(pokemon => pokemon.regiao === regiao.nome)}
      />)}
    </div>
  );
}

export default App;
