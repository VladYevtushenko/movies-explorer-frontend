import { useEffect, useState } from 'react';
import './SearchForm.css';
import lupa from '../../images/lupa-icon.svg';
import { USE_TEXT_MESSAGE } from '../../consts/consts';

export const SearchForm = ({
    requestList,
    onClickShortMovie,
    openResultMessage,
    type,
}) => {
    const [value, setValue] = useState({text: '', shortTumbler: 'off'});
    const [shortMovieTumbler, setShortMovieTumbler] = useState(false);
    const [messageError, setMessageError] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleChange = (evt) => {
        evt.preventDefault();
        const { value } = evt.target;
        setValue((previous) => ({ ...previous, text: value }));
        setMessageError(evt.target.validationMessage);
    };

    const handleShortTumbler = () => {
        const newValue = value.shortTumbler === 'off' ? 'on' : 'off';
        setValue((previous) => ({ ...previous, text: newValue }));
        setShortMovieTumbler(!shortMovieTumbler);
        return onClickShortMovie(newValue);
    };

    const onClickMovieSearchBtn = () => {
        if (messageError) {
            return openResultMessage(USE_TEXT_MESSAGE);
        } else return requestList(value);
    };

    useEffect(() => {
        if (type === 'completeMoviesList') {
            const searchMovie = localStorage.getItem('searchMovie');
            const shortMovieFilter = localStorage.getItem('shortMovieFilter');
            if (!searchMovie && !shortMovieFilter) {
                setValue({ text: '', shortTumbler: 'off' });
                setShortMovieTumbler(false);
                return;
            } else setValue({ text: searchMovie, shortTumbler: shortMovieFilter });
            setShortMovieTumbler(shortMovieFilter === 'on' ? true : false);
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
            <form className='search-form__box'>
                <div className='search-form__field'>
                    <img className='lupa' src={lupa} alt='lupa icon' />
                    <input 
                        className='search-form__input'
                        type='text'
                        placeholder={`Фильм`}
                        onChange={handleChange}
                        name='film'
                        vlaue={value.text}
                        required
                    />
                    <button 
                        className='search-form__btn'
                        type='button'
                        disabled={!isValid}
                        onClick={(e) => onClickMovieSearchBtn(e)}
                    ></button>
                </div>
                <label className='tumbler__label'>
                    <input 
                        className='checkbox'
                        name='shortMode'
                        type='checkbox'
                        value={value.shortMode}
                        onChange={handleShortTumbler}
                    />
                    <span className='checkbox__icon'></span>
                    Короткометражки
                </label>
            </form>
            {messageError && <span className='search-form__error'>{messageError}</span>}
        </section>
    );
};