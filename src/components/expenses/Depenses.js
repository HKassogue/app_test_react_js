import DepenseItem from './DepenseItem';
import './Depenses.css'

function Depenses(props) {
    return (
        <div className='depenses'>
          <DepenseItem
            title = {props.depenses[0].title}
            amount = {props.depenses[0].amount}
            date = {props.depenses[0].date}
          />
    
          <DepenseItem
            title = {props.depenses[1].title}
            amount = {props.depenses[1].amount}
            date = {props.depenses[1].date}
          />
    
          <DepenseItem
            title = {props.depenses[2].title}
            amount = {props.depenses[2].amount}
            date = {props.depenses[2].date}
          />
    
          <DepenseItem
            title = {props.depenses[3].title}
            amount = {props.depenses[3].amount}
            date = {props.depenses[3].date}
          />
        </div>
      );
}

export default Depenses;