import React from 'react';
import Header from '../components/Header';
import '../style/Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <section className="introduction-section">
        <div className="introduction-texts">
          <h1 className="title">Meu nome é Isadora Saraiva</h1>
          <h3 className="subtitle">Gosto de consertar coisas e resolver problemas</h3>
          <p className="regular-text">
            Vejo na tecnologia a possibilidade de evoluir como pessoa e profissional.
          </p>
          <p className="regular-text">
            Estou estudando para me tornar uma Desenvolvedora Full Stack.
            Em transição de carreira proveniente da Veterinária,
            considero como meus pontos fortes organização, proatividade e dedicação.
          </p>
          <p className="regular-text">Nas horas vagas, pode me encontrar lendo, jogando ou cozinhando.</p>
        </div>
        <img
          className="introduction-pic"
          src="https://picsum.photos/200"
          alt="profile-pic"
        />
      </section>
      <section>IDK WHAT TO SAY HERE</section>
    </div>
  );
}

export default Home;
