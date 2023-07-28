'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Input from '../Input';
import Button from '../Button';
import Select from '../Select';

import styles from './index.module.scss';

const musicOption = [
    { label: 'Punjabi', value: 'punjabi' },
    { label: 'Diljit', value: 'diljit' },
    { label: 'Honey Singh', value: 'honeysingh' },
    { label: 'Dogri', value: 'dogri' },
    { label: 'English', value: 'english', disabled: true },
    { label: 'Kpop', value: 'kpop', disabled: true },
];

const foodOption = [
    { label: 'Non-veg', value: 'nonveg' },
    { label: 'I will not eat anything', value: 'no' },
    { label: 'I will order on my own', value: 'order' },
    { label: 'veg', value: 'veg', disabled: true },
];

const clubOption = [
    { label: 'I HAVE A LIFE', value: 'life' },
    { label: 'Yes', value: 'yes' },
    { label: 'What is Adventure club?', value: 'wiac' },
];

const stayOption = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
];

const MainForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        ph: '',
        relation: '',
        potitical: 'BJP',
        music: '',
        food: '',
        club: '',
        stay: '',
        capacity: '',
        suggestions: '',
        time: '',
    });

    const router = useRouter();

    const inputHandler = e => {
        const { name, value } = e?.target;

        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    };

    const saveFormResponse = async formData => {
        console.log(formData);
        const res = await fetch('https://project-x-ec7e7-default-rtdb.firebaseio.com/formResponses.json', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (res?.status === 200) {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('password');
                localStorage.setItem('completed', 'true');
                router.push('/');
            }
        }
    };

    return (
        <>
            <form
                className={styles.mainForm}
                onSubmit={e => {
                    e.preventDefault();
                    saveFormResponse(formData);
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
                    label="Are you in Adventure club?"
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
                    label="What is your drinking capacity?"
                    secondarytext="Answer carefully"
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

                <Input
                    label="Time of arrival"
                    name="time"
                    type="text"
                    value={formData?.time}
                    inputHandler={inputHandler}
                />

                <Button text="Submit" />
            </form>
        </>
    );
};

export default MainForm;
