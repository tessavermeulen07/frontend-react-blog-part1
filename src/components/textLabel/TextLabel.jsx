import './TextLabel.css';

function TextLabel({labelHTML, startTextLabel, typeOfLabel, idOfLabel, nameOfLabel, sizeOfLabel, valueOfLabel, onChangeOfLabel }) {

    return (
        <label
               htmlFor={labelHTML}>
            <p>{startTextLabel}</p>
            <input
            type={typeOfLabel}
            id={idOfLabel}
            name={nameOfLabel}
            size={sizeOfLabel}
            value={valueOfLabel}
            onChange={onChangeOfLabel} />
        </label>
    )
}

export default TextLabel;