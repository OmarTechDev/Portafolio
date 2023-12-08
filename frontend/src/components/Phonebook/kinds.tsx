import {FormEvent, MouseEvent} from 'react'

export interface FilterProps {
  filter: string;
  handleFilter: (value: string) => void;
};

export type SelectedStyle = {
  color: string;
  background: string;
  fontSize: number;
  border: string;
  borderRadius: number;
  padding: number;
  marginBottom: number;
};

export interface Person {
  id?: string;
  name: string;
  email?: string;
  number: string;
};

export const selectStyle = [
  {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    border: '5px solid green',
    borderRadius:11,
    padding: 10,
    marginBottom: 10,
    width: '50vw'
  },
  {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    border: '5px solid red',
    borderRadius:11,
    padding: 10,
    marginBottom: 10,
    width: '50vw'
  }
]

export interface NotebookProps {
  Name: Person[];
  filter: string;
  setData: (value: string) => void;
  updateName: (newValue: any) => Promise<void>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

export interface BookProps {
  onData: (childData: any) => Promise<void>;
  note: Person;
  filter: string;
  updateName: (newValue: any) => Promise<void>;
  Name: Person[];
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

export interface AddInfoProps {
  updateName: (newValue: any) => Promise<void>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  Name: Person[];
}

export interface AddFormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  newName: string;
  setNewName: (value: string) => void;
  newNumber: string;
  setNewNumber: (value: string) => void;
  newEmail: string;
  setNewEmail: (value: string) => void;
}

export interface EditProps {
  data: string;
  updateName: (newValue: any) => Promise<void>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  Name: Person[];
}

export interface EditFormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onCancel: (event: MouseEvent<HTMLButtonElement>) => void;
  newName: string;
  setNewName: (value: string) => void;
  newNumber: string;
  setNewNumber: (value: string) => void;
  newEmail: string;
  setNewEmail: (value: string) => void;
}
