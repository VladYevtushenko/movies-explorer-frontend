import { useEffect, useState } from 'react';
import './SearchForm.css';
import lupa from '../../images/lupa-icon.svg';
import { USE_TEXT_MESSAGE } from '../../consts/consts';
import classNames from 'classnames';

export const SearchForm = ({
    requestList,
    onClickShortMovieBtn,
    openResultMessage,
    type,
}) => {
    const [value, setValue] = useState({text: '', short: 'off'});
    const [tumbler, setTumbler] = useState(false);
    const [messageError, setMessageError] = useState('');
    const [isValid, setIsValid] = useState(true);

    const searchBtnClass = classNames(`search-form__btn`, {
        'search-form__btn_disabled': !isValid,
    });

    const handleChange = (evt) => {
        evt.preventDefault();
        const { value } = evt.target;
        setValue((prev) => ({ ...prev, text: value }));
        setMessageError(evt.target.validationMessage);
    };

    const handleShortTumbler = () => {
        const valueNew = value.short === 'off' ? 'on' : 'off';
        setValue((prev) => ({ ...prev, short: valueNew }));
        setTumbler(!tumbler);
        return onClickShortMovieBtn(valueNew);        
    };

    const onClickMovieSearchBtn = () => {
        if (messageError) {
            return openResultMessage(USE_TEXT_MESSAGE);
        } else return requestList(value);
        };

    useEffect(() => {
        if (type === 'allMovies') {
            const searchText = localStorage.getItem('searchText');
            const shortFilter = localStorage.getItem('shortFilter');
            if (!searchText && !shortFilter) {
                setValue({ text: '', short: 'off' });
                setTumbler(false);
                return;
            } else setValue({ text: searchText, short: shortFilter });
            setTumbler(shortFilter === 'on' ? true : false);

            return;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type]);

    useEffect(() => {
        if (!value.text) {
            return setIsValid(false);
        }
        setIsValid(true);
    }, [value.text]);

    return (
        <section className='search-form'>
            <form className='search-form__box' name='search'>
                <div className='search-form__field'>
                    <img className='lupa' src={lupa} alt='lupa icon' />
                    <input 
                        className='search-form__input'
                        type='text'
                        placeholder={`Фильм`}
                        onChange={handleChange}
                        name='text'
                        vlaue={value.text}
                        required
                        form='search'
                    />
                    <button 
                        className={searchBtnClass}
                        type='button'
                        disabled={!isValid}
                        onClick={onClickMovieSearchBtn}
                        form='search'
                    ></button>
                </div>
                <label className='tumbler__label'>
                    <input 
                        className='checkbox'
                        name='short'
                        type='checkbox'
                        value={value.short}
                        onChange={handleShortTumbler}
                        checked={tumbler}
                    />
                    <span className='checkbox__icon'></span>
                    Короткометражки
                </label>
            </form>
            {messageError && 
                <span 
                    className='search-form__error'
                    form='search'
                >{messageError}</span>}
        </section>
    );
};