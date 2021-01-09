import React from 'react';
import ReactDOM from 'react-dom';
import './LeftContent.css';
import 'bootswatch/dist/sketchy/bootstrap.min.css';

function LeftContent() {
  return (
  <div className="content_left">
    <div><p>Здесь мы описываем задачу</p></div>
    <div>
      <ul>
       <li>Описание элементов 1</li>
       <li>Описание элементов 1</li>
       <li>Описание элементов 1</li>
       <li>Описание элементов 1</li>
       <li>Описание элементов 1</li>
      </ul>
    </div>
    <div className="editor">
      <pre id="befor"> Начало задачи: скобки открываются </pre>
      <textarea id="code" defaultValue="поле ввода"></textarea>
      <pre id="after">скобки закрываются</pre>
    </div>
    <div className="content-left-button">
      //не получается выровнять по правому краю.
        <button type="button"
             className="btn  btn-secondary">
               Сквозь тернии к звездам
        </button>
    </div>
  </div>
  );
}

export default LeftContent;
