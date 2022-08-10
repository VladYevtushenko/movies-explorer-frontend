import './SearchForm.css';
import lupa from '../../images/lupa-icon.svg' 

export const SearchForm = () => {
    return (
        <section className='search-form'>
            <form className='search-form__box'>
                <div className='search-form__field'>
                    <img className='lupa' src={lupa} alt='lupa icon' />
                    <input 
                        className='search-form__input'
                        type='text'
                        placeholder={`Фильм`}
                        name='film'
                        required
                    />
                    <button 
                        className='search-form__btn'
                        type='button'
                    ></button>
                </div>
                <label className='tumbler__label'>
                    <input 
                        className='checkbox'
                        name='short-film'
                        type='checkbox'
                    />
                    <span className='checkbox__icon'></span>
                    Короткометражки
                </label>
            </form>
            {/* <span className='search-form__error'>{messageError}</span> */}
        </section>
    );
};