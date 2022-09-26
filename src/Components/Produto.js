import React from 'react'
import styles from './Produto.module.css'
import { useParams } from 'react-router-dom'
import { Head } from "./Head"

const Produto = () => {
    const [produto, setProduto] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [erro, setErro] = React.useState(null)
    const { id } = useParams()

    React.useEffect(() => {
        async function fetchData(url) {
            try {
                setLoading(true)
                const response = await fetch(url)
                const json = await response.json()
                setProduto(json)
            } catch (error) {
                setErro(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
    }, [id])

    if (loading) return (<div className="loading"></div>)
    if (produto === null) return null
    if (erro) return (<p>{erro}</p>)

    return (
        <section className={styles.produto + " animeLeft"}>
            <Head title={`Ranek | ${produto.nome}`} description={`Ranek | ${produto.descricao}`} />
            <div>
                {produto.fotos.map((foto) => (
                    <img key={foto.src} src={foto.src} alt={foto.descricao}/>
                ))}
            </div>
            <div>
                <h1>{produto.nome}</h1>
                <span className={styles.preco}>R$ {produto.preco}</span>
                <p>{produto.descricao}</p>
            </div>
        </section>
    )
}

export default Produto