import React from 'react'
import {render, act} from '@testing-library/react'
import axios from 'axios'
import Todos from '../components/Todos'

it('Render todos', async () => {
    let component

    jest
        .spyOn(axios, 'get')
        .mockImplementation(() => {
            Promise.resolve({data: [{id: 1, title: 'test tile'}]})
        })

    await act(async () => {
        const {container} = render(<Todos/>)
        component = container

    })

    expect(component.textContent).toContain('test title')


})