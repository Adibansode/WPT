import { useState } from "react"

export default function Month() {
    let [month, setmonth] = useState("Not Selected")
    function handler(event) {
        let selected=parseFloat(event.target.value )
        console.log(selected)
        switch (selected) {
            case 1:
                setmonth("Jan")
                break
            case 2:
                setmonth("Feb")
                break
            case 3:
                setmonth("Mar")
                break
            case 4:                
            setmonth("Apr")
                break
            case 5:
                setmonth("May")
                break
            case 6:
                setmonth("Jun")
                break
            case 7:
                setmonth("Jul")
                break
            case 8:
                setmonth("Aug")
                break
            case 9:
                setmonth("Sept")
                break
            case 10:
                setmonth("Oct")
                break
            case 11:
                setmonth("Nov")
                break
            case 12:
                setmonth("Dec")
                break

        }

    }
    return (
        <>
            <select onChange={handler}>
                <option >Select Month</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option >9</option>
                <option >10</option>
                <option >11</option>
                <option >12</option>
            </select>
            <p>The month is:{month}</p>
        </>
    )
}