import { useState } from 'react'
import {GrFormNext, GrFormPrevious} from 'react-icons/gr';
import {FiSend} from 'react-icons/fi';
import UserForm from './components/UserForm/UserForm';
import ReviewForm from './components/ReviewForm/ReviewForm';
import Thanks from './components/Thanks/Thanks';
import './App.css'

//hooks
import { useForm } from './hooks/useForm';

function App() {

  const formComponents = [<UserForm/>,<ReviewForm/>,<Thanks/>];

  const {currentStep,currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents);

  return (
    <div className='app'>
      <div className='header'>
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </div>
      <div className='form-container'>
        <p>Etapas</p>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className='inputs-container'>{currentComponent}</div>
          <div className='action'>
            {!isFirstStep && (<button type='button' onClick={() => changeStep(currentStep -1)}>
              <GrFormPrevious></GrFormPrevious>
              <span>Voltar</span>
            </button>
            )};
            {!isLastStep ? (
            <button type='submit'>
              <span>Avançar</span>
              <GrFormNext></GrFormNext>
            </button>
            ): (
              <button type='button'>
              <span>Enviar</span>
              <FiSend></FiSend>
            </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
