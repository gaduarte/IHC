import React, { useRef, useState } from "react";
import { useCadastroEmpresaDispatch } from "./cadatro_empresa";
import { useNavigate } from "react-router-dom";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";


const CadastroEmpresa = () => {
    const nomeRef = useRef(null);
    const localidadeRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const dispatch = useCadastroEmpresaDispatch();

    const history = useNavigate();

    let nextId = 1;

    const handleSubmit = async(event) => {
        event.preventDefault();

        const username = nomeRef.current.value;
        const localidade = localidadeRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        try{
           const auth = getAuth();
           const userCredential = await createUserWithEmailAndPassword(auth, email, password);
           const user = userCredential.user;
           const uid = user.uid;
           const db = getFirestore();

           const userData = {
            email: email,
            password: password,
            username: username,
            localidade: localidade,
            lats_login: Date.now(),
           }

           const userDocRef = doc(db, "empresa", uid);

            try{
                await setDoc(userDocRef, userData);

                const newUser = {
                    type: "empresa",
                    username: username,
                    localidade: localidade,
                    email: email,
                    id: uid,
                }

                const configUsuario = {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newUser),
                };

                await fetch("http://localhost:3000/cadastro/empresa", configUsuario).then((response) => {
                    if(!response.ok) {
                        throw new Error("Erro na solicitação da API");

                    }
                    return response.json();

                }).then((response)=> response.json()).then((data)=> {
                    ('Usuário cadastro com sucesoo!');
                })
                .catch((error) => {
                    console.error("Erro ao enviar solicitação", error);
                });

                dispatch({
                    type: "added",
                    id: nextId++,
                    text: `Nome: ${username}, Localidade: ${localidade}, Email: ${email}, Senha: ${password},`
                });

                nomeRef.current.value = "";
                emailRef.current.value = "";
                localidadeRef.current.value = "";

                history("/");

            }catch (error) {
                console.error(error);
              }


        }catch (error) {
            console.error("Error:", error);
        }
    }

return(
    <div className="centeredForm">
        <form onSubmit={handleSubmit} className="cadastroForm">
            <div className="inputContainer">
                <input type="text" ref={nomeRef} className="inputField" name="username" placeholder="Nome" />
            </div>

            <div className="inputContainer">
                <input type="text" ref={localidadeRef} className="inputField" name="localidade" placeholder="Localidade" />
            </div>

            <div className="inputContainer">
                <input type="text" ref={emailRef} className="inputField" name="email" placeholder="Email"/>
            </div>

            <div className="inputContainer">
                <input type="password" ref={passwordRef} className="inputField" placeholder="Senha" />
            </div>

            <button type="submit" className="button">Cadastrar</button>
            <button className="cancelButton" onClick={() => history("/")}>Cancelar</button>
        </form>
    </div>
);

};

export default CadastroEmpresa;