import { useAuth } from '../../hooks/auth.jsx';
import { useState } from 'react';

import { Container, Form, Background } from './SignIn.js';

import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input/Input.jsx';
import { Button } from '../../components/Button/Button.jsx';

export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn} = useAuth();

    function handleSignIn(){
        signIn({ email, password });
    }

    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>
                <h2>Faça seu login</h2>
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={ e => setEmail(e.target.value) }
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={ e => setPassword(e.target.value) }
                />
                <Button tittle="Entrar" onClick={handleSignIn}/>

                <Link to="/sign-up">Criar conta</Link>
            </Form>
            <Background/>
        </Container>
    );
}