import './FormTitle.css';

export const FormTitle = ({userName}) => {
    return (
        <>
            <h2 className='form-title'>Привет, {userName}</h2>
        </>
    );
};