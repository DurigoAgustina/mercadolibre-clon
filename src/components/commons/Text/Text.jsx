
const Text = ({Element, children, ...rest}) => {
  return (
    <Element {...rest}> { children } </Element>
  )
}

export default Text