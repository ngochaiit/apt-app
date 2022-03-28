/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'

import Table from './components/Table'
import { fetchList, update } from '../src/store/employee/employeeSlice'
import {employeeSelector} from './selector/employeeSelector'
import styled from 'styled-components'
import useModal from './components/Modal/useModal';
import Modal from './components/Modal/Modal';
import SwitchComponent from './components/Switch'

const Button = styled.button`
  font-size: 1em;
  margin: 1em 1em 1em 0;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background: #ec5990;
  color: white
`;

const Content = styled.div`
  padding: 30px
  display: 'flex'
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const Label = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: black;
  font-size: 14px;
  font-weight: 200;
`;

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid black;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`;


function App() {
  const dispatch = useDispatch();
  const employeeData = useSelector(employeeSelector)
  const {showModal, toggleValue} = useModal()
  const [client, setClient] = useState({
    id: '',
    email: '',
    isActive: false,
    name: ''
  })
  

  const columns = [
    {
      id: 'name',
      title: 'Name',
    },
    {
      id: 'email',
      title: 'Email',
    },
    {
      id: 'isActive',
      title: 'Status',
      customRender: (item : any) => <div>{item.isActive ? 'ACTIVE' : 'DEACTIVATED'}</div>
    },
    {
      id: 'action',
      title: 'Action',
      customRender: (item : any) => renderUiButton( item )
    },
  ]

  useEffect(() => {
    dispatch(fetchList())
  },[dispatch])


  const renderUiButton = (item: any) => {
    return <>
      {item.isActive ? <div> 
        <Button type="button" onClick={() => {
          setClient(item)
          toggleValue()
        }}>Update</Button>
      </div> : ''}
    </>
  }

  const onChangeStatus = () => {
    setClient({ ...client, isActive: !client.isActive})
  }

  const onSuccess = () => {
    toggleValue()
  }

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    dispatch(update({payload: client, onSuccess: onSuccess}))
    event.preventDefault();
  }


  return (
    <div className="container mx-auto">
      <Table data={employeeData.data} columns={columns}/>
      <Modal
        title={'Change Client Information'}
        isOpen={showModal }
        onClose={toggleValue}
      >
        <Content>
          <Form onSubmit={submitForm}>
            <Label>Name:</Label>
            <Input
              name="name"
              type="text"
              value={client.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setClient({ ...client, name: e.target.value})}
            />
            <Label>Email</Label>
            <Input
              name="email"
              type="email"
              value={client.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setClient({ ...client, email: e.target.value})}
            />
            <Label>Status:</Label>
            <SwitchComponent checked={client.isActive} onText='Active' offText="inActive" onChange={onChangeStatus} />
            <Button>Submit</Button>
            <Button onClick={toggleValue}>Cancel</Button>
          </Form>
        </Content>
      </Modal>
    </div>
  );
}

export default App;
