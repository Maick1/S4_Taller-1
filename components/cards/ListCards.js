import React, {useState} from 'react'
const ListCards = () => {
    const [celebridades, setcelebridades] = useState(null)
    const [error, seterror] = useState(false)
        const getUsuarios = async() =>{
            try {
                const res = await fetch("https://randomuser.me/api/")
                const data = await res.json()
                setcelebridades(data.results[0])
                seterror(false)
            } catch (error) {
                console.log(error)
                seterror(true)
            }
            
        }
    
    if (error){
        return <div class="alert alert-danger" role="alert">
                    Error a cargar el api Users! <a href='https://randomuser.me'>Revise el link</a>
               </div>
    }
    return ( 
                    //< className="position-sticky top-5 start-50 col-sm-6 col-md-6 col-lg-4" key={user.login.uuid}>
        <div className='position-sticky top-6 start-50 col-sm-6 col-md-4 col-lg-3'>
            <div className = "card">
            <img src={celebridades?.picture?.large} className="card-img-top"/>
            <div className="card-body text-center">
            <h5 className="card-title">{celebridades?.name?.last}</h5>
            <button className='btn btn-success fs-4'
            onClick={getUsuarios}>
                Has Click :3
            </button>
        </div>        
    </div>
</div>   
)    
}
export default ListCards;