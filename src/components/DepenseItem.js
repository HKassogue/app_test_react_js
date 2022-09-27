import './DepenseItem.css'

function DepenseItem() {
    return (
        <div className='depense-item'>
            <div>28 mars 2022</div>
            <div className='depense-item__description'>
                <h2>Assurance voiture</h2>
                <div className='depense-item__price'>290 $</div>
            </div>
        </div>
    );
}

export default DepenseItem;