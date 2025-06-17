import { useState } from 'react';
import styles from '../Accordion/Accordion.module.css';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    { question: "O que é React?", answer: "React é uma biblioteca JavaScript para construir interfaces de usuário." },
    { question: "O que é JSX?", answer: "JSX é uma extensão de sintaxe para JavaScript que parece com HTML." },
    { question: "O que é um Hook?", answer: "Hook é uma função especial do React que permite usar recursos como estado e ciclo de vida." },
    { question: "O que é useState?", answer: "useState é um Hook que permite adicionar o estado em componentes funcionais." },
  ];

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.item} ${activeIndex === index ? styles.open : ''}`}>
          <button className={styles.button} onClick={() => toggleAccordion(index)}>
            {item.question}
          </button>
          {activeIndex === index && (
            <p className={styles.answer}>{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
