// npm install @emailjs/browser --save
// https://dashboard.emailjs.com/admin/account

import { useState } from 'react';
import './App.css';
import emailjs from '@emailjs/browser';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(event) {    // e = evento
    event.preventDefault();      // previne reload da pagina
    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos");
      return;
    }

    const templatePrams = {    // {} = objeto
      from_name: name,
      message: message,
      email: email
    }
    emailjs.send('service_sht35q7', 'template_goegv2y', templatePrams, 'WnfIeOBGgNe5rvOmQ')  // recebe service_id, template, templatePrams, public_key(account/apikeys)
      .then((response) => {
        console.log('Email enviado', response.status, response.text)
        alert('Enviado com sucesso')
        setName('')
        setEmail('')
        setMessage('')
      }, (error) => {             // funçao anonima para capturar o erro(reject)    
        console.log('ERRO', error)
      })

  }

  return (
    <div className="container">
      <h1 className="title">Iguain91 - Contato</h1>

      <form className="form" onSubmit={sendEmail}> {/*onSubmit recebe EVENTO */}
        <input
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />

        <input
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />

        <textarea
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>

    </div>
  );
}

export default App;
