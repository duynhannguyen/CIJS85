import { useContext } from "react"
import ThemeContext from "../contexts/ThemeContext/ThemeContext";

const SwitchTheme = () => {
    const {setThemeOption} = useContext(ThemeContext);
    const onSwitchModeHandler = (e) => {
        const value = e.target.value
        setThemeOption(value);
    }
    return(
        <select onChange={onSwitchModeHandler} >
            <option value = "light" >Light mode</option>
            <option value = "dark">Dark mode</option>
        </select>
    )
}
export default SwitchTheme;