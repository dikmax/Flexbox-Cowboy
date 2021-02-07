import React from 'react'

export const alt = (qwe)=>{
    console.log(qwe)
}

export const test2 = () => {

    try {
     const clone = this.state.newLev.slice() // клонирую state
      
     const separation = clone[6]//убираю лишнии пробелы и точки с запятой
        .replace(/\s/g, '')
       .split(';')
        .filter(function (item) {
           return item !== "";
       });
  
      const transform = separation.map(function (item) { // убираю лишнее и делаю заглавные буквы

        return (item.split(':')[0])
          .split('-')
          .map(
            (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)
          ).join('') + ':' + item.split(':')[1]
      });

   
      const obj = transform.map(function (item) { // делаю подходящий для JSX формат.
        const newObj = {};
        newObj[item.split(':')[0]] = item.split(':')[1]
        return newObj;
      })
     
    

    clone[2].task = obj[0]
      
    this.setState({
      newLev: clone
    }) 
    }

    catch {
      console.log('err test2 in outPut', console.error(this.error))
    }
  };
