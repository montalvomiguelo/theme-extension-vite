export default function Button(props) {
  return <button {...props} disabled={props.disabled} class="button" />;
}
