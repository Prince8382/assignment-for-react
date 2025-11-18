function Child(props) {
  return <h4>Hello, {props.name}</h4>;
}

export default function PropsExample() {
  return (
    <div>
      <h3>Props Example</h3>
      <Child name="Prince" />
    </div>
  );
}
