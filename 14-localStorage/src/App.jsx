const App = () => {
 
  const user = {
    username:"sarthak",
    age:"56",
    city:"bhopal"
  }

  localStorage.setItem('user',JSON.stringify(user))
  return (
    <div>App</div>
  )
}

export default App