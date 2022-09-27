import './DepenseItem.css'

function DepenseItem() {
    const DepenseDate = new Date(2022,3,28);
    const DepenseTitre = "Assurance voiture";
    const DepenseMontant = 290;

    return (
        <div className='depense-item'>
            <div>{DepenseDate.toISOString()}</div>
            <div className='depense-item__description'>
                <h2>{DepenseTitre}</h2>
                <div className='depense-item__price'>{DepenseMontant} $</div>
            </div>
        </div>
    );
}

export default DepenseItem;