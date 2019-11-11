import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react'
import GitSearch from './gitsearch/GitSearch';


test('can render with redux with defaults', () => { render(<GitSearch />)
})


