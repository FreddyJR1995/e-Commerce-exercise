import './TypeFilter.css'
import PropTypes from 'prop-types'; 

function TypeFilter ({name, options, onCategoryChange}) {
    const handleSetCategoryChange = (event) => {
        onCategoryChange(event.target.id, event.target.checked);
    };
    return (
        <div className='TypeFilterContainer'>
            <h2>{name}:</h2>
            {options.map((option, id) => 
                <div
                    key={id}
                    className='CheckBox'
                >
                    <input type="checkbox" id={option.id} name={option.label} onChange={handleSetCategoryChange}/>
                    <label htmlFor={option.id}>{option.label}</label>
                </div>
            )}
        </div>
    )
}

TypeFilter.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })).isRequired,
    onCategoryChange: PropTypes.func.isRequired
};

export { TypeFilter }