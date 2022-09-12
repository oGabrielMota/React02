import { useState } from 'react'
import style from './Cardapio.module.scss'
import Buscador from './buscador'
import Filtros from './filtros/'
import Ordenador from './ordenador'
import Itens from './items'
import stylesTema from 'styles/Tema.module.scss';

export default function Cardapio(){
    const [busca, setBusca] = useState('');
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ ordenador, setOrdenador] = useState('')

    return(
                <section className={style.cardapio}>
                    <h3 className={stylesTema.titulo}>Cárdapio</h3>
                    <Buscador busca={busca} setBusca={setBusca}/>
                    <div className={style.cardapio__filtros}>
                        <Filtros filtro={filtro} setFiltro={setFiltro}/>
                        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
                    </div>
                    <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
                    
                </section>
    )
}