
import '../css/component/component.css'

function Hand_burger(){
    return(
        <img  className='hand' src='/assets/hamburger.png' alt=''></img>    )
}

const Logo=()=>{
    return(
        <img id='logo' src='/assets/Youtube-Logo.svg' alt=''></img>
    )
}
const Search_bar=()=>{
    function handle(){
        const main=document.getElementById('')
    }
    return(
        <div className='main_container'>
            <input className='search_txt' onFocus={handle()} placeholder='Search'></input>
            <img className='search_close' src='/assets/close.svg' alt=''></img>
            <button className='search_button'>
            <img className='search_icon' src='/assets/search.png' alt=''></img>
            </button>

        </div>
    )
}

const Mic=()=>{
    return(<div className='mic'>
        <img src='/assets/mic.png'></img>

    </div>

    )
}

const Top_bar_icon=(props)=>{
    let name='/assets/create_icon.png';
    if(props.Name==="create"){
        name='/assets/create_icon.png'
    }
   else if(props.Name==='notification'){
    name='/assets/notifications.png'

    }
    else if(props.Name==='handburger'){
        name='/assets/hamburger.png'
    }
    return(
        <abbr title={props.Name}><div  className='icon_container'>
        <img className='T_icon' src={name} alt=''></img>

    </div></abbr>
        
    )
}
const Side_bar_icon=(props)=>{
    let icon='/assets/home.png'
    let icon_name;
    if(props.Name==='home'){
        icon='/assets/home.png';
        icon_name='Home';
    }
    else if(props.Name==='subscription'){
        icon='/assets/subscriptions.png'
        icon_name='Subscription'
    }
    else if(props.Name==='help'){
        icon='/assets/help.png'
        icon_name='Help'
    }
    return(
        <abbr title={props.Name}>
            <div className='side_i_container'>
            <img className='s_icon' src={icon} alt=''></img>
            <div className='s_txt'>{icon_name}</div>

        </div>
        </abbr>
        
    )
}
const Filters=(props)=>{
    let Filter_name;
    Filter_name=props.Name;
    return(
        <abbr title={props.Name}>
             <div  className='filter_container'>
            <div className='filter_text'>
                {Filter_name}

            </div>

        </div>

        </abbr>
       
    )
}

const Toggle_component =(props)=>{
    let toggle_name ;
    toggle_name =props.Name;

    

    return(
        <div className='toggle_container'>
            <img className='toggle_icon' src={props.src} ></img>
            <div className='toggle_text'>{toggle_name}</div>

        </div>
    )
}

const Lable=(props)=>{
    return(
        <div className='lable_txt' >{props.Name}</div>
    )
}
const Video_card=(props)=>{
    /* The props of This Component are
        Video_src
        Profile_src
        Video_title
        Channel_name
        Views
        Upload_date

    */
   let time;
   let date=  new Date();
   const year=props.Date.slice(6,10)
   const month=props.Date.slice(3,5)
   const day =props.Date.slice(0,2)
   console.log(year);
   const current_year= date.getFullYear();
   const current_month= date.getMonth()
   const current_day=date.getDay()
   if((current_year-year)!==0){
    time= `${current_year-year} years ago`

   }
   else if((current_month-month)!==0){
    time= `${current_month-month} months ago`
   }
   else{
    time= `${current_day-day} days ago`
   }
   
    return(
    <div className='video_container'>
        
        <img className='video_thumbnail' src={props.Video_src} alt=''></img>        
        <div className='video_details_container'>
            <img className='video_profile' src={props.Profile_src} alt=''></img>
            <div className='video_txt_container'>
                <div className='video_title ' >{props.Video_title}

                </div>
                <div className='video_Channel_name'>
                    {props.Channel_name}
                    
                </div>
                <div className='views_and_time'>
                    <span className='views'>
                        {`${props.Views} views .`}

                    </span>
                    <span className='time'>
                        {time}
                        
                    </span>
                </div>
            </div>
            <img className='video_more' src='/assets/more-vertical-alt.svg'alt=''></img>
        </div>

    </div>)
}




export{Hand_burger, Logo,Search_bar,Mic,Top_bar_icon,Side_bar_icon,Filters,Toggle_component,Lable,Video_card}