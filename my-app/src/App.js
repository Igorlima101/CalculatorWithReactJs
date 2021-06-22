import React, { Component } from "react";
import "./App.css";
import Button from "./Button";
import Input from "./Input";
import  LimparButton from  "./BotaoLimpar";
import ApagarButton from "./BotaoApagar";
import SomaButton from "./ButtonSoma";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      numeroAnterior: "",
      numeroAtual: "",
      operador: ""
    };
  }

  adiciona = (val) => {
    this.setState({ input: this.state.input + val });
  };

  adicionaPonto = (val) => {
  
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  adicionaZero = (val) => {

    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };

  limparInput = () => {
    this.setState({ input: "" });
  };

  backspace = () => {
    this.setState({
        input: this.state.input.slice(0, -1)
    })
  }

  soma = () => {
    this.state.numeroAnterior = this.state.input;
    this.setState({ input: "" });
    this.state.operador = "soma";
  };

  subtracao = () => {
    this.state.numeroAnterior = this.state.input;
    this.setState({ input: "" });
    this.state.operador = "subtracao";
  };

  multiplicacao = () => {
    this.state.numeroAnterior = this.state.input;
    this.setState({ input: "" });
    this.state.operador = "multiplicacao";
  };

  divisao = () => {
    this.state.numeroAnterior = this.state.input;
    this.setState({ input: "" });
    this.state.operador = "divisao";
  };

  calcular = () => {
    this.state.numeroAtual = this.state.input;

    if (this.state.operador === "soma") {
      this.setState({
        input:
        parseFloat(this.state.numeroAnterior) +
          parseFloat(this.state.numeroAtual)
      });
    } else if (this.state.operador === "subtracao") {
      this.setState({
        input:
        parseFloat(this.state.numeroAnterior) -
          parseFloat(this.state.numeroAtual)
      });
    } else if (this.state.operador === "multiplicacao") {
      this.setState({
        input:
          parseFloat(this.state.numeroAnterior) *
          parseFloat(this.state.numeroAtual)
      });
    } else if (this.state.operador === "divisao") {
      this.setState({
        input:
          parseFloat(this.state.numeroAnterior) /
          parseFloat(this.state.numeroAtual)
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Input>{this.state.input}</Input>
        <div className="calculadora">
            
            
            <Button handleClick={this.adiciona}>7</Button>
            <Button handleClick={this.adiciona}>8</Button>
            <Button handleClick={this.adiciona}>9</Button>
            <Button handleClick={this.adicionaPonto}>.</Button>
            <ApagarButton handleClear={this.backspace}>DEL</ApagarButton>
            
            

            <Button handleClick={this.adiciona}>4</Button>
            <Button handleClick={this.adiciona}>5</Button>
            <Button handleClick={this.adiciona}>6</Button>
            <Button handleClick={this.subtracao}>-</Button>
            <Button handleClick={this.multiplicacao}>*</Button>
  
            <Button handleClick={this.adiciona}>1</Button>
            <Button handleClick={this.adiciona}>2</Button>
            <Button handleClick={this.adiciona}>3</Button>
            

            <Button handleClick={this.divisao}>/</Button>

            
            <SomaButton handleClick={this.soma}>+</SomaButton>
            
            
            <Button handleClick={this.calcular}>=</Button>
            
            
            <Button handleClick={this.adicionaZero}>0</Button>
            <LimparButton handleClear={this.limparInput}>AC</LimparButton>
        </div>
        </div>
    );
  }
}

export default App;
