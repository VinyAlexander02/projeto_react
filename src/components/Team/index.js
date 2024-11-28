import './style.css'

export const Team = (props) => {
    return(

        <section className='team' style={{backgroundColor: props.secondaryColor}}>
            <h3 style={{borderColor: props.primaryColor}}>{props.teamName}</h3>
        </section>
    )
}