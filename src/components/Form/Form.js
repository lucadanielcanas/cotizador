import React, { useState } from 'react'
import PropTypes from 'prop-types';

import { Field, Label, Select, InputRadio, Button, Error } from './FormStyles';
import { getYearsDifference, calculateBrand, getPlan } from '../../helper';

const Form = ({ setSummary, setSpinner }) => {

    const [ info, setInfo ] = useState({
        mark: '',
        year: '',
        plan: ''
    });
    const [ error, setError ] = useState(false);

    //Extraer los valores del state
    const { mark, year, plan } = info;

    //Leer datos del formulario
    const getInfo = e => {
        setInfo({
            ...info,
            [e.target.name] : e.target.value
        });
    };

    //cuando el usuario presiona submit
    const handleSubmit = e => {
        e.preventDefault();
        
        if(mark.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        //base de 2000
        let result = 2000;

        //obtener la diferencia de años
        const difference = getYearsDifference(year);

        //por cada año hay que restar el 3%
        result -= (( difference * 3 ) * result ) / 100;
        
        //Americano 15%
        //Asiatico 5%
        //Europeo 30%
        result = calculateBrand(mark) * result;

        //Basico aumenta 20%
        //Completo aumenta 50%
        const planIncrement = getPlan(plan);
        result = parseFloat(planIncrement * result).toFixed(2);

        setSpinner(true);

        setTimeout(() => {
            setSpinner(false);

            setSummary({
                quotation: Number(result),
                info
            });
        }, 2000);
    }

    return(
        <form
            onSubmit={handleSubmit}
        >
            { error ? <Error> Todos los campos son obligatorios </Error> : null }
            <Field>
                <Label>Marca</Label>
                <Select
                    name="mark"
                    value={mark}
                    onChange={getInfo}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="american">Americano</option>
                    <option value="european">Europeo</option>
                    <option value="asian">Asiatico</option>
                </Select>
            </Field>
            <Field>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={getInfo}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>
            <Field>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio" 
                    name="plan" 
                    value="basic"
                    checked={plan === "basic"}
                    onChange={getInfo}
                />Básico
                <InputRadio 
                    type="radio" 
                    name="plan" 
                    value="complete"
                    checked={plan === "complete"}
                    onChange={getInfo}
                />Completo
            </Field>
            <Button type="submit">Cotizar</Button>
        </form>
    );
};

Form.propTypes = {
    setSummary: PropTypes.func.isRequired, 
    setSpinner: PropTypes.func.isRequired
}

export default Form;