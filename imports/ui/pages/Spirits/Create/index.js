import {Meteor} from 'meteor/meteor';
import React from 'react';
import productionSteps from '/imports/productionSteps';
import PageHeader from '/imports/ui/components/PageHeader';
import Input from '/imports/ui/components/Input';
import InputGroup from '/imports/ui/components/InputGroup';
import Button from '/imports/ui/components/Button';
import ProductionProcess from '/imports/ui/components/ProductionProcess';
import {create} from '/imports/api/spirits/methods';

class SpiritsCreatePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      abv: 0,
      recipe: '',
      process: [productionSteps[0]],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleInputChange.bind(this, 'name');
    this.handleABVChange = this.handleInputChange.bind(this, 'abv');
    this.handleRecipeChange = this.handleInputChange.bind(this, 'recipe');
    this.handleProcessChange = this.handleProcessChange.bind(this);
  }

  handleInputChange(key, event) {
    this.setState({[key]: event.target.value});
  }

  handleProcessChange(process) {
    this.setState({process});
  }

  handleSubmit(event) {
    event.preventDefault();
    const {name, abv, recipe, process} = this.state;
    create.call({name, abv: parseFloat(abv), recipe, process}, (err, id) => {
      if (!err) this.props.history.push(`/spirits/${id}`);
    });
  }

  render() {
    const {name, abv, recipe} = this.state;

    return (
        <div>
          <PageHeader title="Opret" subtitle="Spirits"/>

          <form onSubmit={this.handleSubmit}>
            <InputGroup ratio="10:2">
              <Input label="Navn" value={name} onChange={this.handleNameChange}/>
              <Input label="Alkohol" value={abv} onChange={this.handleABVChange}/>
            </InputGroup>

            <Input label="Opskrift" value={recipe} onChange={this.handleRecipeChange}/>
            <ProductionProcess value={this.state.process} onChange={this.handleProcessChange}/>
            <Button submit color="green">Opret</Button>
          </form>
        </div>
    );
  }
}

export default SpiritsCreatePage;