import * as math from 'mathjs'

const operatorsArr = ['*', '/', '+', '-','(']

function Sin(state: string) {
  //const reg = new RegExp("/sin(*)/g");
  //const reg = /sin\(*\)/;
  //console.log(state)
  const val = state.replace(/sin\(.*\)/g,function(str){
    //console.log(str)
    return (str.substring(0, str.length - 1) + ' deg)')
  })
  //console.log(val)
  return val
};

function Cos(state: string) {
  const val = state.replace(/cos\(.*\)/g,function(str){
    console.log(str)
    return (str.substring(0, str.length - 1) + ' deg)')
  })
  console.log(val)
  return val
};

function Log(state: string) {
  const val = state.replace(/log\(.*\)/g,function(str){
    console.log(str)
    return (str.substring(0, str.length - 1) + ', 10)')
  })
  console.log(val)
  return val
};

const actions: { [key: string]: (state: string, param: string) => string } = {
  handleClear() {
    console.clear()
    return ''
  },

  addtoInputNum(state: string, param: string) {
    if ((state[state.length - 1] === '-' && param === '-') || (operatorsArr.includes(state[state.length - 1]) && operatorsArr.includes(param))) {
      return state
    } else {
      return state + param
    }
  },

  addtoInputOpr(state: string, param: string) {
    if (state === '' || (operatorsArr.includes(state[state.length - 1]) && operatorsArr.includes(param))) {
      return state
    } else {
      return state + param
    }
  },

  handleRoot(state: string) {
    if (state === '') {
      return state
    } else {
      return String(Math.sqrt(Number(state)))
    }
  },

  handleSquare(state: string) {
    if (state === '') {
      return state
    } else {
      return String(Math.pow(Number(state), 2))
    }
  },

  handleCube(state: string) {
    if (state === '') {
      return state
    } else {
      return String(Math.pow(Number(state), 3))
    }
  },

  handleSin(state: string) {
    return state + 'sin('
  },

  handleCos(state: string) {
    return state + 'cos('
  },

  handleLog(state: string) {
    return state + 'log('
  },

  handleEqual(state: string) {
    if (state === '') {
      return state
    }
    else if(state.includes('sin('))
    {
      try {
        const result = math.evaluate(Sin(state))
        return result
      }
      catch (err: any) {
        console.log('An error occurred:', err.message)
        console.clear()
        return 'NaN'
      }
    }
    else if(state.includes('cos('))
    {
      try {
        const result = math.evaluate(Cos(state))
        return result
      }
      catch (err: any) {
        console.log('An error occurred:', err.message)
        console.clear()
        return 'NaN'
      }
    }
    else if(state.includes('log('))
    {
      try {
        const result = math.evaluate(Log(state))
        return result
      }
      catch (err: any) {
        console.log('An error occurred:', err.message)
        console.clear()
        return 'NaN'
      }
    }
    else {
      try {
        const result = math.evaluate(state)
        return result
      }
      catch (err: any) {
        console.log('An error occurred:', err.message)
        console.clear()
        return 'NaN'
      }
    }
  },

};

type ActionType = {
  type: string;
  param: string;
};

export default function reducer(state: string, action: ActionType) {
  let type = action.type
  let param = action.param
  return actions[type](state, param)
};
