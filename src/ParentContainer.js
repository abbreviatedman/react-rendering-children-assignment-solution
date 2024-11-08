import './ParentContainer.css';

function ParentContainer(props) {
  return (
    <div className="parent-container">
      <h2>Data from Star Wars API</h2>
      <div className="data-container">{props.children}</div>
    </div>
  );
}

export default ParentContainer;
