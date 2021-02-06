import React from 'react';


const TransformTextForJsx  = (thisSetState) => {

        try {
          let clone = thisSetState.slice(0) // клонирую state
          const separation = clone[2].task //убираю лишнии пробелы и точки с запятой
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
          console.log(...obj)  
        }
    
        catch {
          console.log('logic working')
        }
      };
      export default {TransformTextForJsx};

    //   test2 = () => {

    //     try {
    //       let clone = this.state.level[this.state.chLevel].slice(0) // клонирую state
    //       const separation = clone[2].task //убираю лишнии пробелы и точки с запятой
    //         .replace(/\s/g, '')
    //         .split(';')
    //         .filter(function (item) {
    //           return item !== "";
    //         });
    
    //       const transform = separation.map(function (item) { // убираю лишнее и делаю заглавные буквы
    
    //         return (item.split(':')[0])
    //           .split('-')
    //           .map(
    //             (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    //           ).join('') + ':' + item.split(':')[1]
    //       });
    
    //       const obj = transform.map(function (item) { // делаю подходящий для JSX формат.
    //         const newObj = {};
    //         newObj[item.split(':')[0]] = item.split(':')[1]
    //         return newObj;
    //       })
    //       console.log(...obj)
    //       this.setState({
    //         textElem: obj[0]
    //       })
    //       console.log(this.state.level)
        
    //     }
    
    //     catch {
    //       console.log('err test2 in outPut')
    //     }
    //   };



    // setLevelDown = () => {
    //   let count = this.state.chLevel;
    //   if (count < this.state.level.length & count !== 0) {
    //     count--;
    //   }
    //   this.setState({
    //     chLevel: count
    //   })
    // };
  
    // setLevelUp = () => {
    //   let count = this.state.chLevel;
    //   if (count < (this.state.level.length - 1)) {
    //     count++;
    //   }
    //   this.setState({
    //     chLevel: count
    //   })
    // };

    // test = (inpt) => { // получаю из инпута текс, отдаю в стейт
    //   const newDisplay = this.state.level
    //   newDisplay[this.state.chLevel][2].task = (inpt)
    //   this.setState({
    //     level: newDisplay
    //   })
    // };