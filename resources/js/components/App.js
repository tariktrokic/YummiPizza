import '../../css/App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import AppContext from '../context/AppContext';
import PizzaModal from './Modals/PizzaModal';
import CheckoutModal from './Modals/CheckoutModal';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            pizzaCount: 0,
            pizzas: [],
            checkedPizza: null,
            pizzaOrder: {},
            orderCost: 0,
            purchasing: false
        };
        
        this.loading = <p className="loading">Loading ...</p>;

        this.checkedPizza = (pizzaIndex) => {
            this.setState({checkedPizza: pizzaIndex});
        };

        this.uncheckPizzaAndStopPurchasing = () => {
            this.setState({checkedPizza: null, purchasing: false});
        };

        this.addPizza = () => {
            this.setState((state) => ({pizzaCount: state.pizzaCount + 1, 
                    pizzaOrder: {...state.pizzaOrder, [state.pizzas[state.checkedPizza].name]: state.pizzaOrder[[state.pizzas[state.checkedPizza].name]] ? 
                    state.pizzaOrder[[state.pizzas[state.checkedPizza].name]] + 1: 1},
                    orderCost: Math.round((state.orderCost + 1 * state.pizzas[state.checkedPizza].price + Number.EPSILON) * 100) / 100}));
        };

        this.removePizza = () => {
            this.setState((state) => ({pizzaCount: state.pizzaOrder[[state.pizzas[state.checkedPizza].name]] ? state.pizzaCount - 1 : state.pizzaCount,
            pizzaOrder: {...state.pizzaOrder, [state.pizzas[state.checkedPizza].name]: state.pizzaOrder[[state.pizzas[state.checkedPizza].name]] ? 
            state.pizzaOrder[[state.pizzas[state.checkedPizza].name]] - 1: 0},   
            orderCost: state.pizzaOrder[[state.pizzas[state.checkedPizza].name]] ? Math.round((state.orderCost - 1 * state.pizzas[state.checkedPizza].price + Number.EPSILON) * 100) / 100 : state.orderCost}));
        };

        this.startPurchasing = () => {
            this.setState((state) => ({purchasing: !state.purchasing}));
        };

        this.submitOrder = async(e,pizzaOrder,orderCost,name,lastName,adress) => {
            e.persist();
            e.preventDefault();
            e.target.disabled = true;
            if ((name === undefined || name === '') || (lastName === undefined || lastName === '') || (adress === undefined || adress === '')) {
                alert('Fill out all fields please');
                e.target.disabled = false;
            } else {
                let formattedOrder = {};
                for (const [pizzaName,pizzaAmount] of Object.entries(pizzaOrder)) {
                    if (pizzaAmount !== 0) {
                        formattedOrder[pizzaName] = pizzaAmount;
                    };
                };
                try {
                    let response = await axios.post('/api/orders', {name,'last_name': lastName,adress,'cost':orderCost,'order':JSON.stringify(formattedOrder)});
                    if (response.status === 201) {
                        alert('Order sent!');
                        this.setState({
                            pizzaCount: 0,
                            checkedPizza: null,
                            pizzaOrder: {},
                            orderCost: 0,
                            purchasing: false
                        });
                    }
                } catch (e) {
                    alert('Oops. Something went wrong!')
                }
                e.target.disabled = false;
            };
        };
    };

      async componentDidMount() {
          let pizzaList = await axios.get('/api/pizzas');
          this.loading = null;
          this.setState({pizzas: pizzaList.data});
      };

    render() {
        return (
            <AppContext.Provider value = {{pizzaCount: this.state.pizzaCount, 
            pizzas: this.state.pizzas, 
            checkedPizza: this.checkedPizza, 
            startPurchasing: this.startPurchasing,
            submitOrder: this.submitOrder,
            uncheckPizzaAndStopPurchasing : this.uncheckPizzaAndStopPurchasing}}>
                <div className="container">
                    <Header/>
                    <Menu/>
                    {this.loading}
                    {this.state.checkedPizza !== null ? 
                    <PizzaModal 
                        pizzaName={this.state.pizzas[this.state.checkedPizza].name} 
                        pizzaPrice = {this.state.pizzas[this.state.checkedPizza].price} 
                        removePizza = {this.removePizza} 
                        addPizza = {this.addPizza}
                        pizzaOrder = {this.state.pizzaOrder}
                        uncheckPizzaAndStopPurchasing = {this.uncheckPizzaAndStopPurchasing}
                    /> : null}
                    {this.state.purchasing ? 
                        <CheckoutModal
                            pizzaOrder = {this.state.pizzaOrder}
                            orderCost = {this.state.orderCost}
                            pizzaCount = {this.state.pizzaCount}
                            uncheckPizzaAndStopPurchasing = {this.uncheckPizzaAndStopPurchasing}
                        /> : null}
                    <footer>Made with love by Tarik Trokic - Contact: tariktrokic@gmail.com</footer>
                </div>
            </AppContext.Provider>
        )
    }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
