import './Spinner.css'
import { ClipLoader } from 'react-spinners'

type Props = {
    isloading?: boolean
}

const Spinner = ({isloading = true}: Props) => {
  return (
    <div id='spinner-container'>
        <ClipLoader color='#2563eb' loading={isloading} size={50} />
    </div>
  )
}

export default Spinner