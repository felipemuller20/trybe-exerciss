import React from 'react';
import { findByTestId, getByTestId, render } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Teste da aplicação toda', () => {

  afterEach(() => jest.clearAllMocks());

  it('renders App', () => {
    const { getByText, getByRole } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
    const searchButton = getByText(/search digimon/i);
    expect(searchButton).toBeInTheDocument();
    const searchBox = getByRole('textbox');
    expect(searchBox.value).toBe('');
  });

  it('Insere um valor na caixa de busca', () => {
    const { getByRole } = render(<App />);
    const searchBox = getByRole('textbox');

    userEvent.type(searchBox, 'Hello World');
    expect(searchBox.value).toBe('Hello World');
  })

  it('Inicia sem digimons na tela', () => {
    const { queryByTestId } = render(<App />);

    const digiName = queryByTestId('digimonName');
    expect(digiName).not.toBeInTheDocument();
  });

  it('Renderiza um digimon corretamente', async () => {
    const digimon = [{
      name:"Agumon",
      img:"https://digimon.shadowsmith.com/img/agumon.jpg",
      level:"Rookie",
    }];

    const response = {
      json: jest.fn().mockResolvedValue(digimon)
    };
    global.fetch = jest.fn().mockResolvedValue(response);

    const { getByRole, findByTestId } = render(<App />);
    const searchBox = getByRole('textbox');
    const searchBtn = getByRole('button', {
      name: /search digimon/i
    });
    userEvent.type(searchBox, 'Agumon');
    userEvent.click(searchBtn);

    const digiName = await findByTestId('digimonName');
    expect(digiName).toBeInTheDocument();

    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://digimon-api.vercel.app/api/digimon/name/Agumon')
  })

  it('Renderiza mensagem de erro caso não tenha o digimon', async () => {
    const error = {"ErrorMsg":"Lucasmon is not a Digimon in our database."};
    const response = {
      json: jest.fn().mockResolvedValue(error)
    };
    global.fetch = jest.fn().mockResolvedValue(response);

    const { getByRole, findByText } = render(<App />);
    const searchBox = getByRole('textbox');
    userEvent.type(searchBox, 'Lucasmon');
    const searchBtn = getByRole('button', {
      name: /search digimon/i,
    });
    userEvent.click(searchBtn);

    const errorReturn = await findByText('Lucasmon is not a Digimon in our database.');
    expect(errorReturn).toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://digimon-api.vercel.app/api/digimon/name/Lucasmon');
  })
});