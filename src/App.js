import Input from './components/Input';
import Footer from './components/Footer'
import './styles/custom.css'

function App() {
  return (
    <div className="App">
      <h1 style={{
        color: '#222',
        fontWeight: '500',
        marginBottom: '50px'
      }}>Inputs</h1>
      <Input
        code="<Input />"
      />
      <hr />
      <Input
        code="<Input error />"
        error
      />
      <hr />
      <Input
        code="<Input disabled />"
        disabled
      />
      <hr />
      <Input
        code='<Input helperText="Some interesting text" />'
        helperText="Some interesting text"
      />
      <hr />
      <Input
        code='<Input helperText="Some interesting text" error />'
        helperText="Some interesting text"
        error
      />
      <hr />
      <Input
        code='<Input value="text" />'
        value="text"
      />
      <hr />
      <Input
        code='<Input startIcon />'
        startIcon
      />
      <hr />
      <Input
        code='<Input endIcon />'
        endIcon
      />
      <hr />
      <Input
        code='<Input size="sm" />'
        size="sm"
      />
      <hr />
      <Input
        code='<Input size="md" />'
        size="md"
      />
      <hr />
      <Input
        code='<Input fullWidth />'
        fullWidth
      />
      <hr />
      <Input
        code='<Input multiline row="5" />'
        multiline
        row="5"
      />
      <Footer />
    </div>
  );
}

export default App;
