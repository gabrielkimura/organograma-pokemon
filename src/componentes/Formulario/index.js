import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState ('')
    const [tipo, setTipo] = useState ('')
    const [imagem, setImagem] = useState ('')
    const [regiao, setRegiao] = useState ('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoPokemonCadastrado({
            nome,
            tipo,
            imagem,
            regiao
        })
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Pokémon</h2>
                <CampoTexto obrigatorio = {true} label = "Nome" placeholder="Digite o nome do pokémon" valor={nome} aoAlterado = {valor => setNome(valor)}/>
                <CampoTexto obrigatorio = {true} label = "Tipo" placeholder="Digite o tipo de pokémon" valor={tipo} aoAlterado = {valor => setTipo(valor)}/>
                <CampoTexto label = "Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado = {valor => setImagem(valor)}/>
                <ListaSuspensa obrigatorio = {true} label = "Região" itens={props.regioes} value = {regiao} aoAlterado={valor => setRegiao(valor)}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario