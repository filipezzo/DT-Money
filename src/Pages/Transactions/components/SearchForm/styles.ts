import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    background: ${(props) => props.theme['gray-900']};
    border-radius: 6px;
    border: 0;
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &:focus {
      outline: none;
      box-shadow: none;
      border-color: transparent;
    }
    &::placeholder {
      ${(props) => props.theme['gray-500']};
    }
  }

  button {
    background: transparent;
    padding: 1rem;
    border: 1px solid ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-300']};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    border-radius: 6px;
    font-weight: bold;

    &:hover {
      background: ${(props) => props.theme['green-500']};
      border-color: ${(props) => props.theme['green-500']};
      transition: all 0.2s;
      color: ${(props) => props.theme.white};
      cursor: pointer;
    }
  }
`
