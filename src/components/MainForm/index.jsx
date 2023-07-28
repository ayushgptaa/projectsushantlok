'use client';

import { useState, useEffect } from 'react';

import Input from '../Input';

import styles from './index.module.scss';

import Button from '../Button';
import Checkbox from '../Checkbox';
import Select from '../Select';

// Input = ({ label, name, type, value, inputHandler }: InputType)

const musicOption = [
    { label: 'Punjabi', value: 'punjabi' },
    { label: 'Diljit', value: 'diljit' },
    { label: 'Honey Singh', value: 'honeysingh' },
    { label: 'English', value: 'english', disabled: true },
    { label: 'Kpop', value: 'kpop', disabled: true },
];

const foodOption = [
    { label: 'Non-veg', value: 'nonveg' },
    { label: 'veg', value: 'veg', disabled: true },
];

const clubOption = [
    { label: 'Ohh, please', value: 'ohplease' },
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
    { label: 'What is Adventure club?', value: 'wiac' },
];

const stayOption = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no', disabled: true },
];

const MainForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        ph: '',
        relation: '',
        potitical: '',
        music: '',
        food: '',
        club: '',
        stay: '',
        capacity: '',
        suggestions: '',
    });

    const inputHandler = e => {
        const { name, value } = e?.target;

        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    };

    return (
        <form
            className={styles.mainForm}
            onSubmit={e => {
                e.preventDefault();
                console.log(formData);
            }}>
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

            <Select
                name="food"
                label="Food choice"
                options={foodOption}
                value={formData?.food}
                onChange={inputHandler}
            />

            <Select
                name="music"
                label="Type of music"
                options={musicOption}
                value={formData?.music}
                onChange={inputHandler}
            />

            <Select
                name="club"
                label="Are you in Adevnture club?"
                options={clubOption}
                value={formData?.club}
                onChange={inputHandler}
            />

            <Select
                name="stay"
                label="Will you stay for after party?"
                options={stayOption}
                value={formData?.stay}
                onChange={inputHandler}
            />

            <Input
                label="What is your drinking capacity? (answer carefully)"
                name="capacity"
                type="text"
                value={formData?.capacity}
                inputHandler={inputHandler}
            />

            <Input
                label="Any suggestions for the party?"
                name="suggestions"
                type="text"
                value={formData?.suggestions}
                inputHandler={inputHandler}
            />

            <Button text="Submit" />
        </form>
    );
};

export default MainForm;
