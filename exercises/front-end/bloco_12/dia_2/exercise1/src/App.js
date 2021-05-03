import React from 'react'
import PersonalData from './PersonalData'
import States from './States';
import Residence from './Residence';
import Resume from './Resume';
import SubmitButton from './SubmitButton'

class App extends React.Component {

  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleSendClick = this.handleSendClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: 'AC',
      residence: '',
      curriculum: '',
      position: '',
      description: ''
    }
  }

  handleChange(event) {
    const { name } = event.target
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value 
    if (name === 'name') {
      this.setState({[name]: value.toUpperCase()})
    } else {
      this.setState({[name]: value})
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleSendClick(event) {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Informações pessoais</legend>
            <PersonalData text='*Nome:' name='name' value={this.state.name} handleChange={this.handleChange} />
            <PersonalData text='*Email:' name='email' value={this.state.email} handleChange={this.handleChange} />
            <PersonalData text='*CPF:' name='cpf' value={this.state.cpf} handleChange={this.handleChange} />
            <PersonalData text='*Endereço:' name='address' value={this.state.address} handleChange={this.handleChange} />
            <PersonalData text='*Cidade:' name='city' value={this.state.city} handleChange={this.handleChange} />
            <States text='*Estado:' name='state' value={this.state.state} handleChange={this.handleChange} />
            <Residence text='*Residencia:' name='residence' handleChange={this.handleChange} />
          </fieldset> 
          <fieldset>
            <legend>Resumo Profissional</legend>
            <Resume text='Resumo do currículo:'name='curriculum' value={this.state.curriculum} handleChange={this.handleChange} length='1000' />
            <Resume text='Ultimo cargo:' name='position' value={this.state.position} handleChange={this.handleChange} length='40'/>
            <PersonalData text='Descrição do último cargo:' name='description' value={this.state.description} handleChange={this.handleChange} />
          </fieldset>
          <SubmitButton handleSendClick={this.handleSendClick} infos={this.state}/>
        </form>
      </div>
    );
  }
}

export default App;
