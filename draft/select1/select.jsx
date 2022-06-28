import styles from './select.css'
import PropTypes from 'prop-types'

export const OrderSelect = ({
     placeholder,
     options,
    ...props
    }) => {

    return (
        <>
            <div className={styles.order_select}>
                <label className={styles.label}>
                    {placeholder}
                </label>
                <select size="1" name="OrderSelect" className={styles.select}>
                    <option value="" disabled defaultValue>{placeholder}</option>
                    {options.map((optionObj, i) => (
                        <option key={i} value={optionObj.value}>{optionObj.text}</option>
                    ))}
                </select>
            </div>
        </>
    );
};

OrderSelect.propTypes = {
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
            "value":  PropTypes.string,
            "text": PropTypes.string
        })
    ),
};
