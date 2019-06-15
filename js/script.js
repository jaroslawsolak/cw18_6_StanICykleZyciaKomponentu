var Counter = React.createClass({
  getInitialState: function () {
    return {
      counter: 0
    };
  },

  getDefaultProps: function () {
    console.log("getDefaultProps - ustawia domyślne wartości propsów (które nie zostały przekazane do komponentu)");
  },

  componentWillMount: function () {
    console.log("ComponentWillMount - jest wywoływana zaraz przed wykonaniem metody render. Warto zaznaczyć, że ustawienie stanu w tej metodzie nie spowoduje przerenderowania komponentu.");
  },

  componentDidMount: function () {
    console.log("componentDidMount - W chwili wykonywania tej metody, nasz komponent widnieje już na stronie (jest zamontowany w drzewie DOM)");
  },

  increment: function () {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function () {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  render: function () {
    return React.createElement('div', {
        onClick: this.increment
      },
      React.createElement('span', {}, 'Licznik dodawania ' + this.state.counter)
    );
  }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));


//second element

var Counter1 = React.createClass({
  getInitialState: function () {
    return {
      counter: 0
    };
  },

  increment: function () {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function () {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  render: function () {
    return React.createElement('div', {
        onClick: this.decrement
      },
      React.createElement('span', {}, 'Licznik odejmowania ' + this.state.counter)
    );
  }
});

var element1 = React.createElement(Counter1);
ReactDOM.render(element1, document.getElementById('app1'));