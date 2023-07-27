import { useState } from 'react';

import Input from '../Input';

import styles from './index.module.scss';

import Button from '../Button';
import Checkbox from '../Checkbox';
import Select from '../Select';

// Input = ({ label, name, type, value, inputHandler }: InputType)

const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
];

const MainForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        ph: '',
        relation: '',
        potitical: '',
        music: '',
    });

    const inputHandler = e => {
        const { name, target } = e?.target;

        setFormData(prevData => {
            return {
                ...prevData,
                [name]: target,
            };
        });
    };

    return (
        <form className={styles.mainForm}>
            <Input label="Name" name="name" type="text" value={formData?.name} inputHandler={inputHandler} />
            <Input label="Phone no" name="ph" type="number" value={formData?.ph} inputHandler={inputHandler} />
            <Input
                label="How do you know the birthday boy"
                name="relation"
                type="text"
                value={formData?.relation}
                inputHandler={inputHandler}
            />
            <Input
                label="Political leaning"
                name="potitical"
                type="text"
                value={formData?.potitical}
                inputHandler={inputHandler}
            />

            {/* <Checkbox label="Food" /> */}

            <Select
                name="music"
                label="Type of music"
                options={options}
                value={formData?.music}
                onChange={inputHandler}
            />

            <Button text="Submit" />
        </form>
    );
};

export default MainForm;
