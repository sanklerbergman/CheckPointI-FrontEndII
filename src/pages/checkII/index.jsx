import { useState } from 'react'
import './style.scss'
import { SetimaAulaCardProduto } from "../../components/SetimaAulaCardProduto"

export function CheckPoint(){

    const [nomeColor, setNomeColor] = useState('')
    const [colorFav, setColorFav] = useState('')
    const [formularioErro, setFormularioErro] = useState(false)
    const [allColors, setallColors] = useState([
        {
            id: 1,
            name: 'Vermelho',
            color: '#FF0000'
        }
    ])

    // const newProduct = {
    //      id: 1,
    //     color: ''
    // }



    function cadastrarColor(event) {

        event.preventDefault()

        const novoColor = {
            name: nomeColor,
            color: colorFav
        }

        if (nomeColor === '' || colorFav === '') {

            setFormularioErro(true)

        } else {

            setFormularioErro(false)

            setallColors([...allColors, novoColor])

            setNomeColor('')
            colorFav('')

        }

        console.log(opcao)

    }

    return (

        <main className="lista-colors">

            <div className="tittle-wrapper">
                <h1>Produtos</h1>
                {/* <button onClick={addNewProduct}>Adicionar novo produto</button> */}
            </div>

            <form className={formularioErro ? 'form-error' : ''} onSubmit={event => cadastrarColor(event)}>

                <div>
                    <label htmlFor="nomeProduto">Nome</label>
                    <input id="nomeProduto" type="text" value={nomeColor} onChange={event => setNomeColor(event.target.value)} />
                </div>

                <div>
                    <label htmlFor="precoProduto">Cor</label>
                    <input id="precoProduto" type="text" value={colorFav} onChange={event => setColorFav(event.target.value)} />
                </div>

                <button type='submit'>ADICIONAR</button>
                <button type='reset'>Limpar formulário</button>

            </form>

            {
                formularioErro ? (
                    <span>Você precisa adicionar uma COR</span>
                ) : null
            }

            <section className='products'>
                {
                    allColors.map(
                        product => {
                            return (
                                <SetimaAulaCardProduto
                                    productData={product}
                                />
                            )
                        }
                    )
                }
            </section>

        </main>

    )
}