import { useState } from 'react';
import Button from '../Button';
import DropdownList from '../DropdownList';
import TextField from '../TextField';
import './Forms.css';

const Forms = (props) => {

    const onSave = (buttonEvent) => {
        buttonEvent.preventDefault()
        props.onColaboradorRegister({
            nome, 
            cargo, 
            imagem, 
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    return(
        <section className="forms">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    mandatory={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    textValue={nome}
                    onChanged={textValue => setNome(textValue)}
                />
                <TextField 
                    mandatory={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo"
                    textValue={cargo}
                    onChanged={textValue => setCargo(textValue)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="https://github.com/[seu-github].png"
                    textValue={imagem}
                    onChanged={textValue => setImagem(textValue)}
                />
                <DropdownList 
                    mandatory={true} 
                    label="Time" 
                    itens={props.times} 
                    value={time}
                    onChanged={value => setTime(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
        
    )
}

export default Forms