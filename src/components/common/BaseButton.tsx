import React, { useContext } from 'react'
import UserContext from '../../utils/UserContext';
type Props = { buttonLabel: string,
    onClick: () => void}
export default function BaseButton(props: Props) {
   const { buttonLabel , onClick } = props;
   const { theme } = useContext(UserContext);
   console.log(theme);

   const setClassName = (theme) => {
      const className = theme === 'light' ? 'border-black border w-20 bg-green-50 rounded-lg' : ' border-grey border w-20 bg-white-50 rounded-lg'
      console.log(className);
      return className;
    }
  return (
    <button
    className={setClassName(theme)}
    onClick={onClick}
  >
    {buttonLabel}
  </button>  )
}
