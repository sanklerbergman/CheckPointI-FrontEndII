import './style.scss'

export function SetimaAulaCardProduto(props) {


    return (

        <div className="setima-aula-card-produto-component">
            
            <div className="cardColor" style={{ backgroundColor: props.productData.color }}> 
            <div className="card-body">
                <h1>{props.productData.name}</h1>
                <span>{props.productData.color}</span>
            </div>
            </div>
        </div>

    )

}