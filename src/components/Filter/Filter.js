import react from "react";

const Filter = ({value, onChange}) => {
    return (
        <label>Find contacts by name
            <input
            type="text"
            value={value}
            onChange={onChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
    )
}

export default Filter;