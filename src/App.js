import React from 'react';
import LanguageProvider from './simple-intl'
import {FormttedText} from "./simple-intl"
import B from './B'
class App extends React.Component{
    static contextType = LanguageProvider
    constructor() {
        super();
    }
    render() {
        return <div>
            <h1>this is h1</h1>
            <FormttedText message="hello"/>
            <hr />
            <B/>
        </div>
    }
}
export default App;
