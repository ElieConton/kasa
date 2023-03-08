import './host.css'

function Host(props) {
  return (
    <div className="host">
      <p className="host-name">{props.host.name}</p>
      <img className="host-img" src={props.host.picture} alt="host" />
    </div>
  );
}

export default Host;