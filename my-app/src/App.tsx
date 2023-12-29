  import React from 'react';
  import { Editor } from "./components/editor/Editor"

  export type Props = {
    name: string;
  }

  function App( {name}: Props) {
    return (
      <div>
        <Editor />
      </div>
    )
  }

  export default App;
