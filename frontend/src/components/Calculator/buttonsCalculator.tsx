import { useReducer } from 'react'
import rows from './keys'
import reducer from './operations'

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const isOperator = (val: React.ReactNode) => {
    return !isNaN(Number(val)) || val === '.' || val === '=';
  }

  return (
    <div
      className={`button-wrapper ${
        isOperator(props.children) ? null : 'operator'
      }`}
      onClick={props.onClick}>
      {props.children}
    </div>
  )
}

interface InputProps {
  input: React.ReactNode;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className='input'>
      {props.input}
    </div>
  )
}

interface EqualProps {
  children: React.ReactNode;
  onClick: () => void;
}

const EqualButton: React.FC<EqualProps> = (props) => {
  return (
    <div className="equal-btn" onClick={props.onClick}>
      {props.children}
    </div>
  )
}


const Buttons = () => {

  const [state, dispatch] = useReducer(reducer, '');

  return(
    <div className='Casio'>
      <Input input={state}></Input>
      <div className="row">
        {rows.row1.map(x =>
          <Button key={`row1${x.type}${x.param}`} onClick={() => dispatch({ type: `${x.type}`, param: `${x.param}` })}>
            {x.param || '√'}
          </Button>
        )}
      </div>
      <div className="row">
        {rows.row2.map(x =>
          <Button key={`row2${x.type}${x.param}`} onClick={() => dispatch({ type: `${x.type}`, param: `${x.param}` })}>
            {x.param || 'x²'}
          </Button>
        )}
      </div>
      <div className="row">
        {rows.row3.map(x =>
          <Button key={`row3${x.type}${x.param}`} onClick={() => dispatch({ type: `${x.type}`, param: `${x.param}` })}>
            {x.param}
          </Button>
        )}
      </div>
      <div className="row">
        {rows.row4.map(x =>
          <Button key={`row4${x.type}${x.param}`} onClick={() => dispatch({ type: `${x.type}`, param: `${x.param}` })}>
            {x.param || 'C'}
          </Button>
        )}
      </div>
      <div className="row">
        <EqualButton onClick={() => dispatch({ type: 'handleEqual', param:"" })}>
            =
        </EqualButton>
      </div>
    </div>
  )

}

export default Buttons
