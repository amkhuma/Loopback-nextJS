import { List, Segment, Label, Dropdown } from 'semantic-ui-react'

class Prices extends React.Component {
    state = {
        currency : 'USD'
    }

    
    changeCurrencyState = (e, { value }) => {
        this.setState({ currency : value })
    }

    render () {
        let list = "";
        const Currencyoptions = [
            { key: 'USD',text: 'USD',value: 'USD',content: 'USD' },
            { key: 'GBP',text: 'GBP',value: 'GBP',content: 'GBP' },
            { key: 'EUR',text: 'EUR',value: 'EUR',content: 'EUR' },
          ]

        if (this.state.currency === 'USD') 
        {
            list = <List.Item>
                        <List.Content>
                            Bitcoin rate for {this.props.bpi.USD.description}: <Label color='blue'>
                            {this.props.bpi.USD.code}</Label>
                            <strong> {this.props.bpi.USD.rate}</strong>
                        </List.Content>
                    </List.Item>
        } 
        else if (this.state.currency === 'GBP')
        {
            list = <List.Item>
                        <List.Content>
                            Bitcoin rate for {this.props.bpi.GBP.description}: <Label color='blue'>
                            {this.props.bpi.GBP.code}</Label>
                            <strong> {this.props.bpi.GBP.rate}</strong>
                        </List.Content>
                    </List.Item>
        }
        else if (this.state.currency === 'EUR')
        {
            list = <List.Item>
                    <List.Content>
                        Bitcoin rate for {this.props.bpi.EUR.description}: <Label color='blue'>
                        {this.props.bpi.EUR.code}</Label>
                        <strong> {this.props.bpi.EUR.rate}</strong>
                    </List.Content>
                </List.Item>
        }

        return(
        <div>
            <Segment>
                <List divided relaxed>
                    {list}
                </List>
            </Segment>
            <Dropdown placeholder='Select Currency' fluid search selection options={Currencyoptions} onChange={this.changeCurrencyState}/>
        </div>);
    }
}

export default Prices   