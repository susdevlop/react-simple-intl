/**
 * Created by TzuHsing on 2019-12-16
 */

import React, {Component,createContext} from 'react';
import PropTypes from 'prop-types';
const LanguageProvider = createContext({languageObj:{}})


export class IntlProvider extends Component {
    render() {
        return (
            <LanguageProvider.Provider value={this.props.ProviderValue}>
                {this.props.children}
            </LanguageProvider.Provider>
        );
    }
}
IntlProvider.propTypes = {
    ProviderValue:PropTypes.object.isRequired
};


export class FormttedText extends Component {
    static contextType = LanguageProvider
    constructor() {
        super();
        this.state = {
            langObj:''
        }
        this.getKeyWord = this.getKeyWord.bind(this)
    }
    componentDidMount() {
        // this.setState({
        //     langObj:this.context
        // })
    }
    getKeyWord(propsText){
        let langObj = this.context;
        if(langObj){
            if(this.context[propsText]){
                return this.context[propsText]
            }
            console.warn(propsText+'is not defind')
        }
        return false;
    }
    render() {
        const Text = this.getKeyWord(this.props.message)
        return <React.Fragment>
            {Text}
        </React.Fragment>;
    }
}
export default LanguageProvider