const Notification = props => {
   const {className,iconUrl,message}=props
   return<div className={`card ${className}`}>
        <img className="icon" src={iconUrl} />
       <p className="message">{message}</p>
   </div>
}

const element = (
   <div className="container">
       <h1 className="heading">Notification</h1>
       <div className="notifications-list-container"> 
        <Notification 
        className="primary-bg-color" 
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"  
        message="information message"/>
        <Notification
        className="success-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
      />
      <Notification
        className="warning-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
      />
      <Notification
        className="danger-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error Message"
      />

   </div>
</div>   
)

ReactDOM.render(element, document.getElementById('root'))
