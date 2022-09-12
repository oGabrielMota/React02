import style from './Sobre.module.scss'
import stylesTema from 'styles/Tema.module.scss';
import Casa from 'assets/Sobre/casa.png'
import Massa01 from 'assets/Sobre/massa1.png'
import Massa02 from 'assets/Sobre/massa2.png'

const imagens = [Massa01, Massa02];

export default function Sobre(){
    return (
        <section>
            <h3 className={stylesTema.titulo}>Sobre</h3>
            <div className={style.sobreNos}>
                <img src={Casa} alt="Casa Aluroni"/>
                <div className={style.sobreNos__texto}>
                    <p>Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo!
                        Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência
                        seja ainda mais intensa!
                    </p>
                    <p>Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!</p>
                    <p>Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!</p>
                </div>
            </div>
                <div className={style.imagens}>
                    {imagens.map((imagens, index) => (
                        <div key={index} className={style.imagens__imagem}>
                            <img src={imagens} alt='Imagem de massa' />
                        </div>
                    ))}
                </div>
        </section>
    )
}