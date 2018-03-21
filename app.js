class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bought: false
        };
    }

    onListItemHover() {
        this.setState({
            bought: !this.state.bought
        });
    }

    render() {
        var style = {
            fontWeight: this.state.bought ? 'bold' : 'normal'
        };

        return (
            <li style={style} onMouseOver={() => this.onListItemHover()}> {this.props.groceryItems}</li>
        )
    }
}

var GroceryList = (props) => (

    <ul>
        {props.groceryItems.map(item => 
            <GroceryListItem groceryItems ={item} />
        )}
    </ul>
)

ReactDOM.render(<GroceryList groceryItems={['Candy', 'Chocolate', 'Ice Cream']} />, document.getElementById('app'));
