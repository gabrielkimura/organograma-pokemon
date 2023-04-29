import Pokemon from '../Pokemon'
import './Regiao.css'

const Regiao = (props) => {
    return(
        props.pokemons.length > 0 ? <section className='regiao' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='pokemons'>
                {props.pokemons.map(pokemon => <Pokemon nome = {pokemon.nome} tipo = {pokemon.tipo} imagem = {pokemon.imagem}/>)}
            </div>
        </section>
        : ''
    )
}

export default Regiao