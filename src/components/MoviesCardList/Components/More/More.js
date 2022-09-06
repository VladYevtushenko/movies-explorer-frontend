import './More.css';

export const More = ({ useCounter }) => {
    return (
        <section className='movies-card-list__more-container'>
            <button 
                type='button' 
                className='movies-card-list__more-btn'
                onClick={useCounter}
            >
                Ещё
            </button>
        </section>
    );
};