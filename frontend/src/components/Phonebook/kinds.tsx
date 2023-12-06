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
    marginBottom: 10
  },
  {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    border: '5px solid red',
    borderRadius:11,
    padding: 10,
    marginBottom: 10
  }
]

export interface BookProps {
  onData: (childData: any) => Promise<void>;
  note: Person;
  filter: string;
  updateName: (newValue: any) => Promise<void>;
  Name: Person[];
}

export interface AddInfoProps {
  updateName: (newValue: any) => Promise<void>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  Name: Person[];
}

export interface EditProps {
  data: string;
  updateName: (newValue: any) => Promise<void>;
  Name: Person[];
}
