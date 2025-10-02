# custom-components-lib-ds

## Task

https://drive.google.com/file/d/1C148FRnWfXVoRDslDWcYac3bEhebdIAV/view

## How to run the app

This library is available on npm and can be installed in your project easily. Follow the steps below to get started.

### 1. Install the Library

You can install the library using npm or yarn. Run one of the following commands in your project directory:

Using npm:

```bash
npm install custom-components-lib-ds
```

### 2. Import Components

```
import { Button, Checkbox, Modal, FormControl, InputLabel, Select, MenuItem }from 'custom-components-lib-ds';
```

### 3. Example Usage

```
import React, { useState } from 'react';
import { Button, Modal, FormControl, InputLabel, Select, MenuItem } from 'custom-components-lib-ds';

const App = () => {
  const [age, setAge] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal open={open} onClose={handleClose}>
        <FormControl>
          <InputLabel id="age-label">Age</InputLabel>
          <Select labelId="age-label" value={age} onChange={handleChange}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Modal>
    </div>
  );
};

export default App;
```

### 4. Running the App

After setting up your components, make sure you have a running React application. You can typically do this by using:

```bash
npm start
```
