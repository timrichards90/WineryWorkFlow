import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import './Crusher.css';

function Crusher() {
    const location = useLocation();
    const { date, batchCode, variety } = location.state || {};
    const [crusherNumber, setCrusherNumber] = useState('');
    const [destem, setDestem] = useState('');
    const [rollers, setRollers] = useState('');
    const [mustChillerTemp, setMustChillerTemp] = useState('');
    const [enzyme, setEnzyme] = useState('');
    const [pms, setPms] = useState('');
    const [tartaric, setTartaric] = useState('');
    const [crushTo, setCrushTo] = useState('');
    const [rotationsWhileFilling, setRotationsWhileFilling] = useState('');
    const [pressNumbers, setPressNumbers] = useState('');
    const [tonnesPerPress, setTonnesPerPress] = useState('');
    const [pressProgram, setPressProgram] = useState('');
    const [freeRunTanks, setFreeRunTanks] = useState('');
    const [freeRunDip, setFreeRunDip] = useState('');
    const [pressingsTanks, setPressingsTanks] = useState('');
    const [pressingsDip, setPressingsDip] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
        event.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid-container">
            <label>
                Date:
                <input type="date" value={date} disabled/>
            </label>
            <label>
                Batch Code:
                <input type="text" value={batchCode} disabled/>
            </label>
            <label>
                Variety:
                <input type="text" value={variety} disabled/>
            </label>
                Crusher Number:
                <select value={crusherNumber} onChange={e => setCrusherNumber(e.target.value)}>
                    <option value="">Select a crusher number</option>
                    <option value="C1">C1</option>
                    <option value="C2">C2</option>
                </select>
            <label>
                Destem:
                <select value={destem} onChange={e => setDestem(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="YES">YES</option>
                    <option value="NO">NO</option>
                </select>
            </label>
            <label>
                Rollers:
                <select value={rollers} onChange={e => setRollers(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="IN">IN</option>
                    <option value="OUT">OUT</option>
                </select>
            </label>
            <label>
                Must Chiller Temp.:
                <input type="number" value={mustChillerTemp} onChange={e => setMustChillerTemp(e.target.value)}/> °C
            </label>
            <label>
                Additions at Crusher - Enzyme:
                <input type="number" value={enzyme} onChange={e => setEnzyme(e.target.value)}/> mL/T
            </label>
            <label>
                PMS:
                <input type="number" value={pms} onChange={e => setPms(e.target.value)}/> g/bin
            </label>
            <label>
                Tartaric:
                <input type="number" value={tartaric} onChange={e => setTartaric(e.target.value)}/> kg/bin to pH3.40
            </label>
            <label>
                Crush to:
                <select value={crushTo} onChange={e => setCrushTo(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="Bag Presses">Bag Presses</option>
                    <option value="Screw Presses">Screw Presses</option>
                    <option value="Tanks">Tanks</option>
                </select>
            </label>
            <label>
                Rotations while filling:
                <select value={rotationsWhileFilling} onChange={e => setRotationsWhileFilling(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="YES">YES</option>
                    <option value="NO">NO</option>
                </select>
            </label>
            <label>
                Press No's:
                <select value={pressNumbers} onChange={e => setPressNumbers(e.target.value)}>
                    <option value="">Select a press number</option>
                    <option value="P1">P1</option>
                    <option value="P2">P2</option>
                    <option value="P3">P3</option>
                    <option value="P4">P4</option>
                    <option value="P5">P5</option>
                    <option value="P6">P6</option>
                    <option value="P7">P7</option>
                </select>
            </label>
            <label>
                Tonnes / Press:
                <input type="number" value={tonnesPerPress} onChange={e => setTonnesPerPress(e.target.value)}/>
            </label>
            <label>
                Press Program:
                <select value={pressProgram} onChange={e => setPressProgram(e.target.value)}>
                    <option value="">Select a press program</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
            </label>
            <label>
                Free Run Tanks:
                <input type="number" value={freeRunTanks} onChange={e => setFreeRunTanks(e.target.value)}/>
            </label>
            <label>
                Dip:
                <input type="number" value={freeRunDip} onChange={e => setFreeRunDip(e.target.value)}/>
            </label>
            <label>
                Pressings Tanks:
                <input type="number" value={pressingsTanks} onChange={e => setPressingsTanks(e.target.value)}/>
            </label>
            <label>
                Dip:
                <input type="number" value={pressingsDip} onChange={e => setPressingsDip(e.target.value)}/>
            </label>
        </div>
    <input type="submit" value="Submit"/>
</form>
)
    ;
}

export default Crusher;