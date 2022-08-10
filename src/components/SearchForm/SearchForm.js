import './SearchForm.css';

export const SearchForm = () => {
    <section className='search-form'>
        <form className='search-form__box'>
            <div className='search-form__field'>
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
};